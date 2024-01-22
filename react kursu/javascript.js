//react için bilinmesi gereken temel javascript

const topla = (a, b) => a + b;
console.log(topla(30, 20));

//kare alma

const numbers = [1, 2, 3, 6, 8, 10];
const kareAlma = numbers.map((number) => number * number);
console.log(kareAlma);

//diziye eleman ekleme,push ile sonuna ekler  spread operator
let numb = [1, 2, 3, 6, 8, 10];
let newNumb = [20, ...numb];
console.log(newNumb);

//obje ile çalışma

const user = {
  name: "Esma",
  surName: "Çokyüksel",
};

const newİnfo = {
  ...user,
  age: 21,
  city: "Konya",
};
console.log("Kullanıcı", newİnfo);

//rest

let sum = (...args) => {
  return args.reduce((acc, current) => acc + current);
};
console.log(sum(50, 100, 200));

//Destructuring bir obje veya bir array içinden
// her bir elemanın alınıp bir değişken içine kaydedilmesi

const colors = ["red", "blue", "green"];
const [fColors, sColors, tColors] = colors;
console.log(tColors);

const person = {
  name: "John Doe",
  age: 20,
  location: "San Francisco",
};

const newPerson = {
  ...person,
};
const { name, ...person3 } = person;
const person2 = {
  name,
  age: 25,
  location: "Paris",
};
console.log(person3);

//Primitive Types, temel veri türleridir
//değer ataması yapılırken değerin kendisi atanır.

//primitive type (değişkenler):number

let primitiveNum = 20;
let primitiveNum2 = primitiveNum;

primitiveNum2 = 30;

console.log(primitiveNum);
console.log(primitiveNum2);

//reference type (object,array):object

let object = { value: 20 };
let object2 = { ...object };

object2.value = 30;

console.log("object", object);
console.log("object2", object2);
