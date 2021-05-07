const faux1 = function (n) {return n%3};
const faux2 = function (n) {return n*n};
const faux3 = function (n) {
  for (let i = 2; i<n; i++) if (n%i === 0) return false;
  return n > 1;
};

const object1 = [
  {title: 'Ordenable 2', id: 2},
  {title: 'Ordenable 5', id: 5},
  {title: 'Ordenable 1', id: 1},
  {title: 'Ordenable 6', id: 6},
  {title: 'Ordenable 3', id: 3},
  {title: 'Ordenable 7', id: 7},
  {title: 'Ordenable 9', id: 9},
  {title: 'Ordenable 4', id: 4},
  {title: 'Ordenable 8', id: 8},
]

const menu1 = [{title: 'NivelA', onSelected: 'Inserte función aqui',  subOptions: [
    {title: 'NivelAA', onSelected: 'Inserte función aqui',  subOptions: []}, {title: 'NivelAB', onSelected: 'Inserte función aqui',  subOptions: []}
  ]
 }]

const menu2 = [{title: 'NivelA', onSelected: 'Inserte función aqui',  subOptions: [
    {title: 'NivelAA', onSelected: 'Inserte función aqui',  subOptions: [
      {title: 'NivelAAA', onSelected: 'Inserte función aqui',  subOptions: []}
    ]}, {title: 'NivelAB', onSelected: 'Inserte función aqui',  subOptions: [
      {title: 'NivelABA', onSelected: 'Inserte función aqui',  subOptions: []},
      {title: 'NivelABB', onSelected: 'Inserte función aqui',  subOptions: []},
      {title: 'NivelABC', onSelected: 'Inserte función aqui',  subOptions: []}
    ]}
  ]
 }, {title: 'NivelB', onSelected: 'Inserte función aqui',  subOptions: [
   {title: 'NivelBA', onSelected: 'Inserte función aqui',  subOptions: [
     {title: 'NivelBAA', onSelected: 'Inserte función aqui',  subOptions: []}
   ]},
   {title: 'NivelBB', onSelected: 'Inserte función aqui',  subOptions: []}
 ]}, 
 {title: 'NivelC', onSelected: 'Inserte función aqui',  subOptions: [
   {title: 'NivelCA', onSelected: 'Inserte función aqui',  subOptions: [
     {title: 'NivelCAA', onSelected: 'Inserte función aqui',  subOptions: []},
     {title: 'NivelCAB', onSelected: 'Inserte función aqui',  subOptions: [
       {title: 'NivelCABA', onSelected: 'Inserte función aqui',  subOptions: []} // Todo para decir de que lado de la gral paz estaba.
     ]}
   ]}
 ]}]

 const menu3 = [{title: 'NivelA', onSelected: 'Inserte función aqui',  visible: false, subOptions: [
   {title: 'NivelAA', onSelected: 'Inserte función aqui',  visible: true, subOptions: [
     {title: 'NivelAAA', onSelected: 'Inserte función aqui',  visible: true, subOptions: []}
   ]},
   {title: 'NivelAB', onSelected: 'Inserte función aqui',  visible: false, subOptions: []}
 ]
 }, {title: 'NivelB', onSelected: 'Inserte función aqui',  visible: true, subOptions: [
   {title: 'NivelBA', onSelected: 'Inserte función aqui',  visible: false, subOptions: []},
   {title: 'NivelBB', onSelected: 'Inserte función aqui',  visible: true, subOptions: [
     {title: 'NivelBBA', onSelected: 'Inserte función aqui',  visible: false, subOptions: []},
     {title: 'NivelBBB', onSelected: 'Inserte función aqui',  visible: true, subOptions: []} //Es esta la que deberia verse como primer visible (De hecho es la unica)
   ]}
 ]}]