const { fib } = require('./code');

// Tests
const tests = [
    { n: 4, expected: 3 },
    { n: 9, expected: 34 },
    { n: 0, expected: 0 },
    { n: 1, expected: 1 },
];

tests.forEach(({ n, expected }) => {
    const result = fib(n);
    console.assert(result === expected, `Test failed for n = ${n}. Expected ${expected}, got ${result}.`);
});

console.log("All tests passed!");
