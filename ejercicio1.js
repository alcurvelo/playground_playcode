var array1=[1,2,3,4,5]
var array2=[1,2,3,4,5]
var array3=[1,3,3,3,2,2,5,5,5,5,5,4,4,4,4,4,4,4,4]

const suma=(arrayE)=>{
    if(arrayE.length>0){
        return arrayE.reduce((num,acc)=>acc+=num)
    } else{
        return 0
    }
}
const reverse=(arrayE)=>{
    return arrayE.reverse()
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
const masetaMasLarga=(arrayE)=>{
    if(arrayE.length>0){
        //Filtro para saber cuales son los elementos
        const arrayElementsFiltered=arrayE.filter((element,i)=>arrayE.indexOf(element)===i)
        const arrayContElements=[]
        arrayElementsFiltered.map(element=>{
            var cont=0
            for(var i=0;i<arrayE.length;i++){
                if(element===arrayE[i]){
                    cont++
                }
            }
            arrayContElements.push(cont)
        })
        //Evaluo el maximo del arreglo resultante del conteo y lo retorno
        return Math.max(...arrayContElements)
    }else{
        return 0
    }
}

console.log(suma(array1))
console.log(reverse(array1))
console.log(rotaciones(array2,3))
console.log(masetaMasLarga(array3))