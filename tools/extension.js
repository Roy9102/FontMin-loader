/* 
* @Author:             Roy
* @Date:               2015-12-24 21:09:54
* @Description:        getFileExtension
* @Email:              chenxuezhong@360.cn
* @Last Modified by:   Roy
* @Last Modified time: 2015-12-24 21:21:16
*/

'use strict';


const EXTREGEXP = /\.[0-9a-z]+$/i;

module.exports = {

  	getExtension(filename){
  		if (!filename) throw new Error('filename could not be empty!');
  		return filename.match(EXTREGEXP)[1];
  	}
}