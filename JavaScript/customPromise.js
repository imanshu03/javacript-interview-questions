class MyPromise {
  constructor(executionFn) {
    this.promiseChain = [];
    this.errorHandler = () => {};
    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onReject.bind(this);
    executionFn(this.onResolve, this.onReject);
  }

  then(cb) {
    this.promiseChain.push(cb);
    return this;
  }

  catch(cb) {
    this.errorHandler = cb;
    return this;
  }

  onResolve(value) {
    let storedValue = value;
    try {
      this.promiseChain.forEach((fn) => {
        storedValue = fn(storedValue);
      });
    } catch (error) {
      this.onReject(error);
    }
  }

  onReject(error) {
    this.errorHandler(error);
  }
}

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 2000);
});

p.then((res) => res * 20)
  .then(console.log)
  .catch(console.log);
