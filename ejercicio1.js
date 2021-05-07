const suma=(arrayE)=>{
    console.log(arrayE)
    if(arrayE.length>0){
        var suma=0
        for(let i=0;i<arrayE.length;i++){
            suma+=arrayE[i]
        }
        return suma
    } else{
        return 0
    }
}
const reverse=(arrayE)=>{
    newArrayReversed=[]
    for(let i=arrayE.length-1;i==0;i--){
        newArrayReversed.push(arrayE[i])
    }
    return newArrayReversed
}
const rotaciones = (arrayE, n) => {
    var x=0
    while(x<n){
        const aux=arrayE[0]
        for(var i=0;i<arrayE.length-1;i++){
            arrayE[i]=arrayE[i+1]
        }
        arrayE[(arrayE.length-1)]=aux
        x++
    }
    return arrayE
}

const filtro=(array)=>{
    //si hay elementos en el array
    if(array.length>0){
        const dataArr = new Set(array);
        return [...dataArr];
    }else{
        return []
    }
}

const mesetaMasLarga=(arrayE)=>{
    if(arrayE.length>0){
        //Filtro para saber cuales son los elementos
        const arrayElementsFiltered=filtro(arrayE)
        const arrayContElements=[]
        for(let i=0;i<arrayElementsFiltered.length;i++){
            var cont=0
            for(let j=0;j<arrayE.length;j++){
                if(arrayElementsFiltered[i]===arrayE[j]){
                    cont++
                }
            }
            arrayContElements.push(cont)
        }
        //Evaluo el maximo del arreglo resultante del conteo y lo retorno
        return Math.max(...arrayContElements)
    }else{
        return 0
    }
}
test_ejercicio1(suma, reverse, mesetaMasLarga, rotaciones)