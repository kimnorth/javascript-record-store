var assert = require('assert');
var Customer = require('../customer.js');
var Record = require('../record.js');

describe('Customer tests', function(){

  var customer;
  var record;
  var record2;
  var record3;

  beforeEach(function(){
    customer = new Customer("Bob", 1000);
    record = new Record("Iggy Pop", "Lust For Life", "Rock", 1000);
    record2 = new Record("Iggy Pop", "The Passenger", "Rock", 1000);
    record3 = new Record("Joanna Newsom", "Have One On Me", "Folk", 1000);
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

  it('Can view the value of their entire collection', function(){
    customer = new Customer("Bob", 10000);
    customer.buyRecord(record);
    customer.buyRecord(record2);
    assert.strictEqual(2000, customer.collectionValue());
  })

  it('Can view value of all records by genre', function(){
    customer = new Customer("Bob", 10000);
    customer.buyRecord(record);
    customer.buyRecord(record2);
    customer.buyRecord(record3);
    assert.strictEqual(2000, customer.genreValue("Rock"));
  })

})