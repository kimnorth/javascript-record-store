var assert = require('assert');
var Customer = require('../customer.js');
var Record = require('../record.js');

describe('Customer tests', function(){

  var customer;
  var record;

  beforeEach(function(){
    customer = new Customer("Bob", 1000);
    record = new Record("Iggy Pop", "Iggy Pop", "Rock", 1000);
  })

  it('Can have a balance', function(){
    assert.strictEqual(1000, customer.balance);
  })

  it('Can buy records', function(){
    customer.buyRecord(record);
    assert.strictEqual(1, customer.collection.length);
  })

  it('Buying records reduced customer balance', function(){
    customer.buyRecord(record);
    assert.strictEqual(0, customer.balance);
  })

  it('Can\'t buy records without enough money', function(){
    customer = new Customer("Bob", 500);
    customer.buyRecord(record);
    assert.strictEqual(0, customer.collection.length);
  })

})