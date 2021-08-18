import * as ash from "../limitFunctionCallCount.js"
console.log(ash.limitFunctionCallCount(cb, 10)());
function cb(i) {
    if(i==0)
    console.log(`I am CallBack invoked for ${i+1} time`);
    else
    console.log(`I am CallBack invoked for ${i+1} times`);
}