/*
 * @Author: kael 
 * @Date: 2019-03-22 23:49:09 
 * @Last Modified by:   kael 
 * @Last Modified time: 2019-03-22 23:49:09
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
  getName: obj.getName
};

// 调用位置
obj.getName(); // aaa

otherObj.getName(); // bbb
