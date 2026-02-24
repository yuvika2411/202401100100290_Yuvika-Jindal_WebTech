let param={
    name: "Yuvika",
    age: 19,
    isEmployed: false,
    greet: function(){
        console.log("hello " +this.name);
        console.log(this);
        let innerGreet= function(){
            console.log("hello"+this.name);
            console.log(this);
        }
        innerGreet();
    }
};
param.greet();

const param1= new Person
// let param2= param;

// param2.age=21;

// console.log(param.age);
// console.log(param2.age);

