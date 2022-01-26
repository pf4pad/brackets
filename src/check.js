const config = [['|', '|']];;
str = '||';

function check(str, config) {
  let flatConfig = config.flat()
  let stack = []
  let strArray = str.split()

  for (let i = 0; i < strArray.length; i++) {
    let bracket = strArray[i]
    const bracketIndex = flatConfig.indexOf(bracket)
    console.log(bracket)
    console.log(bracketIndex)
  }


}
console.log(check(str, config))