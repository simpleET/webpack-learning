module.exports = {
	configureWebpack: (config) => {
		/*config.externals = {
			echarts: 'echarts',
		}*/
		config.devtool = false;
	}
}