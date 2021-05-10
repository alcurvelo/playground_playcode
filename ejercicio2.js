//Funciones
const f1 = (arrayE) => {
    if(!arrayE||!arrayE.length)return arrayE
    for(let i=0;i<arrayE.length;i++){
        arrayE[i]=Math.floor(arrayE[i]/2)
    }
    return arrayE
}
const f2 = (arrayE, func) => {
    for(let i=0;i<arrayE.length;i++){
        arrayE[i]=func(arrayE[i])
    }
    return arrayE
}
const f3 = (arrayE, n) => {
    var arrayNew=[]
    for(let i=0;i<arrayE.length;i++){
        if(arrayE[i]>n){
            arrayNew.push(arrayE[i])
        }
    }
    return arrayNew
}
const f4 = (arrayE, func) => {
    newArray=[]
    for(let i=0;i<arrayE.length;i++){
        if(func(arrayE[i])){
            newArray.push(arrayE[i])
        }
    }
    return newArray
}
const f5 = (arrayE,n) =>{
    //Buscando los numeros menores y agregandolos a un array, si existen
    var newArrayMenores=[]
    for(let i=0;i<arrayE.length;i++){
        if(arrayE[i]<n){
            newArrayMenores.push(arrayE[i])
        }
    }
    if(newArrayMenores.length>0){
        //retornando la primera incidencia
        return newArrayMenores[0]
    }else{
        //Si no hay elementos en el array retorna -1
        return -1
    }
}
const f6 = (arrayE, func) => {
    //Llenando un array de los resultados devultos por la funcion del parametro
    for(let i=0;i<arrayE.length;i++){
        //Retorna el primero que cumpla
        if(func(arrayE[i])){
            return arrayE[i]
        }
    }
    //Si nungúno cumple retorna -1
    return -1
}
test_ejercicio2(f1, f2, f3, f4, f5, f6);