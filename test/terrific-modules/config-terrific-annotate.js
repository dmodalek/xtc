module.exports = {
	annotateModules: {
		development: true
	}
	,repository: 'https://github.com/'
	// file system paths relative to app.js, a property called app.config.pathsAbsolute will be generated from them
	,paths: {
		// path to the Terrific modules directories
		modulesBaseDir: 'test/terrific-modules/fixtures'
	}
	,moduleDirName:         'mod-{{name}}'
};