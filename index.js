// Import stylesheets
import './style.css';

let log = console.log;

// 1.create object with variables and function and return internal data
// 2. create a function with 'this' and call this.function
// 3. call the function

var watch = {
  brand:"samsung",
  price:"99$",
  getInfo:function(){
    return `the ${this.brand} watch price is ${this.price}`
  }
}

let getWatchInfo = function(from ="1. bind"){
  log(`${from} example: `,this.getInfo());
}

// In JavaScript, the bind method is yet another built-in function available on every function object. Unlike call and apply, which immediately invoke the function, the bind method returns a new function with a specific this context set, along with any specified arguments. This new function can be invoked later.
//copies the getWatchInfo function
let whenBounded = getWatchInfo.bind(watch);
whenBounded();

// In JavaScript, the call method is another built-in function available on every function object, similar to the apply method. It allows you to invoke a function while specifying the value of this inside the function and passing individual arguments to the function.

//do not copies the getWatchInfo function
//call with parameters sperated by comma
getWatchInfo.call(watch,'2. call','param2','param3');


// In JavaScript, the apply method is a built-in function available on every function object. It allows you to invoke a function while specifying the value of this inside the function and passing an array (or an array-like object) as the arguments to the function.
//call with parameters an array 
getWatchInfo.apply(watch,['3. apply','paaram2','param3']);

