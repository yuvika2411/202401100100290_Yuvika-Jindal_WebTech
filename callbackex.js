function greet(name) {
    console.log("Hello " + name);
}

function processUserInput(callback) {
    let name = "yuvika";
    callback(name);
}

processUserInput(greet);