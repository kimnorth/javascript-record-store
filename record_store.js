var RecordStore = function(name, location){

  this.name = name;
  this.location = location;
  this.inventory = [];
  this.balance = 0;

}

module.exports = RecordStore;