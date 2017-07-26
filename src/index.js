import Vue from 'vue'

function test(a){
   console.log(a);//Vue
}

function test1(a,b){
　　console.log(a,b);//Vue hello
}

let oTest = {
   install:function(a,b){
      console.log(a,b);//Vue hello1
   }
}

console.log('========test=======');
Vue.use(test,"test");
console.log('========1=======');

Vue.use(test1,'hello');
console.log('========oTest=======');

Vue.use(oTest,'hello1')
console.log('========oTest conosle=======');
console.log(oTest);
