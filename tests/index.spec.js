const { expect } = require('chai');
const { fizzBuzz } = require('../src');

// creates an array from 1 to a specified value
const createArray = (length) => Array.from({ length }, (_, i) => i + 1);

describe('FizzBuzz', () => {
  context('Given I have an array with numbers 1-20', () => {
    it('returns the expected result', () => {
      const numbers = createArray(20);
      const result = fizzBuzz(numbers);
      expect(result).to.eql(numbers);
    });
  });
});
