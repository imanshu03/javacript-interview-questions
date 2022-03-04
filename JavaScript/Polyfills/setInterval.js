(function () {
  const timers = {};

  function generateId() {
    const chars = "ABCDEF123456";
    let key = "";
    for (let i = 0; i < 6; i++) {
      const idx = Math.floor(Math.random() * chars.length);
      key += chars[idx];
    }
    return key;
  }

  function check() {
    if (Object.keys(timers).length === 0) return;

    const now = Date.now();
    for (let timerId in timers) {
      if (timers[timerId] && now > timers[timerId].execTime) {
        timers[timerId].execTime = Date.now() + timers[timerId].delay;
        timers[timerId].cb();
      }
    }

    requestIdleCallback(check);
  }

  window.mySetInterval = (cb, delay) => {
    if (typeof cb !== "function") return new Error("cb is not a function");
    if (typeof delay !== "number" || delay < 0)
      return new Error("delay is not a positive number");

    const id = generateId();

    timers[id] = {
      cb,
      delay,
      execTime: Date.now() + delay
    };

    if (Object.keys(timers).length === 1) requestIdleCallback(check);

    return id;
  };

  window.myClearInterval = (id) => {
    if (timers[id]) delete timers[id];
    return;
  };
})();

let count = 0;

const id = window.mySetInterval(() => {
  console.log(++count);
  if (count === 5) window.myClearInterval(id);
}, 2000);

console.log({ id });
