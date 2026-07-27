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

// class BMWcar {
//     constructor(brand, mileage) {
//         console.log("creating new object.....")
//         this.brandName = brand;
//         this.mileage = mileage;
//     }
//     start() {
//         console.log("Start");
//     }
//     stop() {
//         console.log("Stop")
//     }
//    }

// let newObj = new Myclass();  Method to create a obj from a class 

// let BMWX5 = new BMWcar("BMWX5", 10);
// console.log(BMWX5);
// let BMWM5 = new BMWcar("BMWM5", 12);
// console.log(BMWM5);

// CONSTRUCTOR : MAIN Work is to initialize the object basicaly jab koi newobj bnaega from my class toh constructor func apne aap chljayga 

// Inheritance in JS...

// example 1 :

// class parent {
//     hello() {
//         console.log("Hello")
//     }
// }

// class child extends parent{}

// let obj = new child();

// example 2 :

class person {
    constructor(name) {
        this.species = "Homo sapiens"
        this.name = name;
    }
    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }

    // Method Overriding:iN case of same function present in both child and parent then the preference is given to the child class!! like in the above example work is the function present commonlly.

    work() {
        console.log("do nothing")
    }
}
class engineer extends person {
    constructor(name) {
        super(name); // to invoke constructor of parent class... 
    }
    work() {
        super.eat();
        console.log("solve problems, build something")
    }
}

let engObj = new engineer("Prince");


// super keywords : basicaly they are used to call constructor of their parent class to access parents properties...

