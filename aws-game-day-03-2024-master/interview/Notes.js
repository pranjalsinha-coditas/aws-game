// //for deep copy we will be using 
// => function and JSON.parse(JSON.stringify())

// //.slice() used for shallow clone
// //what is array destructuring?
// //accessing nested objects using variables and copy methods 

const createLoanCalculator = (rateOfInterest) => [
    (principle, installments) => rateOfInterest * principle * installments / 100,
    (newRate) => rateOfInterest = newRate 
];


const [carLoanCalculator, updateCarRateOfInterest] = createLoanCalculator(8);
const [homeLoanCalculator, updateHomeROI] = createLoanCalculator(10);
const [personalLoanCalculator, updatePersonalROI] = createLoanCalculator(16);

homeLoanCalculator(20000, 6);

const apiURL = "https://restcountries.com/v2/all";

// fetch(apiURL)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

  const resolveAfterTwoSeconds = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved after 2 seconds");
        }, 2000);
    });
}

const asyncCall = async() => {
    try {
        console.log("Calling resolveAfter2Seconds");
        const result = await resolveAfterTwoSeconds();
        console.log(result);
        console.log("Async function execution continues after await");
    } catch (error) {
        console.log(error)
    }
}

console.log("Before Calling async function");
asyncCall();
console.log("After Calling async function");

// which is better function expression or arrow functions(better function, one of the best practices)?
// Arrow functions are generally preferred for short, simple functions, especially when you don't need to use the "this" keyword. 
// However, for more complex functions or when "this" binding is necessary, function expressions might be more appropriate.     

// Map(we take call back functions), filter(), reduce())
// Map: Applies a given function to each element of an array and returns a new array with the results.
// Filter: Returns a new array containing only the elements that satisfy a provided condition.
// Reduce: Applies a function against an accumulator and each element in the array (from left to right) 
// to reduce it to a single value.

// what is first class citizen ?
// This means functions can be:
// Assigned to variables.
// Passed as arguments to other functions.
// Returned from other functions.
// Stored in data structures.

// why does return give undefined ?
// If a function doesn't explicitly return a value, JavaScript automatically returns undefined.
// If you see undefined as the result of calling a function, it's likely that the function did 
// not have a return statement or had a return statement without a value.

// The behavior of the browser's console can be understood by understanding how REPLs work. 

// They follow Read - Evaluate - Print - Loop structure. If a code block has a return value then 
// that value will be printed on the console. In case, the code block doesn't have a return value, 
// undefined will be logged.
// please go to sir for the assignments and all the theory questions for today`s class 

// tell the difference in between let and var 
/*let =>block scope and values can be reassigned but it gives referrence error
var =>has functional scope and values can be reassigned but it gives another kind of error */

// const is always given an initial value and it can`t be reassigned again

// Null in javascript is a primitive data-type which can also be a standalone value.
// It can also be representation of an empty value. It is slightly different from undefined
//Proof

//Booleans

// some logical operators : and (true, false), or (true, false), not (true, false), XOR(duplicate, unique elements)
// truthy and falsy values: null, undefined, NaN, blank string, 0`s
// revise undefined and null values given for an array
//comparing two empty arrays will result in false because of addresses and references to variable declarations
// used for defining functions and conditions in a block


//what is parsing ?
/* Ans. Parsing means analyzing and converting a program into an internal format that a runtime environment can actually run, 
    for example the JavaScript engine inside browsers. 
    The browser parses HTML into a DOM tree. HTML parsing involves tokenization and tree construction. */

//Try to explain double shorts operator?
/* 
What it does is remove everything after the decimal point. Think of it as a way to round a number. 
Under the hood what is happening is that we are applying the single tilde operator twice. 
So actually, there is no real double tilde operator 
*/

//defintion of array : its a collection of values having similar datatypes
//try to remember the outputs and method calls using functions
//7th february, 2024

//Functions
// A block of code specified for a particular task.
//         functions
//      /             \
// parameterized      Non-parameterized
//reference call of a function just a reference is stored in case of parameterized and non-parameterized 

// why does return give undefined ?
// If a function doesn't explicitly return a value, JavaScript automatically returns undefined.
// If you see undefined as the result of calling a function, it's likely that the function did 
// not have a return statement or had a return statement without a value.

// The behavior of the browser's console can be understood by understanding how REPLs work. 

// what is a window object?

// It gives access to the browser's methods and attributes as the global object in the browser environment. 
// The window object is the global object in the web browser environment. It represents 
// the current window or frames that the JavaScript code is running in. A browser window is represented by 
// the window object.

// Router.post() => callback function 
// types of parameters
// Implementing reduce function in front of sir and try ton answer other questions also

// Asynchromous vs synchronous
// block codes in javascript 
// multithreading and single threading in javascript
//find the difference in between single threading and asynchronous methods
//set time interval and set time out => these are the standard web apis set by the javascript engine 
//  /                     \
// /                       \
// set time out        set time interval

//are callback functions good or not ??
// ->Asynchronous
// ->Synchronous
// ->CallBack HELL

//identify the outputs of different nested programs
//execution contexts, callstack, eventloop, define these processes in context to global execution phase 
// why are callback functions called callback ?
//what is eventqueue?

// setTimeout(function | Code, timeout segment)

const duration = Math.random * 5000;
return new Promise((resolve, reject) => {
setTimeout(() => {
    const random = Math.random();
    if(random > 0.5)
    return resolve({data: users, statusCode: 200, error: null});
return reject({data: null, statusCode: 500, error: { message: 'something went wrong'} })
}, duration);
})

// Task queue with worker process and set timers using call stacks => delay is given with a 
// function argument and till then console.log is executed

// Promises
//     /    |    \
// pending 
// what is method chaining ? It`s used because in (then, catch) you don`t need to create 
// mulitple instances and then we will have finally.
// this keyword
// analogous to exception handling 
// if rejected then catch 
// if passed/resolved=>callback function goes to then

// function asynchronousOperationalMethod() {
//     const first_promise = 
//         new Promise((resolve, reject) => resolve("Hello"));
//     const second_promise = 
//         new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("");
//         }, 1000);
//     });

    // async function display() {
    //     const data = await asynchronousOperationalMethod();
    //     console.log(data);
    // }
    
    // display();
    
    // const functionapiurl = "https://api.thecatapi.com/v1/breeds";
    // fetch(functionapiurl).then((response) => console.log(response))
    // .catch((error) => console.log(error));

   
