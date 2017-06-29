// export as anonymous prototype / class!

var Buz = function (){};
Buz.prototype.log = function(){
    console.log("This is Module M6. - exported as 'anonymous prototype / class - compare with module M4' !");
};

module.exports = Buz;
