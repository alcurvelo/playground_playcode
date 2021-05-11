let objeto={
    nombre:'Claudio',
    apellido:'Perez',
    identificacion:'33645781'
}
//Ejercicio 6
const listar = (o) => {
    let cadenaListada=""
    let separate='',cont=0
    for(let property in o){
        if(cont>0)separate=','
        cont++
        cadenaListada+=`${separate+property}:${o[property]}`
    }
    return cadenaListada;
  }
const invertir = (o) => {
    let newObject={}
    for(let property in o){
        newObject[`${o[property]}`]=property
    }
return newObject;
}
// Defini en Aux.js un objeto de referencia (object1 y object2).
const ordenarPorId = (arrayDeObjetosAOrdenar) => {
    for(let i=0;i<arrayDeObjetosAOrdenar.length-1;i++){
        for(let j=0;j<arrayDeObjetosAOrdenar.length-1;j++){
            if(arrayDeObjetosAOrdenar[j].id>arrayDeObjetosAOrdenar[j+1].id){
                let aux=arrayDeObjetosAOrdenar[j+1]
                arrayDeObjetosAOrdenar[j+1]=arrayDeObjetosAOrdenar[j]
                arrayDeObjetosAOrdenar[j]=aux
            }
        }
    }
return arrayDeObjetosAOrdenar;
}
const alternaCaracter=(caracter)=>{
    switch(caracter){
        case '*':return '>'
        case '>':return '-'
        case '-':return '.'
        case '.':return '*'
    }
}
// Defini en aux dos menues de referencia (menu1 y menu2)
const imprimirArbol = (menuOSubMenu,espacio='',caracter='*') => {
    for(let i=0;i<menuOSubMenu.length;i++){
        //Para que me sirva para el ejerciocio de abajo tambien, por eso la condicion
        //Si no existe la propiedad ó es true lo va a pintar. Sí es false no lo pinta.
        if(menuOSubMenu[i].visible!==false){
            console.log(espacio+caracter+menuOSubMenu[i].title+'\n')
            if(menuOSubMenu[i].subOptions.length>0){
                imprimirArbol(menuOSubMenu[i].subOptions,espacio+'\t',alternaCaracter(caracter))
            }
        }
    }
}
// Defini en aux un menu de referencia (menu3)
const primerElemento = (menu) => {
    imprimirArbol(menu)
}
console.log("\n/////////LISTAR////////////\n\n",listar(objeto),"\n\n///////////////////////////\n")
console.log("\n/////////INVERTIR////////////\n\n",invertir(objeto),"\n\n///////////////////////////\n")
console.log("\n/////////ORDENAR POR ID////////////\n\n",ordenarPorId(object1),"\n\n///////////////////////////\n")
console.log("\n/////////IMPRIMIR ARBOL////////////\n\n")
imprimirArbol(menu2)
console.log("\n\n///////////////////////////\n")
console.log("\n/////////PRIMER ELEMENTO////////////\n\n")
primerElemento(menu3)
console.log("\n\n///////////////////////////\n")