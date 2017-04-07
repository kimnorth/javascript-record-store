var Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

Record.prototype = {

  printProperties: function(){
    result = "";
    result = "Artist: " + this.artist + " Title: " + this.title + " Genre: " + this.genre + " Price: " + this.price;
    return result;
  }

}

module.exports = Record;