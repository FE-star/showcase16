/*
 * @Author: kael 
 * @Date: 2019-03-22 23:49:25 
 * @Last Modified by: kael
 * @Last Modified time: 2019-03-22 23:52:06
 */

// 声明位置
var obj = {
  name: 'aaa',
  getName: function() {
    console.log(this.name);
  }
};

var name = 'ccc';

var getName = obj.getName;

getName(); // ccc ? undefined ?