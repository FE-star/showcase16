/*
 * @Author: kael 
 * @Date: 2019-03-23 11:45:22 
 * @Last Modified by: kael
 * @Last Modified time: 2019-08-04 14:18:28
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
obj.getName.call(); // fff
obj.getName.call(otherObj); // bbb
obj.getName.apply(); // fff
obj.getName.apply(otherObj); // bbb
obj.getName.bind(this)(); // fff
obj.getName.bind(otherObj)(); // bbb
