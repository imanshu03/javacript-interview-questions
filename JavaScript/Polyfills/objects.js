// Object.prototype.deepComparison = function (obj) {
//     const context = this;
//     let keys1 = Object.keys(context);
//     let keys2 = Object.keys(obj);
//     if (keys1.length !== keys2.length) {
//         return false;
//     }
//     let result = true;
//     for (let i = 0; i < keys1.length; i++) {
//         if (typeof (context[keys1[i]]) === typeof (obj[keys2[i]]) && typeof (context[keys1[i]]) === 'object') {
//             result = context[keys1[i]].deepComparison(obj[keys2[i]]);
//         }
//         else {
//             result = context[keys1[i]] === obj[keys2[i]];
//         }
//         if (!result) return false;
//     }
//     return result;
// }

// let obj1 = {
//     a: '10',
//     b: {
//         c: {
//             d: '20',
//             e: '30'
//         },
//         f: '40'
//     }
// };

// let obj2 = {
//     a: '10',
//     b: {
//         c: {
//             d: '20',
//             e: '30'
//         },
//         f: '40'
//     },
// };

// console.log(obj1.deepComparison(obj2));

Object.prototype.flatObject = function (prefix = "") {
  const obj = this;
  let result = {};
  for (let key in obj) {
    if (!obj.hasOwnProperty(key)) continue;
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === "object") {
      result = { ...result, ...obj[key].flatObject(newKey) };
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
};

const obj1 = {
  name: "isr",
  job: {
    company: "ppbl",
    desig: "SE",
  },
  address: {
    city: "chd",
  },
};

console.log(obj1.flatObject());
