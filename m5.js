// export as anonymous object!

var Buz = function (){};
Buz.prototype.log = function(){
    console.log("This is Module M5. - exported as 'named object / instance' !");
};

module.exports.named_object = new Buz();
