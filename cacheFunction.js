function cacheFunction(cb) {
          // Should return a function that invokes `cb`.
          // A cache (object) should be kept in closure scope.
          // The cache should keep track of all arguments have been used to invoke this function.
          // If the returned function is invoked with arguments that it has already seen
          // then it should return the cached result and not invoke `cb` again.
          // `cb` should only ever be invoked once for a given set of arguments.
          let run = 100;
          var cache = { val1 : run};
          function oneTime() {
                    if (cache.val1==run) {
                    cache.val1+=1;
                    return cb(cache.val1);
                    }
                    else
                              return (cache.val1);
          }
          return oneTime;
}



export { cacheFunction };