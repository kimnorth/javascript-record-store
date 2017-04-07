var assert = require('assert');
var Record = require('../record.js');

describe('Records', function(){

  var record;

  beforeEach(function(){
    record = new Record("Iggy Pop", "Lust For Life", "Rock", 1000);
  })

  it('Should have an artist', function(){
    assert.strictEqual("Iggy Pop", record.artist);
  })

})