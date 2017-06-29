// export as anonymous object!

var Buz = function (){};
Buz.prototype.log = function(){
    console.log("This is Module M4. - exported as 'anonymous object / instance' !");
};

module.exports = new Buz();
