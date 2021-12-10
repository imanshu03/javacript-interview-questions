Promise.allProto = function (pArray) {
  console.log({ status: "pending" });
  let count = 0;
  let result = Array(pArray.length);

  return new Promise((resolve, reject) => {
    pArray.forEach((p, idx) => {
      p.then((res) => {
        result[idx] = { status: "fulfilled", value: res };
        count += 1;
        if (count === pArray.length) {
          resolve({ status: "fulfilled", value: result });
        }
      }).catch((error) => {
        reject({ status: "rejected", error });
      });
    });
  });
};

Promise.allSettledProto = function (pArray) {
  console.log({ status: "Pending" });
  let count = 0;
  let result = Array(pArray.length);

  return new Promise((resolve) => {
    pArray.forEach((p, idx) => {
      p.then((res) => {
        result[idx] = { status: "fulfilled", value: res };
        count += 1;
        if (count === pArray.length) {
          resolve({ status: "fulfilled", value: result });
        }
      }).catch((error) => {
        result[idx] = { status: "rejected", error };
        count += 1;
        if (count === pArray.length) {
          resolve({ status: "fulfilled", value: result });
        }
      });
    });
  });
};

Promise.raceProto = function (pArray) {
  console.log({ status: "pending" });

  return new Promise((resolve, reject) => {
    pArray.forEach((p) => {
      p.then((result) => {
        resolve({ status: "fulfilled", result });
      }).catch((error) => {
        reject({ status: "rejected", error });
      });
    });
  });
};

Promise.anyProto = function (pArray) {
  console.log({ status: "pending" });
  let count = 0;

  return new Promise((resolve, reject) => {
    pArray.forEach((p) => {
      p.then((res) => {
        resolve({ status: "fulfilled", result: res });
      }).catch(() => {
        count += 1;
        if (count === pArray.length) {
          reject({ status: "rejected", error: "No fulfilled Promise" });
        }
      });
    });
  });
};

function createPromise(delay, rejectP = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => (!rejectP ? resolve(delay) : reject(delay)), delay * 1000);
  });
}

const pArray = [
  createPromise(3, true),
  createPromise(5, true),
  createPromise(1, true),
];

Promise.anyProto(pArray).then(console.log).catch(console.log);
