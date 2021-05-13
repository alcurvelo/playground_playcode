let boxSemaforos=document.querySelector('.boxSemaforos')
const lanzarPromesa=(numeroDePromesa)=>{
    return new Promise((resolve, reject) => {
        //A fines vizuales coloque el timeout para el color amarillo
        setTimeout(()=>{
        console.log(`Promesa del semaforo ${numeroDePromesa} en proceso`)
        cambiarLuz('luzAmarilla')
            setTimeout(()=>{
                resolve("Promesa numero: " + numeroDePromesa + " resuelta");
            },1000)
        }, 2000);
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
        },1000)
    })
}
const semaforo=async(cantDePromesas)=>{
    for(let i=0;i<cantDePromesas;i++){
        //Una promesa para reiniciar el semaforo
        await reiniciaSemaforo()
        .then(async reinicio=>{
            document.getElementById('numeroPromesa').innerHTML=i+1
            console.log(reinicio+i)
            cambiarLuz('luzVerde')
            await lanzarPromesa(i)
            .then(resolve=>{
                cambiarLuz('luzRoja')
                console.log(resolve+'\n/////////////////////////////////////////')
            })
        })
    }
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