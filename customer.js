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
      console.log(record)
    })
    return totalValue;    
  }

}

module.exports = Customer;