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
      answer = answer + (record.printProperties())  
    })
    return answer;
  },

  sellRecord: function(record){
    var sale = 0;
    this.inventory.forEach(function(item, index, array){
      if(item === record){
        array.splice(index, 1);
        sale = record.price;
      }
    })
    this.balance += sale;
  },

  financialReport: function(record){
    var stockValue = 0;
    this.inventory.forEach(function(item, index, array){
      stockValue += item.price;
    })
    return "Balance: " + this.balance + " Stock Value: " + stockValue; 
  },

  findByGenre: function(genre){
    var searchResults = "";
    this.inventory.forEach(function(item){
      if(item.genre === genre){
        searchResults += item.printProperties();
      }
    })
    return searchResults;
  }

}

module.exports = RecordStore;