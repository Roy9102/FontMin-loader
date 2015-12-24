/* 
* @Author:             Roy
* @Date:               2015-12-24 18:04:33
* @Description:        For font Subset
* @Email:              chenxuezhong@360.cn
* @Last Modified by:   Roy
* @Last Modified time: 2015-12-24 18:53:58
*/


var loaderUtils = require("loader-utils");
var mime        = require("mime");
var fontMinTool = require('./tools/fontMinTool.js');

var FontSubset = function(source){
	
	var callback = this.async();		//转为异步执行
	this.cacheable && this.cacheable();
	
	if(!this.emitFile) throw new Error("emitFile is required from module system");
	
	var query = loaderUtils.parseQuery(this.query);

	var getFontSubset = new fontMinTool({			//创建取子集任务
		srcPath:this.resourcePath,
		text:query.text,
		ext:query.ext
	})
	getFontSubset.run((err, files, stream) => {
		if (err) return console.log(err);		// 任务执行异常捕获
					
		var FontSubsetContent = files[1].contents;
		var size              = FontSubsetContent.length;
		var limit             = query.limit || 0;
		var cbParam           = '';

		if (limit && size > limit) {		//小于limit时转为BASE64

			var mimetype = query.mimetype || mime.lookup(this.resourcePath);	
			cbParam =  "module.exports = " + JSON.stringify("data:" + (mimetype ? mimetype + ";" : "") + "base64," + FontSubsetContent.toString("base64"));
		
		}else{		//生成指定字体文件

			var url = loaderUtils.interpolateName(this, query.name + '.' + query.ext, {
				context: query.context || this.options.context,
				content: FontSubsetContent,
				regExp: query.regExp
			});
			this.emitFile(url, FontSubsetContent);
			cbParam = "module.exports = __webpack_public_path__ + " + JSON.stringify(url) + ";";
		}

		callback(null,cbParam);
	});
	
}

module.exports = FontSubset;