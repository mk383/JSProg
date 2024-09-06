
const array = [ 10, 20, [ 4, 6, 9, 8 ] ];
const newArray = array.flat();
console.log(newArray);

const arrayNested = [ 10, 20, [ 4, 6, [77, 88] , 8 ] ];
const flattenArray = arrayNested.flat(2);
console.log(flattenArray);