var assert = require('assert');
var RecordStore = require('../record_store.js');
var Record = require('../record.js')

describe('Record store tests', function(){

  var recordStore;
  var record;
  var record2;
  var record3;

  beforeEach(function(){
    recordStore = new RecordStore("Zavvi", "Edinburgh");
    record = new Record("Iggy Pop", "Lust For Life", "Rock", 1000);
    record2 = new Record("Iggy Pop", "The Passenger", "Rock", 1000);
    record3 = new Record("Joanna Newsom", "Have One On Me", "Folk", 1200);
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

  it('Can list its inventory', function(){
    recordStore.addRecord(record);
    var expected = "Artist: Iggy Pop Title: Lust For Life Genre: Rock Price: 1000"
    assert.strictEqual(expected, recordStore.listInventory())
  })

  it('Can list its inventory with multiple records', function(){
    recordStore.addRecord(record);
    recordStore.addRecord(record2);
    var expected = "Artist: Iggy Pop Title: Lust For Life Genre: Rock Price: 1000Artist: Iggy Pop Title: The Passenger Genre: Rock Price: 1000"
    assert.strictEqual(expected, recordStore.listInventory())
  })

  it('Can remove a record from inventory by selling', function(){
    recordStore.addRecord(record);
    recordStore.sellRecord(record);
    // var expected = 0;
    // assert.strictEqual(expected, recordStore.inventory.length)
    assert.strictEqual(0, recordStore.inventory.length)
  })

  it('Can sell a record and add to store\'s balance', function(){
    recordStore.addRecord(record);
    recordStore.sellRecord(record);
    assert.strictEqual(1000, recordStore.balance);
  })

  it('Can give a financial report', function(){
    recordStore.addRecord(record);
    recordStore.addRecord(record2);
    assert.strictEqual("Balance: 0 Stock Value: 2000", recordStore.financialReport());
  })

  it('Can return a list of all records by genre', function(){
    recordStore.addRecord(record);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
    expected = "Artist: Iggy Pop Title: Lust For Life Genre: Rock Price: 1000Artist: Iggy Pop Title: The Passenger Genre: Rock Price: 1000"
    assert.strictEqual(expected, recordStore.findByGenre('Rock'));
  })


})