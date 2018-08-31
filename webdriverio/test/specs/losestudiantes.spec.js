var assert = require('assert');


describe('Login los estudiantes ', function () {
    //Creación de cuenta con login ya existente
    it('Visits los estudiantes and fails at sign up', function () {

        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.waitForEnabled('button=Ingresar', 5000);
        browser.scroll('button=Ingresar');
        browser.click('button=Ingresar');

        browser.waitForVisible('input[name="nombre"]', 5000);
        var cajaSignUp = browser.element('.cajaSignUp');

        var nombreInput = cajaSignUp.element('input[name="nombre"]');
        nombreInput.click();
        nombreInput.keys('Pepito');

        var apellidoInput = cajaSignUp.element('input[name="apellido"]');
        apellidoInput.click();
        apellidoInput.keys('Perez');
        var passwordInput = cajaSignUp.element('input[name="password"]');
        passwordInput.click();
        passwordInput.keys('password1234');
        var emailInput = cajaSignUp.element('input[name="correo"]');
        emailInput.click();
        emailInput.keys('perez.pepito@uniandes.edu.co');
        var selectUniversidad = cajaSignUp.element('select[name="idUniversidad"]');
        selectUniversidad.selectByVisibleText("Universidad de los Andes");
        var checkAceptar1 = cajaSignUp.element('input[type="checkbox"]');
        checkAceptar1.click();
        var selectPrograma = cajaSignUp.element('select[name="idPrograma"]');
        selectPrograma.selectByVisibleText("Maestría en Ingeniería de Software");
        var checkAceptar = cajaSignUp.element('input[name="acepta"]');
        checkAceptar.click();
        var buttonAceptar = cajaSignUp.element('.logInButton');
        buttonAceptar.click();
        browser.waitForVisible('.sweet-alert', 10000);
        var alertText = browser.element('.sweet-alert h2').getText();
        expect(alertText).toBe('Ocurrió un error activando tu cuenta');

    });

    it('Deberia loguear exitosamente', function () {

        browser.url('https://losestudiantes.co');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.waitForEnabled('button=Ingresar', 5000);
        browser.scroll('button=Ingresar');
        browser.click('button=Ingresar');

        browser.waitForVisible('input[name="correo"]', 5000);
        var cajaLogIn = browser.element('.cajaLogIn');

        var mailInput = cajaLogIn.element('input[name="correo"]');
        mailInput.click();
        mailInput.keys('perez.pepito@uniandes.edu.co');

        var passwordInput = cajaLogIn.element('input[name="password"]');
        passwordInput.click();
        passwordInput.keys('password1234');

        cajaLogIn.element('.logInButton').click();
        browser.waitForVisible('#cuenta', 10000);
        isExisting = browser.isExisting('#cuenta');
        expect(isExisting).toBe(true);
    });
});
