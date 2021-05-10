const suma=(arrayE)=>{
    let suma=0
    for(let i=0;i<arrayE.length;i++){
        suma+=arrayE[i]
    }
    return suma
}
const reverse=(arrayE)=>{
    let newArrayReversed=[]
    for(let i=arrayE.length-1;i>=0;i--){
        newArrayReversed.push(arrayE[i])
    }
    return newArrayReversed
}
const rotaciones = (arrayE, n) => {
    if(arrayE.length){
        for(let i=0;i<n;i++){
            let aux=arrayE[0]
            for(let j=0;j<arrayE.length-1;j++){
                arrayE[j]=arrayE[j+1]
            }
            arrayE[(arrayE.length-1)]=aux
        }
    }
    return arrayE
}

const mesetaMasLarga=(arrayE)=>{
    let mesetaMasLarga=0
    if(!arrayE||!arrayE.length)return mesetaMasLarga
    let cont=1
    for(let i=0;i<arrayE.length;i++){
        if(arrayE[i]!==arrayE[i+1]){
            if(mesetaMasLarga<cont)mesetaMasLarga=cont
            cont=1
        }else {
            cont++ 
        }
    }
    return mesetaMasLarga
}
test_ejercicio1(suma, reverse, mesetaMasLarga, rotaciones)