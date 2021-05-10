// Ejercicio 5
const extraePalabras=(cadena)=>{
    arrayPalabras=[]
    let inicio=0
    for(let i=0;i<cadena.length;i++){
        if(cadena[i]===' '){
            arrayPalabras.push(cadena.substring(inicio,i))
            inicio=i+1
        }else if(i===cadena.length-1){
            arrayPalabras.push(cadena.substring(inicio,cadena.length))
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
        newCadenaCapitalizada+=(space+arrayPalabras[i])
    }
    return newCadenaCapitalizada
  }
  
const inverso = (cadena) => {
    let newCadenaInversa=""
    let arrayPalabras=extraePalabras(cadena)
    for(let i=arrayPalabras.length-1;i>=0;i--){
        let space=' '
        if(newCadenaInversa.length===0) space=''
        newCadenaInversa+=(space+arrayPalabras[i])
    }
    return newCadenaInversa;
}
const compruebaCadenasIguales=(cadenaBase,cadenaComprueba)=>{
    console.log(cadenaBase,cadenaComprueba)
    if(cadenaBase.length===cadenaComprueba.length){
        for(let i=0;i<cadenaComprueba.length;i++){
            if(cadenaBase[i].charAt()!==cadenaComprueba[i].charAt()){
                return false
            }
        }
        return true
    }
    return false
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
        //Si la segunda palabra es igual, la rellena con el caracter.
        //Sí no, deja la palabra en la oración
        if(compruebaCadenasIguales(arrayPalabras[i],cadenaACambiar)){
            newCadena+=(space+generaCaracter('#',cadenaACambiar.length))
        }else{
            newCadena+=(space+arrayPalabras[i])
        }
    }
    return newCadena
}
  
const contarArrays = (arrayBase, arrayComprueba) => {
    //Iniciando el array contador con el tamaño del array comprobar
    let arrayCont=new Array(arrayComprueba.length)
    for(let i=0;i<arrayCont.length;i++)arrayCont[i]=0
    //Recorriendo el array y comprobando palabra por palabra (0x1,0x2,0x3;1x1,1x2...n x n)
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
    if(!s1)return false
    //comprueba letra por letra hasta que encuentra 1 igual
    for(let i=0;i<s1.length-1;i++){
        for(let j=0;j<s2.length;j++){
            //Si es igual busco comprobar ambas cadenas, si es igual retorna true
            if(s1[i]===s2[j]&&compruebaCadenasIguales(s1.substring(i,(i+s2.length)),s2)){
                return true
            }
            //Si la primera comprobacion no es igual sigue a la siguiente letra
            break
        }
    }
    return false
}
  
test_ejercicio5(capitalizar, inverso, sanitizar, contarArrays, esSubSecuencia)