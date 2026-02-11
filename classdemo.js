class Address {
    constructor(city, state) {
        this.city = city;
        this.state = state;
    }
}

class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

const addr = new Address("Bangalore", "Karanataka");
const p1 = new Person("yuvika", 20, addr);

console.log(p1);