module.exports = function check(str, config) {
  let count = 0;
  let c = 0
  for (let i = 0; i < config.length; i++) {


    for (let j = 0; j < config[i].length; j++) {



      str.split('').forEach(el => {
        if (el === config[i][0]) {
          count++

        } else if (el === config[i][1]) {
          count--
          c = count
        }
      })


    }

  }
  if (c !== 0) {
    return false
  } else {
    return true
  }

}


