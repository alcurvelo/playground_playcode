let boxSemaforos=document.querySelector('.boxSemaforos')
const lanzarPromesa=(numeroDePromesa)=>{
    return new Promise((resolve, reject) => {
        //A fines vizuales coloque el timeout para el color amarillo
        setTimeout(()=>{
        console.log(`Promesa del semaforo ${numeroDePromesa} en proceso`)
        cambiarLuz(`luzAmarilla${numeroDePromesa}`)
            setTimeout(()=>{
                resolve("Promesa numero: " + numeroDePromesa + " resuelta");
            },2000)
        }, 1000);
    })
}
const generaSemaforo=(numero)=>{
    let newSemaforo=document.createElement('div')
    //Para dar tiempo a que se cree el nuevo semaforo
    //Genere una promesa para que lo espere, y luego pueda cambiar las luces.
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            newSemaforo.innerHTML=`
            <div id="sem${numero}" class="semaforo">
                <div id="luzVerde${numero}" class="foco verde gris"></div>
                <div id="luzAmarilla${numero}" class="foco amarillo gris"></div>
                <div id="luzRoja${numero}" class="foco rojo gris"></div>
            </div>`
            boxSemaforos.appendChild(newSemaforo)
            cambiarLuz(`luzVerde${numero}`)
            resolve("Se creo el semaforo numero: " + numero);
        }, 1000);
    })
}
const cambiarLuz=(focoLuzId)=>{
    let elementFoco=document.getElementById(`${focoLuzId}`)
    elementFoco.classList.remove('gris')
}
const semaforo=async(cantDePromesas)=>{
    for(let i=0;i<cantDePromesas;i++){
        await generaSemaforo(i)
        .then(semaforoCreado=>{
            console.log(semaforoCreado)
            cambiarLuz(`luzVerde${i}`)
        })
        await lanzarPromesa(i)
        .then(resolve=>{
            cambiarLuz(`luzRoja${i}`)
            console.log(resolve+'\n/////////////////////////////////////////')
        })
    }
}
semaforo(10)
  /*lanzarProcesos(7).forEach((promesa) => {
    promesa.then((mensaje) => {
      console.log(mensaje);
    })
  });*/
  // proceso = function(resolve, numero ) {
  //   setTimeout(function() {
  //     resolve(numero)
  //   }, Math.random()*100)
  // }