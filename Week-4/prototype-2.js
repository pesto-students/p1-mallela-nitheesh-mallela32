'use strict'


//* Using Suger Coted Syntax

// class Person {
//     constructor() {
//     }
//     setName(name) {
//         this.name = name;
//         console.log(name);
//     }
// }
// console.log(Person.prototype);


// class Teacher extends Person {
//     constructor() {
//         super();
//     }
//     teach(sub) {
//         console.log(sub);
//     }
// }

// console.log(Person.prototype);
// console.log(Teacher.prototype);

// const him = new Teacher();
// console.log(him.prototype);


// him.setName("ajsdha");
// console.log(him.name);


//*                          Using PRotoType Method

const Person = function(){
    
};

Person.prototype.setName = function (name){
        this.name = name;
}
const Teacher = function(){}

Object.setPrototypeOf(Teacher.prototype,Person.prototype)

// Teacher.prototype = new Person();
Teacher.prototype.teach = function (sub){
   console.log(sub);
}
 var him = new Teacher();
 him.setName("nitheesh");
 console.log(him.name);
 him.teach("maths");












