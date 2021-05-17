let boxSemaforos=document.querySelector('.boxSemaforos')
const lanzarPromesa=(numeroDePromesa)=>{
    return new Promise((resolve, reject) => {
        //A fines visuales coloque el timeout para el color amarillo
        setTimeout(()=>{
        console.log(`Promesa del semaforo ${numeroDePromesa} en proceso`)
        cambiarLuz('luzAmarilla')
            setTimeout(()=>{
                resolve("Promesa numero: " + numeroDePromesa + " resuelta");
            },Math.random()*100)
        }, 2000);
        //El tiempo de 2000 esta colocado para que se vea el cambio de colores.
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
        },1500)
        //El tiempo 1500 esta colocado para que se vean el cambio de colores.
    })
}
const procesoPorElemento=(cola)=>{
    if(cola.length){
    reiniciaSemaforo()
    .then(reinicio=>{
        document.getElementById('numeroPromesa').innerHTML=cola[0]+1
        console.log(reinicio+cola[0])
        cambiarLuz('luzVerde')
        lanzarPromesa(cola[0])
        .then(resolve=>{
            cambiarLuz('luzRoja')
            console.log(resolve+'\n/////////////////////////////////////////')
            cola.shift()
            procesoPorElemento(cola)
        })
    })}
}
const semaforo=(cantDePromesas)=>{
    //Guandando en un array
    let cola=[]
    for(let i=0;i<cantDePromesas;i++){
        cola.push(i)
        console.log(cola)
    }
    procesoPorElemento(cola)
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