var load_speed = 5000;

exports.command = function(username, password) {

  this
    .waitForElementVisible('body', load_speed)
	.click('.login')
    .setValue('input[type=text]', username)
    .setValue('input[type=password]', password)
    .click('button.button.orange.full')
	.waitForElementVisible('body', load_speed);

  return this;
};