// Declaring variables types
let a: number;
let b: String;
let c: boolean;
let e: any;
let f: number[] = [1, 2.3];
let g: any[] = ["string", false, 101];
enum color {
  Blue,
  Green,
  Red,
}
let backgroundColor = color.Green;

/// Arrow function
const calc = (a: number, b: number): number => {
  return a + b;
};

// interfaces
interface addDataType {
  a: number;
  b: number;
  x: number;
  y: number;
}

// classes
class Person {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  Add() {
    ////..
  }

  Substracion() {
    ////...
  }
}

// Objects
let person = new Person(1,1);

// Access Modifiers
private public protected



//Type Assertion
