// typescript funadamentals

/////How to declare a variable in typescript

// variable number 
let num : number = 6;
// console.log(num);

// variable boolean
let Etat : boolean = false;

// variable string
let msg : String;
msg = "Hello"

///////How to declare an arrayb in typescript

// array contain just number

let arr : number [];
arr = [5,6,7]
arr.push(99)
// console.log(arr)

/// array contain just string
let myMsg : string[] = ["hello","world"];

// array contain just boolean
let bool : boolean[] = [true,false];

// array contain any data type
let all : any[] = ["Mak",true] 

// array tuple
let tuple : [string,number,boolean] = ["anas",21,true]
// console.log(tuple)

// work with unions and Enum

// union
let ids : number | string;
ids = 5
// console.log(ids);

let union_arr : [number | string] = [44];
// console.log(union_arr)

enum direction {
    up = 7,
    left,
    right,
    bottom
}

// console.log(direction.up);

// work with objects

const obj : {
    id : number,
    name : string
} =  {
    id : 1,
    name : "anasmak04"
}

///////////////...OR..//////////////

type obj =  {
    id : number,
    lastname : string
}


const object : obj  =  {
    id : 1,
    lastname : "Anasmak04"
}



// wrok with functions in typescript

//// function type string
function func(name :string) {
    return name;
}

///// function parameter string and return number multile return

function count(name:String ) : Number{
    return name.length;
}
console.log("===============>",count("Anas"))

////// interface

const userInterface : dataInter = {
    id : 21,
    name : "anas"
}


interface dataInter  {
    id : number,
    name : string,
    age ?: number 
}

//// interface with function

interface MathInter {
    (x : number, y :number) : number
}
const add : MathInter = (x : number, y :number) : number => x + y
const sum : MathInter = (x : number, y :number) : number => x * y
console.log(add(1,2),sum(2,2));







