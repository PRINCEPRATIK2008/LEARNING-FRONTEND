// PROTOTYPES : Reference to an object... 

// const employee ={
//     CalcTax() {
//         console.log("tax rate is 10%");
//     }
// }

// const karanArjun= {
//     salary : 50000,
//     CalcTax() {
//         console.log("tax rate is 20%");
//     }
// }


// karanArjun.__proto__ = employee;

// CLASSES : Templates/blueprits to create objects 

class BMWcar {
    constructor() {
        console.log("creating new object.....")
        this.brandName = brand;
    }
    start() {
        console.log("Start");
    }
    stop() {
        console.log("Stop")
    }
   }

// let newObj = new Myclass();  Method to create a obj from a class 

let BMWX5 = new BMWcar("BMWX5");
let BMWM5 = new BMWcar("BMWM5");


// CONSTRUCTOR : MAIN Work is to initialize the object
