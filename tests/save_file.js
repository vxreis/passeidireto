const env = require('env2')('credential.env');
var steps = require('../libs/steps');

module.exports = {
	before: function (browser, done) {
		console.log("beforeTest");
		done();
	},
	
	beforeEach: function(browser, done){
		console.log("beforeEachTest");
		done();
	},
	
	"Check if the material has been saved" : function (browser) {
		steps(browser).goToSite()
		.login(process.env.USER, process.env.PASSWORD)
		steps(browser).save();
		steps(browser).setListName();
		steps(browser).goListPage();
		steps(browser).checkMaterialSaved();
		browser.pause(3000)
		.closeWindow()
		.end();
	},
	
	afterEach: function (browser, done) {
		console.log("afterEachTest");
		browser.closeWindow();
		browser.end(done);
	},
	
	after: function (browser, done) {
		console.log("afterTest");
		done();
	}
}