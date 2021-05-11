//Ejercicio 6
const listar = (o) => {
    let cadenaListada=new Array(o.length)
    for(let x=0;x<cadenaListada.length;x++)cadenaListada[x]=''
    for(let i=0;i<o.length;i++){
        let separate='',cont=0
        for(let property in o[i]){
            if(cont>0)separate=','
            cont++
            cadenaListada[i]+=`${separate+property}:${o[i][property]}`
        }
    }
    return cadenaListada;
  }
const invertir = (o) => {
    let arrayObjectInverse=[]
    for(let i=0;i<o.length;i++){
        let newObject={}
        for(let property in o[i]){
            console.log(`${o[i][property]}:${property}`)
            newObject[`${o[i][property]}`]=property
        }
        arrayObjectInverse[i]=newObject
    }
return arrayObjectInverse;
}
// Defini en Aux.js un objeto de referencia (object1 y object2).
const ordenarPorId = (a) => {
return a;
}
// Defini en aux dos menues de referencia (menu1 y menu2)
const imprimirArbol = (menu) => {
return ''
}
// Defini en aux un menu de referencia (menu3)
const primerElemento = (menu) => {
return {};
}
console.log(invertir(object1))