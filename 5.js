/*
 * @Author: kael 
 * @Date: 2019-03-23 11:45:22 
 * @Last Modified by: kael
 * @Last Modified time: 2019-03-23 11:49:07
 */

// 声明位置
var obj = {
  name: 'aaa',
  getName: function() {
    console.log(this.name);
  }
};

var otherObj = {
  name: 'bbb'
};

var name = 'fff';

// 调用位置
obj.getName.call();
obj.getName.call(otherObj);
obj.getName.apply();
obj.getName.apply(otherObj);
obj.getName.bind(this)();
obj.getName.bind(otherObj)();
