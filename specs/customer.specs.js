var assert = require('assert');
var Customer = require('../customer.js');

describe('Customer tests', function(){

  var customer;

  beforeEach(function(){
    customer = new Customer("Bob", 1000);
  })

  it('Can have a balance', function(){
    assert.strictEqual(1000, customer.balance);
  })

})