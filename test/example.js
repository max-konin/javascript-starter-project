const expect = require('chai').expect;
const exampleFunc = require('../src/example');

describe('#example', function() {
  it('returns true', function() {
    expect(exampleFunc()).to.be.true;
  });
});
