//jsnack 3
//Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

const array = ['Francesco', 'Nicola', 'Giovanni',
'Sara', 'Sabrina', 'Giorgio', 'Luca', 'Martina', 'Carmen', 'Gianluca', 'Enrico' ];
console.log(array);
const min = 2;
const max = 10;

let arrayFind = () => {
  var newArray = [];
  for (let index = min; index < max; index++) {
   newArray.push(array[index]);
  }
  return newArray;
// blocco di codice
// su più righe
}

const arraySelection = arrayFind();
console.log(arraySelection);

const vini2019 = [
  {
    cantina: 'Gaja',
    nomeVino: 'Sorì San Lorenzo',
  },
  {
    cantina: 'Antinori',
    nomeVino: 'Tignanello',
  },
  {
    cantina: 'Frescobaldi',
    nomeVino: 'Massetto',
  },
  {
    cantina: 'Quintodecimo',
    nomeVino: 'Exult',
  }
];
console.log('Vini del 2019', vini2019);
const vini2020 = [
  {
    cantina: 'Almondo',
    nomeVino: 'Bricco delle Ciliege',
  },
  {
    cantina: 'Ciro Picariello',
    nomeVino: 'Fiano d Avellino',
  },
  {
    cantina: 'Cantine San Marzano',
    nomeVino: 'Sessantanni',
  }
];
console.log('Vini del 2020',vini2020);

let viniTot = [...vini2019,...vini2020];
console.log('Vini Totali', viniTot);



//----------------------------------------------------------------- slide
// const constantString = 'mio valore';
// // constantString = 10; Errore
// //Uncaught TypeError: Assignment to constant variable.
// const constantArray = [];
// // constantArray = 'Pippo';Errore
// //Uncaught TypeError: Assignment to constant variable.
// const constantObject = {
// 'name' : 'Pippo'
// }
// // constantObject = []; Errore
// //Uncaught TypeError: Assign
// const constantArray = [];
// constantArray.push(1);
// console.log(constantArray);
// // [1];
// const constantObject = {
// 'name' : 'Pippo'
// }
// constantObject.age = 20
// console.log(constantObject);
// // {name: "Pippo", age: 20}
// var variable = 10;
// variable = 'pippo';
// console.log(variable);
// //pippo
// let variableNew = 'pluto';
// variableNew = variable + ' ' + variableNew;
// console.log(variableNew);
// //
// console.log(variable);
// //undefined
// var variable = 10;
// variable = 'pippo';
// // console.log(variableNew); Errore!!!!
// //Uncaught ReferenceError: variableNew is not defined
// let variableNew = 'pluto';
// variableNew = variable + ' ' + variableNew;

// var variable = 'pippo';
// console.log('var prima:', variable);
// let secondVariable = 10;
// console.log('let prima:', secondVariable);
// const ConstantVariable = 'constance';
// console.log(ConstantVariable);
// function myFunction(params) {
// //Scope
//   variable = 'pluto';
//   secondVariable = 15;
//   constantVariable = 'paperino';
// //Uncaught TypeError: Assignment to constant variable.
// }
// myFunction();
// console.log('var dopo', variable); //pluto
// console.log('let dopo',secondVariable); //15


// function myFunction(params) {
//   var variable = 'pippo';
//   let secondVariable = 10;
//   const constantVariable = 'constance';
// }
// // console.log(variable);
// // // Uncaught ReferenceError: variable is not defined
// // console.log(secondVariable);
// // // Uncaught ReferenceError: secondVariable is not defined
// // console.log(constantVariable);
// // // Uncaught ReferenceError: constantVariable is not defined
// var risultato = true;
// if(risultato == true) {
// var variable = 'pippo';
// let secondVariable = 10;
// const constantVariable = 'constance';
// }
// console.log(variable);
// //'pippo'
// // console.log(secondVariable);
// // // Uncaught ReferenceError: secondVariable is not defined
// // console.log(constantVariable);
// // // Uncaught ReferenceError: constantVariable is not defined
// for (let index = 0; index < 10; index++) {
//  console.log(index);
// }
// if(index === 10) {
//  console.log(index);
// }

// let string = 'Qui';
// let stringTwo = 'Qua';
// const stringThree = 'Birre';
// console.log(
// `
//    ${string} Quo ${stringTwo}
//    Andarono al mercato
//    a prendere le
//    ${stringThree}
//  `
// );
// //Qui Quo Qua
//  // Andarono al mercato


//funzione con nome
// const myFunction = () => 1 + 1;
// const resultFunction = myFunction();
// console.log(resultFunction);
//funzione anonima
// document.getElementById('button').addEventListener('click',
//   () => console.log(this)
// );

// document.getElementById('button').addEventListener('click', function() {
//  console.log(this);
//  // qui otteniamo <button id="button">Click</button>
// });

// function myFunction(...myArguments) {
//  console.log(myArguments);
// }
// myFunction('uno', 3, {name: 'pippo'});
// //avremo un array composto da tre elementi
// const arr1 = [3, 5, 1];
// const arr2 = [8, 9, 15];
// let mergedArray = [...arr1,...arr2];
// console.log(mergedArray); //[3,5,1,8,9,15]
// const obj = {name: 'palla', peso: 50};
// const copyObj = {...obj, colore: 'blue'};
// console.log(copyObj); //{name: "palla", peso: 50, colore: "blue"}
