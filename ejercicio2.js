//Funciones
const f1 = (arrayE) => {
    if(!arrayE||!arrayE.length)return arrayE
    for(let i=0;i<arrayE.length;i++){
        arrayE[i]=Math.floor(arrayE[i]/2)
    }
    return arrayE
}
const f2 = (arrayE, func) => {
    if(!arrayE||!func)return arrayE
    for(let i=0;i<arrayE.length;i++){
        arrayE[i]=func(arrayE[i])
    }
    return arrayE
}
const f3 = (arrayE, n) => {
    let arraySoloMAyoresQueN=[]
    if(arrayE){
        for(let i=0;i<arrayE.length;i++){
            if(arrayE[i]>n){
                arraySoloMAyoresQueN.push(arrayE[i])
            }
        }
    }
    return arraySoloMAyoresQueN
}
const f4 = (arrayE, func) => {
    if(arrayE||func){
    newArray=[]
        for(let i=0;i<arrayE.length;i++){
            if(func(arrayE[i])){
                newArray.push(arrayE[i])
            }
        }
    }
    return newArray
}
const f5 = (arrayE,n) =>{
    if(arrayE){
        for(let i=0;i<arrayE.length;i++){
            if(arrayE[i]<n){
                return arrayE[i]
            }
        }
    }
    return -1
}
const f6 = (arrayE, func) => {
    if(arrayE&&func){
        for(let i=0;i<arrayE.length;i++){
            //Retorna el primero que cumpla
            if(func(arrayE[i])) return arrayE[i]
        }
    }
    //Si nungúno cumple retorna -1
    return -1
}
test_ejercicio2(f1, f2, f3, f4, f5, f6);