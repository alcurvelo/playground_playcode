const maximo = (matriz) =>{
  if(matriz.length>0&&matriz[0].length>0){
    let mayorDeTodos=0
    for(let i=0;i<matriz.length;i++){
      for(let j=0;j<matriz[i].length;j++){
        if(mayorDeTodos<matriz[i][j]) mayorDeTodos=matriz[i][j]
      }
    }
    return mayorDeTodos
  }else return -1
}
const multiplicarMatrices = (matriz1, matriz2) => {
  filasM1 = matriz1.length;
  columnM1 = matriz1[0].length;
  filasM2 = matriz2.length;
  columnM2 = matriz2[0].length;
  let resultMultiplicacion = new Array(filasM1);
  if (columnM1 != filasM2)return console.log("Estas matricez no se pueden calcular.")   
  for (i=0; i<resultMultiplicacion.length;i++){
    resultMultiplicacion[i] = new Array(columnM2).fill(0);
  }
  for (i=0;i<resultMultiplicacion.length;i++) {
    for (j=0;j<resultMultiplicacion[i].length;j++) {                                
      for (k=0; k<columnM1; k++) {
        resultMultiplicacion [i][j] +=matriz1[i][k]*matriz2[k][j]; 
      }
    }
  }
  return resultMultiplicacion
}
const valoresArrayIguales=(array)=>{
  for(let i=0;i<array.length-1;i++){
    if(array[i]!==array[i+1]){
      return false
    }
  }
  return true
}
const guardandoDiagonal=(matriz)=>{
    let arrayResult=[]
    for(let i=0;i<matriz.length;i++){
        for(let j=0;j<matriz[0].length;j++){
            if(i===j){
              arrayResult.push(matriz[i][j])
            }
        }
    }
    return arrayResult
}
const metodoDeLaBurbujaMenorMayor=(array)=>{
  for(let i=0;i<array.length;i++){
    for(let j=0;j<array.length-i-1;j++){
      if(array[j]>array[j+1]){
        let aux=array[j+1]
        array[j+1]=array[j]
        array[j]=aux
      }
    }
  }
  return array
}
const esDegrade = (mEntrada) => {
  if(mEntrada[0].length===0){
    return true;
  }else{
    //Guardo la diagonal en una variable
    let arrayDiagonal=guardandoDiagonal(mEntrada)
    //Evaluo si son iguales
    if(valoresArrayIguales(arrayDiagonal)){
      //Si el array esta en vertical (1 columna varias filas)
      if(arrayDiagonal.length===1&&mEntrada.length>1){
        //1 columna varias filas
        let horizontal=[]
        for(let i=0;i<mEntrada.length;i++){
          horizontal.push(mEntrada[i][0])
        }
        mEntrada[0]=horizontal
      }
      //Si son iguales, evaluo si cada array esta ordenado de menor a mayor y comparo con la copia
      for(let i=0;i<mEntrada.length;i++){
        //copiando el array
        let arrayAux=[]
        for(let x=0;x<mEntrada[i].length;x++){
          arrayAux[x]=mEntrada[i][x]
        }
        arrayOrden=metodoDeLaBurbujaMenorMayor(mEntrada[i])
        for(let i=0;i<arrayAux.length;i++){
          //Si encuentra una diferencia en el array original
          if(arrayAux[i]!==arrayOrden[i]){
            return false
          }
        }
      }
      //Sí el array copia es igual al de la matriz (Es decir esta de menor a mayor), retorna true
      return true 
    }else{
      return false
    }
  }
}
const validacionDeSoloCerosYUnos=(M)=>{
  for(let i=0;i<M.length;i++){
    for(let j=0;j<M[i].length;j++){
      if(M[i][j]!==0&&M[i][j]!==1){
          return false
      }
    }
  }
  return true
}
const compruebaAlternado=(array)=>{
  for (let i=0;i<array.length-1;i++){
    if(array[i+1]===array[i]) return false
  }
  return true
}
const esDamero = (M) => {
  //Sí está vacio retorna false
  if((M.length>0&&M[0].length>0)&&validacionDeSoloCerosYUnos(M)){
    //Guardando la primera columna mientras compruebo alternado de las filas
    let arrayPrimeraColumna=[]
    for(let i=0;i<M.length;i++){
      if(compruebaAlternado(M[i])){
        arrayPrimeraColumna.push(M[i][0])
      }else return false
    }
    //Si llega a este punto, es por que todas las filas estan alternadas
    //Finalmente, compruebo si la primera columna tambien esta alternada
    if(compruebaAlternado(arrayPrimeraColumna))return true
    return false
  }
  return false
}

const esDameroRegular = (M) => {
  if(M.length===M[0].length){
    if(esDamero(M)){
      return true
    }else{
      return false  
    }
  }else{
    return false
  }
}

test_ejercicio3(maximo, multiplicarMatrices, esDegrade, esDamero, esDameroRegular);