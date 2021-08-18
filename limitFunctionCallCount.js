function limitFunctionCallCount(cb, n) {
          // Should return a function that invokes `cb`.
          // The returned function should only allow `cb`
          // to be invoked `n` times.
          // Returning null is acceptable if cb can't be returned

          function king() {
                    for (var i = 0; i < n; i++)
                              cb(i);
                              return null;
          }
          return king;

}

export { limitFunctionCallCount };