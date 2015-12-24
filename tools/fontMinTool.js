/* 
* @Author:             Roy
* @Date:               2015-12-24 17:56:12
* @Description:        Class SubSetor 取子集工具类 基于fontmin
* @Email:              chenxuezhong@360.cn
* @Last Modified by:   Roy
* @Last Modified time: 2015-12-24 18:13:07
*/


'use strict';
var FontMin = require('fontmin');

class Subsetor {
		
	constructor(config){

		this.srcPath  = config.srcPath;   		// 字体源文件 【String】 e.g['src/font/*.ttf']
		this.destPath = config.destPath;    	// 输出路径    【String】 e.g['asset/font']
		this.text     = config.text;			// 所包含的文字集合 【String】 e.g['hello world'] 
		this.ext      = config.ext || 'woff' 	// 扩展名 【String】默认为EOT
	};

	/**
	 * [GeneratorSubsetTask 初始化 字体取子集任务]
	 */
	GeneratorSubsetTask(){
		var _this         = this;
		var transformer   = _this.TTF2EXT();
		_this.FontMinTask = new FontMin()
								.src(_this.srcPath)						// 输入字体源文件
								.use(FontMin.glyph({					// 提取插件
									text:_this.text 					// 所需提取文字集合
								}))
								.use(transformer());								
	};


	TTF2EXT(){
		var transformer = null;
		switch(this.ext){
			case 'eot': 					// ttf转换为eot
				transformer = FontMin.ttf2eot;
				break;
			case 'woff': 					// ttf转换为woff
				transformer = FontMin.ttf2woff;
				break;
			default:
				statements_def
				break;
		}
		return transformer;
	};

	/**
	 * [run 执行字体取子集任务]
	 */
	run(callback){
		if (!this.FontMinTask) this.GeneratorSubsetTask();
		this.FontMinTask.run(callback)
	};


}

module.exports = Subsetor;