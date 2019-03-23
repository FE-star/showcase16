/*
 * @Author: kael 
 * @Date: 2019-03-22 23:49:25 
 * @Last Modified by: kael
 * @Last Modified time: 2019-03-23 00:00:50
 */

// 声明位置
var obj = {
  name: 'aaa',
  getName: function() {
    console.log(this.name);
  }
};

var otherObj = {
  name: 'bbb',
  getName: function() {
    var getName = obj.getName;
    getName();
  }
};

var name = 'ddd';

otherObj.getName(); // ddd ? undefined ?