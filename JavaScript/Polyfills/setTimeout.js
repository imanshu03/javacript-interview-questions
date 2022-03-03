(function () {
  const timers = {};

  function generateId() {
    const chars = "12356ABCDEF";
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
      if (timers.hasOwnProperty(timerId) && now > timers[timerId].execTime) {
        timers[timerId].cb();
        window.myClearTimeout(timerId);
      }
    }

    requestIdleCallback(check);
  }

  window.mySetTimeout = (cb, delay) => {
    if (typeof cb !== "function") throw new Error("cb should be a function");
    if (typeof delay !== "number" || delay < 0)
      throw new Error("delay should be a positive number");

    const id = generateId();

    timers[id] = {
      cb,
      execTime: Date.now() + delay
    };

    if (Object.keys(timers).length === 1) requestIdleCallback(check);

    return id;
  };

  window.myClearTimeout = (id) => {
    if (timers[id]) {
      delete timers[id];
    }
  };
})();

const id = window.mySetTimeout(() => {
  console.log("Hello");
}, 2000);
