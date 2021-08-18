import * as ash from '../cacheFunction.js'
var funCall=ash.cacheFunction(cb);
console.log(funCall());
console.log(funCall());
console.log(funCall());
function cb(n) {
          n+=1;
          console.log("invoked first time");
          return n
}