var load_speed = 10000;

module.exports = function (browser) {
	
	this.goToSite = function () {
		browser
		.windowMaximize()
		.url(browser.globals.launchUrl)
		.waitForElementVisible('body', load_speed);
		return browser;
	};

	this.save = function(){
		browser
		.useXpath().waitForElementVisible("//button[contains(@class, 'pd-btn_base pd-button-save v-btn v-btn--depressed v-btn--round theme--light orange')]", load_speed)
		.useXpath().click("//i[@class='pd-icon save pd-mr-1 text-white']") // Save button
		.useXpath().waitForElementVisible("//div[contains(@class, 'v-input v-text-field v-input--is-focused theme--light primary--text')]", load_speed)
	};
  
	this.setListName = function(){
		browser
		.setValue("//input[@placeholder='Ex: Materiais de Metodologia Científica']", 'Lista 1')
		.click("//div[contains(text(),'Criar Lista')]")
		.pause(2000)
		.useXpath().assert.containsText("//div[@class='notifications pd-toast']//span", "Material salvo com sucesso")
	};
	
	this.goListPage = function(){
		browser
		.useXpath().click("//div[@class='mv-navigate-back fullscreen-hide']") // Click back
		.useXpath().click("//a[contains(text(),'Listas')]")
		.execute('scrollTo(0,300)')
		.useXpath().waitForElementVisible("//h1[contains(@class, 'pd-card-title')]", load_speed)
	};
	
	this.checkMaterialSaved = function(){
		browser
		.execute('scrollTo(0,300)')
		.pause(1000)
		.getText("//h1[contains(@class, 'pd-card-title')]", function (result) {
			this.assert.equal(result.value, "Lista 1");
		})
		.useXpath().click("//h1[contains(@class, 'pd-card-title')]")
		.execute('scrollTo(0,300)')
		.pause(1000)
		.useXpath().waitForElementVisible("//div[contains(@class, 'pd-card-default highlight_content downline horizontal')]", load_speed)
		.getText("//div[contains(@class, 'pd-card-content')]/h1", function (result) {
			this.assert.equal(result.value, "trex-row");
		});
	};
	
	return this;
};