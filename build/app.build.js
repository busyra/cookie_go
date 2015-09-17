({
	_comment: " fileExclusionRegExp: /^thumbnails$/ ",
	
	appDir: "../",
	baseUrl: "js",
	dir: "../dist",
	mainConfigFile: "../js/main.js",
	name: "main",
	optimizeCss: "standard",
	optimize: 'uglify2',
	uglify2: {
		mangle: false
	}
})