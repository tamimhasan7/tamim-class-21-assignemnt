// a function is block of code designed to perform a particular task

// function without parameters
function myFunction() {
    console.log("I am inside myFunction!")
}
// myFunction()


//function with parameters
function myFunctionWithParams(p1,p2,p3) {
    console.log("I am inside myfunctionWithParams!");
    console.log("p1:",p1);
    console.log("p2:", p2);
    console.log("p3:", p3)
}
// myFunctionWithParams("Tamim", "Hasan", "Muhammad");
// myFunctionWithParams("500", "400", "700");


//function with return value
function add(a,b) {
    const result = a/b;
    console.log("result:", result);
    return result;
}
// add(5, 10);
// add(50,40);
// add(20,30);


//function with return value and parameters
function concatParams (firstName, lastName, age, profession) {
    const result = `Result: ${firstName} ${lastName} is a ${profession}, He is ${age} years old.`;
    return result;
}
// const person1 = concatParams("Md", "Tamim", 27, "Teacher");
// console.log(person1);
// const person2 = concatParams("Hasan", "Tamim", 25, "Doctor")
// console.log(person2)

//example 1: Sum function
function sum(a,b) {
    const result = a+b;
    console.log("I am inside sum function!")
    return result;
}
// const sum1 = sum (45,55);
// console.log("sum1:", sum1)
// const sum2 = sum (-100, 150);
// console.log("sum2:", sum2)


function myFunction(name, age, profession) {
    let result = "My name is ${name}";

    if (age < 18) {
        result += ", I am ${age} years old and I am a student.";
        console.log(console log 01);
        return resutlt;
    } else {
        console.log(console log 02);
        result += ", I am ${age} years old and I am a ${professiom.}";
        return result;
    }
}
const person1 = myFunc("Tamim", 27, "Teacher");
const person2 = myFunc("Hasan", 15, "Doctor");

console.log(person1);
console.log(person2);