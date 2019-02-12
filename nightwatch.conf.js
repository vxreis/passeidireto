// Get Selenium and the drivers
var seleniumServer = require('selenium-server');
var chromedriver = require('chromedriver');
var geckodriver = require('geckodriver');
var iedriver = require('iedriver');

var config = {
	src_folders: [
		// Folders with tests
		'tests'
	],
	output_folder: 'reports', // Where to output the test reports
	custom_commands_path: 'libs',
	selenium: {
		// Information for selenium, such as the location of the drivers ect.
		start_process: true,
		server_path: seleniumServer.path,
		port: 4444, // Standard selenium port
		log_path: 'selenium_log',
		cli_args: {
			'webdriver.chrome.driver': chromedriver.path,
			'webdriver.gecko.driver': geckodriver.path,
			'webdriver.edge.driver': iedriver.path
		}
	},
	test_workers: {
		// This allows more then one browser to be opened and tested in at once
		enabled: true,
		workers: 'auto'
	},
	test_settings: {
		default: {
			screenshots: {
				enabled: true,
				path: 'reports',
				on_failure: true,
				on_error: true
			},
			globals: {
				// How long to wait (in milliseconds) before the test times out
				waitForConditionTimeout: 5000,
				launchUrl : 'https://www.passeidireto.com/arquivo/29260283/trex-row'
			},
			desiredCapabilities: {
				// The default test
				browserName: 'chrome',
				javascriptEnabled: true,
				acceptSslCerts: true,
				nativeEvents: true
			}
		},
		// Here, we give each of the browsers we want to test in, and their driver configuration
		chrome: {
			desiredCapabilities: {
				browserName: 'chrome',
				javascriptEnabled: true,
				acceptSslCerts: true,
				nativeEvents: true
			}
		},
		ie11: {
			desiredCapabilities: {
				browserName: 'internet explorer',
				javascriptEnabled: true,
				acceptSslCerts: true,
				nativeEvents: true
			}
		},
		edge: {
			desiredCapabilities: {
				browserName: 'MicrosoftEdge',
				javascriptEnabled: true,
				acceptSslCerts: true,
				nativeEvents: true
			}
		}
	}
};

module.exports = config;