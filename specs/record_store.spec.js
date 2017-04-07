var assert = require('assert');
var RecordStore = require('../record_store.js');
var Record = require('../record.js')

describe('Record store tests', function(){

  var recordStore;
  var record;

  beforeEach(function(){
    recordStore = new RecordStore("Zavvi", "Edinburgh");
    record = new Record("Iggy Pop", "Lust For Life", "Rock", 1000);
  })

  it('Should have a name', function(){
    assert.strictEqual("Zavvi", recordStore.name)
  })

  it('Should have a location', function(){
    assert.strictEqual("Edinburgh", recordStore.location)
  })

  it('Should have an inventory', function(){
    assert.strictEqual(0, recordStore.inventory.length)
  })

  it('Should have a balance', function(){
    assert.strictEqual(0, recordStore.balance)
  })

  it('Can add records to its inventory', function(){
    recordStore.addRecord(record);
    assert.strictEqual(1, recordStore.inventory.length)
  })

})