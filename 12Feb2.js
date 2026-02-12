let emp = { id: 2, name: "Yuvika" };
let details = { ...emp }; //spread operator 

details.name = "Jindal";

console.log(emp);
console.log(details);

//It is a DeepCopy