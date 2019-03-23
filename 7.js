/*
 * @Author: kael 
 * @Date: 2019-03-23 12:54:27 
 * @Last Modified by: kael
 * @Last Modified time: 2019-03-23 13:44:28
 */

(function() {
  'use strict';

  function getName() {
    console.log(this);
  }

  console.log(this); // undefined
  getName.call(this); // undefined
  getName.call(null); // null 
  getName.call(undefined); // undefined
})();