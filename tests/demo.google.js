module.exports = {
    'Searching Google': (client) => {
        client.url('https://www.google.com')
            .waitForElementVisible('body', 1000)
            .setValue('input[type=text]','nightwatch')
            .waitForElementVisible('input[name=btnK]')
            .click('input[name=btnK]')
            .pause(1000)
            .assert.containsText('#main', 'Nightwatch')

    },

    'Google Search for Hello World': function (client) {
        client
            .url('https://www.google.com')
            .waitForElementVisible('input[name="q"]')
            .setValue('input[name="q"]', 'hello world')
            .keys(client.Keys.ENTER)
            .assert.urlContains('q=hello+world')
    },
    afterEach: function (client) {
        client.end();
    }
}
