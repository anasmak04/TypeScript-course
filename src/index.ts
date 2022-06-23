// installation of typescript
    // npm i typescript


    // 1-------Basic Types

    //  number
    let id : number = 30;

    //  string
    let Message : String = "Anas elMak";

    // Boolean
    let check : boolean = true;

    // any --- any type allows you to store a value of any type.

    let y : any = '3'

    // 2-------Arrays and Tuples

    /// array only contains number
    let ids : number[] = [1,2,3,4];

    /// array only contains string
    let Messages : String[] = ["Hello","good morning","hi"];

    /// array only contains boolean
    let checks : boolean[] = [true,false,true,true];

    // array any allows you to store a value of any types .
    let X : any[] =[1,"hi",true];

    // array tuple
    let person : [number,string,boolean] = [1,"Jhon",true];

    /// tupe contains a lot of arrays

    let persons : [number,string][]
    persons = [
        [1,"jhon"],
        [2,"brad"],
        [3,"smilga"],
    ]

    /////// 3---union & enum

    /// union

    let pid: number | string;
    pid = "4";

    /// Enum


    enum direction  {
        righe,
        left,
        up,
        down,
    }


    //// object 

    const user = {
        id : 1,
        name : "anas",
        check : false,
    }

    ///// object contains only number and string
    type user1 = {
        id: number,
        name : string,
    } 
    
   const User : user1= {
    id : 2,
    name  : "mak",
   }


   ///// type Asertion

   let cid : any = 3;
   let cidnumber  = cid as number;


    //// function
    function addNum(a : number, b: number) : number {
        return a + b;
    }
    addNum(5,9);
    console.log(addNum);

    //// Interfaces

    interface UseerInterface  {
        id : number,
        name : boolean,
        age ?: number,
    }

    const useer : UseerInterface = {
        id : 1,
        name : true,
    }

    //////// clqsse

   class Persson {
    private id : number
    private name : String

    constructor(id : number , name : String) {
        this.id = id
        this.name = name;
    }


   }

   const Person = new Persson(1,"anas");