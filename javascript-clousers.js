
'use strict'


// closuers Pros
// o Memory  Efficient

function heavyDuty(index) {
    const  bigArray = new Array(7000).fill('Hello World');
    console.log("called");
    return bigArray[index];
}

heavyDuty(550) // create new big array
heavyDuty(250) // create new big array
heavyDuty(150) // create new big array
heavyDuty(580) // create new big array

// with closuer 
function heavyDuty2() {
    const  bigArray = new Array(7000).fill('Hello World');
    console.log("called agin");
    return function(index) {
        return bigArray[index]
    };
}

const heavyDutyClosure = heavyDuty2();
// hover you called the heavyDuty2() function bigArray called one time because its value stored in the memory heap
heavyDutyClosure(140); // create new big array
heavyDutyClosure(120); // use the existing big array  
heavyDutyClosure(160); // use the existing big array
heavyDutyClosure(180); // use the existing big array
heavyDutyClosure(105); // use the existing big array