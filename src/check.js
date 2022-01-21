const config = [['|', '|']];;
str = '||';

function check(str, config) {
  let count = 0;
  let c = 0
  for (let i = 0; i < config.length; i++) {
    // if (count < 0) {
    //   return false
    // }

    for (let j = 0; j < config[i].length; j++) {



      str.split('').forEach(el => {
        if (el === config[i][0]) {
          count++
          // console.log(count, el)
        } else if (el === config[i][1]) {
          count--
          c = count
        }
      })


    }
    console.log(c)
  }
  if (c !== 0) {
    return false
  } else {
    return true
  }

}
console.log(check(str, config))