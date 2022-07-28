// typescript funadamentals
/////How to declare a variable in typescript
// variable number 
var num = 6;
// console.log(num);
// variable boolean
var Etat = false;
// variable string
var msg;
msg = "Hello";
///////How to declare an arrayb in typescript
// array contain just number
var arr;
arr = [5, 6, 7];
arr.push(99);
// console.log(arr)
/// array contain just string
var myMsg = ["hello", "world"];
// array contain just boolean
var bool = [true, false];
// array contain any data type
var all = ["Mak", true];
// array tuple
var tuple = ["anas", 21, true];
// console.log(tuple)
// work with unions and Enum
// union
var ids;
ids = 5;
// console.log(ids);
var union_arr = [44];
// console.log(union_arr)
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["left"] = 1] = "left";
    direction[direction["right"] = 2] = "right";
    direction[direction["bottom"] = 3] = "bottom";
})(direction || (direction = {}));
console.log(direction.up);
