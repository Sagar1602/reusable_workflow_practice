const _ = require('lodash');

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    console.error(`FAILED: ${message} (expected ${expected}, got ${actual})`);
    process.exit(1);
  }
  console.log(`PASSED: ${message}`);
}

const sum = _.sum([1, 2, 3, 4, 5]);
assertEqual(sum, 15, 'sum of [1,2,3,4,5] should be 15');

console.log('All tests passed!');
