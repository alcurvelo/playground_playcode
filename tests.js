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

const multipleTestFunction = function (func, inputs, results) {
  for (let i = 0; i < results.length; i++) {
    console.log(`TEST [${i + 1}/${inputs.length}]:`);
    testFunction(func, inputs[i], results[i]);
  }
};

const test_sumatoria = function (sumatoria) {
  const a0 = [];
  const a1 = [1, 2, 3, 4, 5];
  const a2 = [1, 2, 3, 4, 5, -20];
  const a3 = [1.5, 2.3, 3.2];
  multipleTestFunction(sumatoria, [[a0], [a1], [a2], [a3]], [0, 15, -5, 7]);
};

const test_reverso = function (reverso) {
  const a1 = [];
  const a2 = [1, 2, 3, 4, 5];
  const a3 = ["a", "b", "c"];
  multipleTestFunction(
    reverso,
    [[a1], [a2], [a3]],
    [[], [5, 4, 3, 2, 1], ["c", "b", "a"]]
  );
};

const test_meseta = function (meseta) {
  const a1 = [];
  const a2 = [1, 2, 3];
  const a3 = [1, 2, 2, 3, 3, 3, 3, 3, 4, 5, 5, 5, 3];
  const a4 = ["a", "b", "b", "c"];
  multipleTestFunction(meseta, [[a1], [a2], [a3], [a4]], [0, 1, 5, 2]);
};

const test_rotaciones = function (rotaciones) {
  const a1 = [];
  const a2 = [1, 2, 3, 4, 5];
  const a3 = [1, 2, 3];
  const a4 = ["a", "b", "c", "d"];
  multipleTestFunction(
    rotaciones,
    [
      [a1, 2],
      [a2, 2],
      [a3, 3],
      [a4, 1],
    ],
    [[], [3, 4, 5, 1, 2], [1, 2, 3], ["b", "c", "d", "a"]]
  );
};

const test_ejercicio1 = function (sum, rev, mes, rot) {
  console.log("\nTESTS SUMATORIA:");
  test_sumatoria(sum);
  console.log("\nTESTS REVERSO:");
  test_reverso(rev);
  console.log("\nTESTS ROTACIONES:");
  test_rotaciones(rot);
  console.log("\nTESTS MESETA MAS LARGA:");
  test_meseta(mes);
};

const test_f1 = function (f1) {
  const a0 = [];
  const a1 = [1, 22, 31, 40, 12, 7];
  multipleTestFunction(f1, [[a0], [a1]], [[], [0, 11, 15, 20, 6, 3]]);
};

const test_f2 = function (f2) {
  const a1 = [];
  const a2 = [3, 6, 7, 11];
  const a3 = [2, 3, 4, 5];
  multipleTestFunction(
    f2,
    [
      [a1, faux1],
      [a2, faux1],
      [a3, faux2],
    ],
    [[], [0, 0, 1, 2], [4, 9, 16, 25]]
  );
};

const test_f3 = function (f3) {
  const a0 = [];
  const a1 = [1, 2, 3, 4];
  const a2 = [1, 2, 3, 4];
  const a3 = [2, 3, 4];
  multipleTestFunction(
    f3,
    [
      [a0, 1],
      [a1, 5],
      [a2, 2],
      [a3, 1],
    ],
    [[], [], [3, 4], [2, 3, 4]]
  );
};

const test_f4 = function (f4) {
  const a0 = [];
  const a1 = [2, 4, 5, 7, 8];
  multipleTestFunction(
    f4,
    [
      [a0, faux3],
      [a1, faux3],
    ],
    [[], [2, 5, 7]]
  );
};

const test_f5 = function (f5) {
  const a0 = [];
  const a1 = [1, 2, 3, 4];
  const a2 = [1, 2, 3, 4];
  const a3 = [6, 8, 4];
  multipleTestFunction(
    f5,
    [
      [a0, 0],
      [a1, 3],
      [a2, 2],
      [a3, 7],
    ],
    [-1, 1, 1, 6]
  );
};

const test_f6 = function (f6) {
  const a0 = [];
  const a1 = [4, 6, 8, 14];
  const a2 = [4, 6, 8, 7];
  multipleTestFunction(
    f6,
    [
      [a0, faux3],
      [a1, faux3],
      [a2, faux3],
    ],
    [-1, -1, 7]
  );
};

const test_ejercicio2 = function (f1, f2, f3, f4, f5, f6) {
  console.log("\nTESTS F1:");
  test_f1(f1);
  console.log("\nTESTS F2:");
  test_f2(f2);
  console.log("\nTESTS f3:");
  test_f3(f3);
  console.log("\nTESTS F4:");
  test_f4(f4);
  console.log("\nTESTS F5:");
  test_f5(f5);
  console.log("\nTESTS F6:");
  test_f6(f6);
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
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0],
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
};

const test_capitalizar = function (capitalizar) {
  const s1 = "";
  const s2 = "hola mundo prueba";
  const s3 = "a ante contra Bajo";
  multipleTestFunction(
    capitalizar,
    [[s1], [s2], [s3]],
    ["", "Hola Mundo Prueba", "A Ante Contra Bajo"]
  );
};

const test_inverso = function (inverso) {
  const s1 = "";
  const s2 = "una";
  const s3 = "prueba capicua prueba";
  const s4 = "a ante contra Bajo";
  multipleTestFunction(
    inverso,
    [[s1], [s2], [s3], [s4]],
    ["", "una", "prueba capicua prueba", "Bajo contra ante a"]
  );
};

const test_sanitizar = function (sanitizar) {
  const s1 = "";
  const s2 = "una";
  const s3 = "dos";
  const s4 = "prueba capicua prueba documento";
  multipleTestFunction(
    sanitizar,
    [
      [s1, "u"],
      [s2, "otra"],
      [s3, "dos"],
      [s4, "prueba"],
    ],
    ["", "una", "###", "###### capicua ###### documento"]
  );
};

const test_contarArrays = function (contar) {
  const s1 = [];
  const s2 = ["uno"];
  const r1 = [0];
  const s3 = ["aba", "baba", "aba", "xzxb"];
  const s4 = ["aba", "ab", "xzxb"];
  const r2 = [2, 0, 1];
  multipleTestFunction(
    contar,
    [
      [s1, s2],
      [s3, s4],
    ],
    [r1, r2]
  );
};

const test_subseq = function (sub) {
  const s1 = "";
  const s2 = "ABCDEFCD";
  const s3 = "BC";
  const s4 = "FA";
  const s5 = "CD";
  multipleTestFunction(
    sub,
    [
      [s1, s3],
      [s2, s3],
      [s2, s4],
      [s2, s5],
    ],
    [false, true, false, true]
  );
};

const test_ejercicio5 = function (cap, inv, san, contarArr, substr) {
  console.log("\nTESTS CAPITALIZAR:");
  test_capitalizar(cap);
  console.log("\nTESTS INVERSO:");
  test_inverso(inv);
  console.log("\nTESTS SANITIZAR:");
  test_sanitizar(san);
  console.log("\nTESTS CONTAR ARRAYS:");
  test_contarArrays(contarArr);
  console.log("\nTESTS SUBSECUENCIA:");
  test_subseq(substr);
};