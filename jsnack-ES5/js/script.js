//jsnack 3
//Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

var array = ['Francesco', 'Nicola', 'Giovanni',
'Sara', 'Sabrina', 'Giorgio', 'Luca', 'Martina', 'Carmen', 'Gianluca', 'Enrico' ];
console.log(array);
var a = 2;
var b = 8;


var arrayTo = findElement(array, a, b);
console.log(arrayTo);

function findElement(array, min, max) {

  var newArray = [];

  for (var i = min; i <= max; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
