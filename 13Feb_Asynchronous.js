//Non- blocking

//Instead of for loop we put it into another set

//Benefits:
//App stays responsive
//Faster user experience

console.log("Start")

setTimeout(function (){
    for (let i = 0; i < 1e5; i++) { }
    console.log("Task done");
}, 2000);

console.log("end");