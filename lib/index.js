'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function test(a) {
   console.log(a); //Vue
}

function test1(a, b) {
   console.log(a, b); //Vue hello
}

var oTest = {
   install: function install(a, b) {
      console.log(a, b); //Vue hello1
   }
};

console.log('========test=======');
_vue2.default.use(test, "test");
console.log('========1=======');

_vue2.default.use(test1, 'hello');
console.log('========oTest=======');

_vue2.default.use(oTest, 'hello1');
console.log('========oTest conosle=======');
console.log(oTest);