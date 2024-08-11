## Promise.all()
```
Promise.all is a method that allows you to wait for multiple promises to resolve and then log all their values. This method takes an array of promises and returns a single promise that resolves when all the promises in the array have resolved. If any of the promises in the array reject, the returned promise will reject with the reason of the first rejected promise.
```
> For More details abour Promise.all refer to 'act5.js'
## Promise.race()
```
Promise.race is a method that takes an array of promises and returns a single promise that resolves or rejects as soon as the first promise in the array resolves or rejects. This is useful when you want to take action based on whichever promise completes first.
```
> For more details (likely code) refer to 'act5.js'