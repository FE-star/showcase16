/*
 * @Author: kael 
 * @Date: 2019-03-23 11:58:38 
 * @Last Modified by: kael
 * @Last Modified time: 2019-03-23 12:45:18
 */
var obj = {
  name: 'aaa',
  say: function() {
    eval.call(null, 'console.log(this)');
  }
};
obj.say();

var obj2 = {
  name: 'bbb',
  say: function() {
    eval('console.log(this)');
  }
};
obj2.say();
