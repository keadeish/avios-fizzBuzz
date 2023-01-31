const fizzBuzz = require('./fizzBuzz');

test('fizzBuzz sequence from 1 to 15', () => {
    expect(fizzBuzz(15)).toBe("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz");
});

test('returns empty string when the argument is 0', () => {
    expect(fizzBuzz(0)).toBe("");
});

test('returns empty string when the argument is negative', () => {
    expect(fizzBuzz(-100)).toBe("");
});