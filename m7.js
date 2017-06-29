// export as named prototype / class!

var Buz = function (){};
Buz.prototype.Log = function(){
    console.log("This is Module M7. - exported as 'named prototype / class - compare with module M5' !");
};

module.exports.NamedClass = Buz;
