
module.exports = function check(str, bracketsConfig) {

  let strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    bracketsConfig.forEach((el) => {
      if (strArr[i] === el[0] && strArr[i + 1] === el[1]) {
        strArr.splice(i, 2);
        i = -1;
      }
    })
  }

  return strArr.length === 0

}



