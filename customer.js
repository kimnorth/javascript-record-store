var Customer = function(name, balance){
  this.name = name;
  this.balance = balance;
  this.collection = [];
}

Customer.prototype = {

  buyRecord: function(record){
    if (record.price <= this.balance){
    this.collection.push(record);
    }
  },

}

module.exports = Customer;