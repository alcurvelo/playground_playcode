let ocupado=false
let procesosEnEspera=[]
let boxSemaforos=document.querySelector('.boxSemaforos')
const lanzarPromesa=(numeroDePromesa)=>{
    return new Promise((resolve, reject) => {
        //A fines visuales coloque el timeout para el color amarillo
        setTimeout(()=>{
            let time=Math.random()*100
            console.log(`Promesa del semaforo ${numeroDePromesa} en proceso`)
            cambiarLuz('luzAmarilla')
                setTimeout(()=>{
                    resolve("Promesa numero: " + numeroDePromesa + " resuelta con el tiempo random: "+time);
                },time)
        }, 0);
        //El tiempo deberia estar en 1000 o más para que se vean el cambio de colores.
    })
}
const cambiarLuz=(focoLuz)=>{
    let elementFoco=document.getElementById(`${focoLuz}`)
    elementFoco.classList.remove('gris')
}
const reiniciaSemaforo=()=>{
    let luces=["luzVerde","luzAmarilla","luzRoja"]
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            luces.map(luz=>document.getElementById(luz).classList.add('gris'))
            resolve("Se inicia el semaforo numero: ")
        }, 0)
        //El tiempo deberia estar en 1000 o más para que se vean el cambio de colores.
    })
}
const noOcupado=(element)=>{
    if(!ocupado){
        ocupado=true
        procesoPorElemento(element)
    }
    else procesosAEsperar(element)
}
const procesosAEsperar=(element)=>{
    if(element==='signal'&&procesosEnEspera.length){
        noOcupado(procesosEnEspera.shift())
    }else if(element!=='signal'){
        procesosEnEspera.push(element)
    }
}
const procesoPorElemento=(element)=>{
    reiniciaSemaforo()
    .then(reinicio=>{
        document.getElementById('numeroPromesa').innerHTML=element+1
        console.log(reinicio+element)
        cambiarLuz('luzVerde')
        lanzarPromesa(element)
        .then(resolve=>{
            cambiarLuz('luzRoja')
            console.log(resolve+'\n/////////////////////////////////////////')
            ocupado=false
            procesosAEsperar('signal')
        })
    })
}
const semaforo=(cantDePromesas)=>{
    //Guandando en un array
    let cola=[]
    for(let i=0;i<cantDePromesas;i++){
        cola.push(i)
        console.log(cola)
    }
    cola.forEach(element=>{
        noOcupado(element)
    })
}
document.querySelector('.bCantidadPromesas').addEventListener('click', function(e){
    e.preventDefault();
    let bCantidadPromesas=document.getElementById('cantidadPromesas').value
    if(bCantidadPromesas.length>0&&parseInt(bCantidadPromesas)>0){
        semaforo(parseInt(bCantidadPromesas))
    }else{
        alert("Solo se admiten números mayores a 0.")
    }
})