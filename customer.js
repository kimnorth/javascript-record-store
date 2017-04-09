var Customer = function(name, balance){
  this.name = name;
  this.balance = balance;
  this.collection = [];
}

Customer.prototype = {

  buyRecord: function(record){
    if (record.price <= this.balance){
    this.collection.push(record);
    this.balance -= record.price;
    }
  },

  collectionValue: function(){
    var totalValue = 0;
    this.collection.forEach(function(record){
      totalValue += record.price;
    })
    return totalValue;    
  },

  genreValue: function(genre){
    var totalValue = 0;
    this.collection.forEach(function(record){
      if (genre === record.genre){
        totalValue += record.price;
      }
    })
    return totalValue;
  },

  mostExpensive: function(){
    var listOfPrices = [];
    this.collection.forEach(function(element){
      listOfPrices.push(element.price);
    })
    var highestPrice = 0;
    var highest = function(array){
      return Math.max.apply(null, array);
    }
    highestPrice = highest(listOfPrices);
    return highestPrice;
  },

  sortCollection: function(){

    this.collection.sort(function(a, b){
      return a.price - b.price
    });
  },

  compareCollection: function(customer){
    var highestCustomer;

    if ( this.collectionValue() < customer.collectionValue() ){
      highestCustomer = customer.name;      
    }
    else {
      highestCustomer = this.name;  
    }
    return highestCustomer + " has the highest value collection."

  }

}

module.exports = Customer;