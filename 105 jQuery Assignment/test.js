
// global variable
var list = [];







function sum(num1, num2){
    return num1 + num2;
}

function sayHello(name, lastName){
    console.log("Hi " + name + " " + lastName);
}



function runTest1(){
    var list = [];
    console.log("Starting test 1 - functions");

    sayHello("Robbie", "Tulanko");

    var a = 21;
    var b = 42;
    var result = sum(a, b);
    console.log(result);
}
for(let i=0; i < 10; i++){
    let x = i;
}


function Dog(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.breed = breed;

}



function runTest2(){
    console.log("Tests for Objects");

    //object literal
    // used for configuration or one time structure
    let dog = {
        name: "Fido",
        age: 2,
        color: "Green",
        breed: "Dog"
    };
    console.log(dog);

    console.log( dog.name );
    dog.age = 3;


    let lola = {
        name: "Lola",
        age: 4,
        color: "Pink"
    };
    console.log(lola);

    // object constructor
    // used for multiple object with the same structure

    let solo = new Dog("Solo", 2, "Blue");
    console.log(solo);

    let another = new Dog("loco", 5, "Red");
    console.log(another);
}


