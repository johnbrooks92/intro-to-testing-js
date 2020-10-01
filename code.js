
function helloWorld() {
    return "Hello, World!";
}

// const helloWorld = function() {
//     return "Hello, World!";


    function sayHello(name) {
        if (typeof name === "undefined") {
            return "Hello, World!"
        } else {
            return "Hello, " + name + "!";
        }
    }

console.log(sayHello(null));
console.log(sayHello(""));
console.log(sayHello(2.3));
console.log(sayHello("5"));