// TODO: Write your function in this file
function twoNum(lower, upper) {
  let arr = []
  for (let i = lower; i <= upper; i++) {
    if (i % 15 === 0) {
      arr.push('FizzBuzz')
    } else if (i % 5 === 0) {
      arr.push('Buzz')
    } else if (i % 3 === 0) {
      arr.push('Fizz')
    } else {
        arr.push(i)
    }
  }
  return arr
}
console.log(twoNum(2, 30))
// TODO: Change undefined below to the name of your function
module.exports = twoNum
console.log()
