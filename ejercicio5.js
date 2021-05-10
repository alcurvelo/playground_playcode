// Ejercicio 5
const extraePalabras=(cadena)=>{
    arrayPalabras=[]
    let inicio=0
    for(let i=0;i<cadena.length;i++){
        if(cadena[i]===' '){
            fin=i
            arrayPalabras.push(cadena.substring(inicio,fin))
            inicio=fin+1
        }else if(i===cadena.length-1){
            fin=cadena.length
            arrayPalabras.push(cadena.substring(inicio,fin))
        }
    }
    return arrayPalabras
}
const capitalizar = (cadena) => {
    let newCadenaCapitalizada=""
    let arrayPalabras=extraePalabras(cadena)
    for(let i=0;i<arrayPalabras.length;i++){
        let space=' '
        if(newCadenaCapitalizada.length===0) space=''
        //Si la primera letra de la palabra es minuscula, la cambia a mayuscula
        if(arrayPalabras[i][0].charAt()>='a'&&arrayPalabras[i][0].charAt()<='z'){
            //Edito la cadena, cambiando la primera por mayuscula, y el resto lo concateno igual
            arrayPalabras[i]=arrayPalabras[i][0].charAt().toUpperCase()+arrayPalabras[i].substring(1,arrayPalabras[i].length)
        }
        newCadenaCapitalizada=newCadenaCapitalizada+space+arrayPalabras[i]
    }
    return newCadenaCapitalizada
  }
  
const inverso = (cadena) => {
    let newCadenaInversa=""
    let arrayPalabras=extraePalabras(cadena)
    for(let i=arrayPalabras.length-1;i>=0;i--){
        let space=' '
        if(newCadenaInversa.length===0) space=''
        newCadenaInversa=newCadenaInversa+space+arrayPalabras[i]
    }
    return newCadenaInversa;
}
const compruebaCadenasIguales=(cadenaBase,cadenaComprueba)=>{
    if(cadenaBase.length===cadenaComprueba.length){
        for(let i=0;i<cadenaComprueba.length;i++){
            if(cadenaBase[i].charAt()===cadenaComprueba[i].charAt()){
                if(i===cadenaComprueba.length-1){
                    return true
                }
            }else{
                return false
            }
        }
    }else{
        return false
    }
}
const generaCaracter=(caracter,numero)=>{
    let cadena=""
    for(i=0;i<numero;i++){
        cadena+=caracter.charAt()
    }
    return cadena
}

const sanitizar = (cadena, cadenaACambiar) => {
    let arrayPalabras=extraePalabras(cadena)
    let newCadena=""
    for(let i=0;i<arrayPalabras.length;i++){
        let space=' '
        if(newCadena.length===0) space=''
        if(compruebaCadenasIguales(arrayPalabras[i],cadenaACambiar)){
            newCadena=newCadena+space+generaCaracter('#',cadenaACambiar.length)
        }else{
            newCadena=newCadena+space+arrayPalabras[i]
        }
    }
    return newCadena
}
  
const contarArrays = (arrayBase, arrayComprueba) => {
    //Iniciando el array contador
    let arrayCont=new Array(arrayComprueba.length)
    for(let i=0;i<arrayCont.length;i++)arrayCont[i]=0
    //Recorirendo el array y comprobando palabra por palabra (0x1,0x2,0x3;1x1,1x2...n x n)
    for(let i=0;i<arrayBase.length;i++){
        for(let j=0;j<arrayComprueba.length;j++){
            if(compruebaCadenasIguales(arrayBase[i],arrayComprueba[j])){
                arrayCont[j]+=1
            }
        }
    }
    return arrayCont;
}
  
const esSubSecuencia = (s1, s2) => {
    if(s1.length>0){
        console.log(s1,s2)
        console.log(s1.substring(s1.length-s2.length,s1.length),s2)
        //Según el tamaño de la cadena a comprobar, cortor el final de la cadena 1 y las compruebo
        if(compruebaCadenasIguales(s1.substring(s1.length-s2.length,s1.length),s2)){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}
  
test_ejercicio5(capitalizar, inverso, sanitizar, contarArrays, esSubSecuencia)