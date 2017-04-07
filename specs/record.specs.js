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

  it('Should have a title', function(){
    assert.strictEqual("Lust For Life", record.title)
  })

  it('Should have a genre', function(){
    assert.strictEqual("Rock", record.genre)
  })

  it('Should have a price', function(){
    assert.strictEqual(1000, record.price);
  })

  it('Can print its properties', function(){
    assert.strictEqual("Artist: Iggy Pop Title: Lust For Life Genre: Rock Price: 1000", record.printProperties())
  })

})