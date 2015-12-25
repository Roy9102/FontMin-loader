# FontMin-loader
- 这是一个基于fontmin的webpack 加载器，用于取字体子集
- a Webpack loader of FontMin
- @monkindey Thanks for your great idea;

##Useage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

#### Example　

```javascript
{
		test:   /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
		loader: 'FontMin-loader',
		query:  {
			limit:10240,				// 10KB
			ext:'woff',				// 输出字体格式
			name:'fonts/[name]',			// 输出名称
			text:'helloworld' 			// 字体集合 【String】
		}
}
 
{
		test:   /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
		loader: "FontMin-loader?limit=10240&name=fonts/[name].[ext]&text=helloworld",
}
```
