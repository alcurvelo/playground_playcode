const test_ejercicio3 = function (
    maximo,
    multiplicar,
    degrade,
    esDamero,
    esDameroRegular
  ) {
    console.log("\nTESTS MAXIMO:");
    test_maximo(maximo);
    console.log("\nTESTS MULTIPLICAR MATRICES:");
    test_multiplicar(multiplicar);
    console.log("\nTESTS ES DEGRADE:");
    test_esDegrade(degrade);
    console.log("\nTESTS ES DAMERO:");
    test_esDamero(esDamero);
    console.log("\nTESTS ES DAMERO REGULAR:");
    test_esDameroRegular(esDameroRegular);
  }
const multipleTestFunction = function (func, inputs, results) {
    for (let i = 0; i < results.length; i++) {
      console.log(`TEST [${i + 1}/${inputs.length}]:`);
      testFunction(func, inputs[i], results[i]);
    }
  };
  const testFunction = function (func, inputs, check) {
    const result = func.apply(this, inputs);
    const s_result = JSON.stringify(result);
    const s_check = JSON.stringify(check);
    const message =
      s_result === s_check
        ? "PASS"
        : `FAIL | Expected ${s_check} got ${s_result}`;
    console.log(message);
  };
const test_maximo = function (maximo) {
    const m1 = [[]];
    const m2 = [[2, 3, 4, 5]];
    const m3 = [
      [-1, 2, 3],
      [4, -5, 7],
      [8, 2, 1],
    ];
    multipleTestFunction(maximo, [[m1], [m2], [m3]], [-1, 5, 8]);
  };
  
  const test_multiplicar = function (multiplicar) {
    const m1 = [[2, 3]];
    const m2 = [[2], [4]];
    const r1 = [[16]];
    const m3 = [[1, 3, 2]];
    const m4 = [
      [1, 0],
      [2, 4],
      [5, 1],
    ];
    const r2 = [[17, 14]];
    const m5 = [
      [2, 5, 1],
      [4, 3, 1],
    ];
    const m6 = [
      [1, 0, 0],
      [0, 2, 0],
      [2, 3, 1],
    ];
    const r3 = [
      [4, 13, 1],
      [6, 9, 1],
    ];
    multipleTestFunction(
      multiplicar,
      [
        [m1, m2],
        [m3, m4],
        [m5, m6],
      ],
      [r1, r2, r3]
    );
  };
  
  const test_esDegrade = function (degrade) {
    const m1 = [[]]; // true
    const m2 = [[1, 2, 3]]; // true
    const m3 = [[1], [2], [3]]; // true
    const m4 = [[5, 3, 2]]; // false
    const m5 = [[5], [3], [2]]; // false
    const m6 = [
      [4, 6, 25],
      [3, 4, 6],
      [8, 3, 4],
    ]; // false
    const m7 = [
      [99, 8, 7],
      [8, 7, 3],
      [7, 3, 1],
    ]; // false
    const m8 = [
      [4, 6, 25],
      [3, 4, 6],
      [2, 3, 4],
    ]; // true
    multipleTestFunction(
      degrade,
      [[m1], [m2], [m3], [m4], [m5], [m6], [m7], [m8]],
      [true, true, true, false, false, false, false, true]
    );
  };
  
  const test_esDamero = function (esDamero) {
    const m1 = [[]]; // false
    const m2 = [[1, 0, 1, 0]]; // true
    const m3 = [
      [1, 0, 1, 0],
      [1, 0, 1, 0],
    ]; // false
    const m4 = [
      [0, 1, 0, 1],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
    ]; // true
    multipleTestFunction(
      esDamero,
      [[m1], [m2], [m3], [m4]],
      [false, true, false, true]
    );
  };
  
  const test_esDameroRegular = function (esDameroRegular) {
    const m1 = [
      [1, 0, 1, 0],
      [1, 0, 1, 0],
    ]; // false
    const m2 = [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1],
    ]; // true
    multipleTestFunction(esDameroRegular, [[m1], [m2]], [false, true]);
  };

  const metodoDeLaBurbujaMayorMenor=(array)=>{
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-i-1;j++){
            if(array[j]<array[j+1]){
                var aux=array[j+1]
                array[j+1]=array[j]
                array[j]=aux
            }
        }
    }
    return array
}
const maximo = (matriz) =>{
    const arrayMayores=[]
    //recorriendo la matriz
    for(let i=0;i<matriz.length;i++){
        //Si el arreglo de la matriz no esta vacio
        if(matriz[i].length>0){
            //Uso el metodo de la burbuja para ordenar cada array de mayor a menor
            matriz[i]=metodoDeLaBurbujaMayorMenor(matriz[i])
        }else{
            //Si esta vacia la matriz retorna -1
            return -1
        }
        //Ya ordenada la matriz uso un array para guardar solo los mayores de cada array
        if(matriz.length-1===i){
            for(x=0;x<matriz.length;x++){
                arrayMayores.push(matriz[x][0])
            }
        }
    }
    //retorno el numero mayor luego de ordenar la matriz de los mayores
    return metodoDeLaBurbujaMayorMenor(arrayMayores)[0]
}
const multiplicarMatrices = (matriz1, matriz2) => {
  filasM1 = matriz1.length;
  columnM1 = matriz1[0].length;
  filasM2 = matriz2.length;
  columnM2 = matriz2[0].length;
  let resultMultiplicacion = new Array(filasM1);
  if (columnM1 != filasM2){
    console.log("Estas matrices no pueden calcularse.")
  }else{
    for (i=0; i<resultMultiplicacion.length;i++){
      resultMultiplicacion[i] = new Array(columnM2).fill(0);
    }
    for (i=0;i<resultMultiplicacion.length;i++) {
      for (j=0;j<resultMultiplicacion[i].length;j++) {                                
        for (k=0; k<columnM1; k++) {
          resultMultiplicacion [i][j] = resultMultiplicacion [i][j] + matriz1[i][k]*matriz2[k][j]; 
        }
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
    var arrayResult=[]
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
    var arrayDiagonal=guardandoDiagonal(mEntrada)
    //Evaluo si son iguales
    if(valoresArrayIguales(arrayDiagonal)){
      //Si el array esta en vertical (1 columna varias filas)
      if(arrayDiagonal.length===1&&mEntrada.length>1){
        //1 columna varias filas
        var horizontal=[]
        for(let i=0;i<mEntrada.length;i++){
          horizontal.push(mEntrada[i][0])
        }
        mEntrada[0]=horizontal
      }
      //Si son iguales, evaluo si cada array esta ordenado de menor a mayor y comparo con la copia
      for(let i=0;i<mEntrada.length;i++){
        //copiando el array
        var arrayAux=[]
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
const soloCeroUno=(M)=>{
  for(let i=0;i<M.length;i++){
    for(let j=0;j<M[i].length;j++){
      if(M[i][j]!==0){
        if(M[i][j]!==1){
          return false
        }
      }
    }
  }
  return true
}

const comprobarIteracionTablero=(M)=>{
  var aux=M[0][0]
  for(let i=0;i<M.length;i++){
    for(let j=0;j<M[i].length;j++){
      //En la primera vuelta comprueba que siga el patron de iteracion tomando el aux como inicio
      //Si encuentra algún patron distinto a la iteracion del tablero retorna false.
      //Si llega al final de la iteracion devuelve true
      if(M[i][j]===aux){
        if(M[i].length-1===j){
          if(M.length-1===i){
            return true
          }else{
            if(aux!==M[i+1][0]){
              console.log("regular")
              return false
            }else{
              aux=M[i+1][0]
            }
          }
        }else{
          aux=M[i][j+1]
        }
      }else{
        return false
      }
    }
  }
}
const esDamero = (M) => {
  if(soloCeroUno(M)){
    if(M[0].length>0){
      if(comprobarIteracionTablero(M)){
        return true
      }else{
        return false
      }
    }else{
      return false
    }
  }else{
    return false
  }
}

const esDameroRegular = (M) => {
  console.log(M)
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

test_esDameroRegular(esDameroRegular);