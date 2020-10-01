
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

function isFive(x){
    return (parseInt(x)) === 5;
}

function isEven(x) {
    if (x % 2 != 0)
        return false;
    else
        return true;
}
function isVowel(x)
{
    if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u' || x == 'A' || x == 'E' || x == 'I' || x == 'O' || x == 'U')
        return true;
    else
        return false;
}

