const data = [0];

const [x, y = 10] = data;

console.log(x);
console.log(y);

const person = {
    name: "Yuvika",
    age: 21,
    address: {
        city: "Delhi",
        state: "Delhi",
        pincode: 110001
    }
};

const{a,b}= person;
console.log(a);
console.log(b);

//correct way - only defined by keys not variables 
const { age, name } = person;
console.log(name);
console.log(age);

