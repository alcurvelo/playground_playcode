var dataFacturas={}
fetch('data/dataFacturas.json')
.then(response=>response.json())
.then(data=>cargada(data))

const cargada=(dataFacturas)=>{
    var section=document.getElementById("facturas")
    dataFacturas.facturas.map((factura,i)=>{
        let divPreVisual=document.createElement('div')
        divPreVisual.innerHTML=`
        <div class="boxPreVisual">
            <label for="c${factura.numero}">${i+1}</label>
            <input id="c${factura.numero}" class="cBoxFac" type="checkbox"/>
            <div class="preVisual" id="${factura.numero}">
                <h4><span>Numero de Factura:</span>\t${factura.numero}</h4>
            </div>
        </div>
        `
        section.appendChild(divPreVisual)
        document.getElementById(factura.numero).addEventListener('click', function(e){
            e.preventDefault();
            let divViewFactura=document.querySelector('.viewFactura')
            divViewFactura.innerHTML=''
            let divContent=document.createElement('div')
            let conceptos=''
            let cuerpo=''
            cuerpo=`
                    <h2>Nombre del servicio</h2>
                    <div class="infoClient">
                        <h4>Nombre del Titular:\t${dataFacturas.titularSuministro}</h4>
                        <p><span>Numero de Cliente:</span>\t${dataFacturas.numeroCliente}</p>
                        <p><span>Direccion:</span>\t${dataFacturas.direccion}</p>
                    </div>   
                    <div class="infoFactura">
                        <h4>Numero de Factura:\t<span style="color:rgb(205,121,2)">${factura.numero}</span></h4>
                        <p><span>Fecha de emisión:</span>\t${factura.fechaEmision}</p>
                        <p><span>Fecha de Vencimiento:</span>\t${factura.fechaVencimiento}</p>
                        <table>
                            <thead>
                                <tr>
                                    <th class="tableConcept">Concepto</th>
                                    <th class="tableMonto">Monto</th>
                                </tr>
                            </thead>
                            <tbody>`
                            factura.conceptos.map((concepto,i)=>{
                                conceptos+='<tr><td class="tableConcept">'+concepto.titulo+'</td><td class="tableMonto">$'+concepto.monto+'</td></tr>'
                                if(factura.conceptos.length-1===i){
                                    cuerpo+=conceptos
                                }
                            })
                            cuerpo+=`</tbody>
                        </table>
                        <div class="totalesPagar">
                            <h3>Monto a pagar antes de vencer</h3>
                            <h3 class="verde montoSinVencer">$${factura.montoTotal}</h3>
                        </div>
                        <div class="totalesPagar">
                            <h3>Monto a pagar ya vencida:</h3>
                            <h3 class="rojo montoVencido">$${(factura.montoTotal*0.035)+factura.montoTotal}</h3>
                        </div>
                    </div>
            `
            divContent.innerHTML=cuerpo
            divViewFactura.appendChild(divContent)
          })
    })
    //calcular
    document.getElementById('bCalcular').addEventListener('click', function(e){
        e.preventDefault();
        let montoAPagar=document.getElementById('montoAPagar').value
        if(montoAPagar.length===0||parseInt(montoAPagar)<1){
            alert("Debe ingresar un monto(Que no sea negativo y mayor que 0)")
        }else{
            let facturasAPagar=[]
            montoAPagar=parseInt(montoAPagar)
            let aux=montoAPagar
            dataFacturas.facturas.map((factura,i)=>{
                if(aux-factura.montoTotal>=0){
                    aux-=factura.montoTotal
                    facturasAPagar.push(factura)
                }
            })
            if(facturasAPagar.length>0){
                let mensaje='Con el monto ($'+montoAPagar+') puede pagar la/s factura/s número/s:\n'
                facturasAPagar.map((factura,i)=>{
                   mensaje+=`${i+1}) ${factura.numero}, con monto de: $${factura.montoTotal}\n`
                })
                mensaje+='Seleccionala/s y luego presiona el boton "Pagar facturas"'
                alert(mensaje)
            }else{
                alert("Ese monto no alcanza para cubrir ninguna factura.")
            }
        }
    })
    document.getElementById('bPagarFacturas').addEventListener('click', function(e){
        e.preventDefault();
        let arrayFacturasAPagar=[]
        let arrayCheckFacturas=document.querySelectorAll('.cBoxFac')
        arrayCheckFacturas.forEach((currentValue, currentIndex, listObj)=>{
            if(listObj[currentIndex].checked){
                dataFacturas.facturas.map((factura,i)=>{
                    if(factura.numero===listObj[currentIndex].id.substring(1,listObj[currentIndex].id.length)){
                        arrayFacturasAPagar[i]=factura
                    }
                })
            }
        })
        if(arrayFacturasAPagar.length>0){
            let mensaje='Seleccionaste a pagar la/s factura/s número/s:\n'
            arrayFacturasAPagar.map((factura,i)=>{
               mensaje+=`${i+1}) ${factura.numero}, con monto de: $${factura.montoTotal}\n`
            })
            mensaje+='¿Estás seguro de esta selección?'
            let confirmacion=confirm(mensaje)
            if(confirmacion){
                alert("Tu/s factura/s ha/n sido pagada/s.")
                alert("Y deberia/n eliminarse del array de datos y re-renderizar pero no va a pasar xD")
            }else{
                alert("Vuelve a seleccionar las facturas deseadas.")
            }
        }else{
            alert("¡Debes seleccionar al menos una factura!")
        }
    })
}