module.exports = function check(str, config) {
  let count = 0;
  for (let i = 0; i < config.length; i++) {
    for (let j = 0; j < config[i].length; j++) {
      str.split('').forEach(el => {
        if (el === config[i][0]) {
          count++
          if (count > 1) return false
        } else if (el === config[i][1]) {
          count--
          if (count < 0) return false
        }
      })
    }
  }


  return true
}


