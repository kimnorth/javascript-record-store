var RecordStore = function(name, location){

  this.name = name;
  this.location = location;
  this.inventory = [];
  this.balance = 0;

}

RecordStore.prototype = {

  addRecord: function(record){
    this.inventory.push(record);
  },

  listInventory: function(){
    var answer = "";
    this.inventory.forEach(function(record){
      answer = answer + record.printProperties()  
    })
    return answer;
  }

}

module.exports = RecordStore;