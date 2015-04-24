var arrayToList = function(array) {
  var list;
  for (var i = array.length - 1; i >= 0; i--) {
    if( i === array.length -1) {
      list = {value: array[i], rest: null};
    } else {
	  list = { value: array[i], rest: list };
    }
  }
  return list
};

var listToArray = function(list) {
  var array = []
  for (var x = list; x; x = x.rest)
    array.push(x.value);
  return array;
}

function prepend(value, list) {
  return {value: value, rest: list};
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
// function arrayToList(array) {
//   var list = null;
//   for (var i = array.length - 1; i >= 0; i--)
//     list = {value: array[i], rest: list};
//   return list;
// }
//
// function listToArray(list) {
//   var array = [];
//   for (var node = list; node; node = node.rest)
//     array.push(node.value);
//   return array;
// }
//
// function prepend(value, list) {
//   return {value: value, rest: list};
// }
//
// function nth(list, n) {
//   if (!list)
//     return undefined;
//   else if (n == 0)
//     return list.value;
//   else
//     return nth(list.rest, n - 1);
// }
