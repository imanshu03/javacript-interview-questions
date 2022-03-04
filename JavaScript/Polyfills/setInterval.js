(function () {
  // to store callbacks with their key as the id
  const timers = {};

  // to generate random six length alphanumeric string
  function generateId() {
    const chars = 'ABCDEF123456';
    let key = '';
    for (let i = 0; i < 6; i++) {
      const idx = Math.floor(Math.random() * chars.length);
      key += chars[idx];
    }
    return key;
  }

  // to check and invoke callbacks when current time exceeds callback execution time
  function check() {
    if (Object.keys(timers).length === 0) return;

    const now = Date.now();
    for (let timerId in timers) {
      const timer = timers[timerId];
      if (timer && now > timer.execTime) {
        timer.execTime = Date.now() + timer.delay;
        timer.callback();
      }
    }

    requestIdleCallback(check);
  }

  // setInterval polyfill
  globalThis.mySetInterval = function (callback, delay) {
    if (typeof callback !== 'function')
      throw new Error('callback should be a function');
    if (typeof delay !== 'number' || delay < 0)
      throw new Error('delay should be a positive number');

    const timerId = generateId();

    timers[timerId] = {
      callback,
      delay,
      execTime: Date.now() + delay,
    };

    if (Object.keys(timers).length === 1) requestIdleCallback(check);

    return timerId;
  };

  // clearInterval polyfill
  globalThis.myClearInterval = function (id) {
    if (timers[id]) delete timers[id];
    return;
  };
})();

let count = 0;

const id = mySetInterval(() => {
  console.log(++count);
  if (count === 5) myClearInterval(id);
}, 2000);

console.log(id);
