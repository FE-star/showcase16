/*
 * @Author: kael 
 * @Date: 2019-03-22 23:49:25 
 * @Last Modified by: kael
 * @Last Modified time: 2019-03-23 11:19:37
 */

var that = this;

(function() {
  console.log(this === that); // true? false?
})();

setTimeout(function() {
  console.log(this === that); // true? false?
}, 0);

// setImmediate(function() {
//   console.log(this === that); // false
// });