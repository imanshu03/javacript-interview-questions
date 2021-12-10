const flexibleStr = "abccc";

function checkString(str) {
  const invalidRe = /[d-z]+/gi;
  if (invalidRe.test(str)) return "NO";

  const validRe = /^[c]+$/gi;
  let result = str;

  while (!validRe.test(result)) {
    result = result.replace(/[a]/g, "b").replace(/[b]/g, "c");
  }
  return result;
}

console.log(checkString(flexibleStr));
