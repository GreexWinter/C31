var numberInt = 21;
var sentence = "Hello Alvin!";
var myBoolean = true;
var nothing = null;
var test;

console.log(numberInt);
console.log(sentence);
console.log(myBoolean);
console.log(nothing);
console.log(test);

// Arrays

var myArr = [10,20,30,40,50];
console.log(myArr);

console.log(myArr.length);

console.log(myArr[myArr.length-1]);

myArr.push(60);

myArr.pop();

console.log(myArr)

var tempArr1 = ["Alvin",8];
var tempArr2 = ["Sid", 9];
var tempArr3 = ["Aneesh",6];
var tempArr4 = ["Joann", 7];

var myStud = [tempArr1, tempArr2, tempArr3, tempArr4];

console.log(myStud[0][0]);

for(var i = 0; i< myStud.length; i++){
    console.log(myStud[i][0]);
}
