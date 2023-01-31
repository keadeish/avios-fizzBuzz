/**
 * Given a number `n`, return a string `outputString` containing the FizzBuzz sequence from 1 to `n`.
 * @param {n} n input integer.
 * @returns {outputString} `outputString` FizzBuzz sequence string that is returned.
 */
function fizzBuzz(n) {

    let fizzBuzzArray = []

    let outputString = ""

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) { // 'i' is divisible by both 3 & 5
            fizzBuzzArray.push("FizzBuzz")
        }
        else if (i % 3 === 0) { // 'i' is divisible by 3
            fizzBuzzArray.push("Fizz")
        }
        else if (i % 5 === 0) { // 'i' is divisible by 5
            fizzBuzzArray.push("Buzz")
        }
        else fizzBuzzArray.push(i) // 'i' is not divisible by 3 or 5
    }

    outputString = fizzBuzzArray.join(", ") //converts fizzBuzzArray into a string

    return outputString

}

module.exports = fizzBuzz;