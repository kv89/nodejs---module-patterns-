// https://darrenderidder.github.io/talks/ModulePatterns/#/12
//  ----------------------------------
require("./m1");
foo();
//  ----------------------------------
var anonymous_fun = require('./m2');
anonymous_fun();
//  ----------------------------------
var named_fun = require('./m3').named_fun;
named_fun();
//  ----------------------------------
var anonymous_object = require('./m4');
anonymous_object.log();
//  ----------------------------------
var named_object = require('./m5').named_object;
named_object.log();
//  ----------------------------------
var SomeClass = require('./m6');
var obj = new SomeClass();
obj.log();
//  ----------------------------------
var NamedClass = require('./m7').NamedClass;
    obj = new NamedClass();
    obj.Log();
//  ----------------------------------

console.log(`
  ! Difference : Named vs Anonymous exports !

  . Named exports     - one module, many exported things.\n
  . Anonymous exports - simpler client interface.
`);
