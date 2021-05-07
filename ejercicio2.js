//Funciones
const f1 = (arrayE) => {
    if(arrayE.length>0){
        arrayE.map((number,i)=>arrayE[i]=Math.floor(number/2))
        return arrayE
    }else{
        return []
    }
}
const f2 = (arrayE, func) => {
    arrayE.map((number,i)=>arrayE[i]=func(number))
    return arrayE
}
const f3 = (arrayE, n) => {
    var arrayNew=[]
    arrayE.map(number=>{
        if(number>n){
            arrayNew.push(number)
        }
    })
    return arrayNew
}
const f4 = (arrayE, func) => {
    return arrayE.filter(num=>func(num));
}
const f5 = (arrayE,n) =>{
    //Buscando los numeros menores y agregandolos a un array, si existen
    var newArrayMenores=arrayE.filter(num=>{if(num<n){return num}})
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
    var newArrayResult=arrayE.filter(number=>func(number))
    if(newArrayResult.length>0){
        //Retornando la primera incidencia
        return newArrayResult[0]
    }else{
        //Si no hay incidencias retorna -1
        return -1
    }
  }

  test_ejercicio2(f1, f2, f3, f4, f5, f6);