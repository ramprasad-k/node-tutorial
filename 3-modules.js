// CommonJS, ebery file is module (by default)
// Module - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7.mind-grenade')
//console.log(data);

//console.log(module);
//console.log(names);

sayHi('Ram')
sayHi(names.prasad)
sayHi(names.ramprasad)
