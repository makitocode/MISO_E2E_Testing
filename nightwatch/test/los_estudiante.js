module.exports = {
    'Search Teachers': function (browser) {
        browser
            .maximizeWindow()
            .url('https://losestudiantes.co/')
            .click('.botonCerrar')
            .pause(1000)
            .click('.Select-control')
            .setValue('.Select-input input', 'Dario Correal')
            .waitForElementVisible('.Select-menu-outer .Select-option', 5000)
            .assert.containsText('.Select-menu-outer .Select-option', 'Dario Correal - Ingeniería De Sistemas')
            .end();
    },
    'Dirigirse a la página de un profesor': function (browser) {
        browser
            .maximizeWindow()
            .url('https://losestudiantes.co/')
            .click('.botonCerrar')
            .pause(1000)
            .click('.Select-control')
            .setValue('.Select-input input', 'Dario Correal')
            .waitForElementVisible('.Select-menu-outer .Select-option', 5000)
            .click('.Select-menu-outer .Select-option')
            .waitForElementVisible('.nombreProfesor', 5000)
            .assert.containsText('.nombreProfesor', 'Dario Correal')
            .end();
    }
};