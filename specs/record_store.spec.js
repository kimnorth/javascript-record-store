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

})