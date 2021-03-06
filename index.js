const parentChildString = (string) => {
  const sortedArray = string.split("").sort();
  let finalArray = [];
  for (let i = 0; i < sortedArray.length; i += 1) {
    const isCapital = sortedArray[i] === sortedArray[i].toUpperCase();
    if (isCapital) {
      finalArray.push(sortedArray[i]);
      for (let j = i + 1; j < sortedArray.length; j += 1) {
        const isWithChild = sortedArray[i] === sortedArray[j].toUpperCase();
        if (isWithChild) {
          finalArray.push(sortedArray[j]);
          sortedArray.splice(j, 1);
          j -= 1;
        }
      }
    } else {
      finalArray.push(sortedArray[i]);
    }
  }
  return finalArray.join("");
};

module.exports = { parentChildString };
