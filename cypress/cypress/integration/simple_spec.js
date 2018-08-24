// describe('Los estudiantes login', function() {
//     //1. Cree una cuenta y pruebe el login correcto y la creación de una cuenta con un login que ya existe.
//     it('Sign up exitoso de un usuario', function(){
//         //Crear cuenta nueva
//         cy.visit('https://losestudiantes.co')
//         cy.contains('Cerrar').click()
//         cy.contains('Ingresar').click()
//         cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Pepito")
//         cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Perez")
//         cy.get('.cajaSignUp').find('input[name="correo"]').click().type("perez.pepito@uniandes.edu.co")
//         cy.get('.cajaSignUp').find('input[type="checkbox"]').check()
//         cy.get('.cajaSignUp').find('input[name="password"]').click().type("password1234")
//         cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('Maestría en Ingeniería de Software')
//         cy.get('.cajaSignUp').contains('Registrarse').click()
//         cy.contains('Registro exitoso!')
//     })
//     it('visits los estudiantes and successfull at login', function(){
//         //Login correcto
//         cy.visit('https://losestudiantes.co')
//         cy.contains('Cerrar').click()
//         cy.contains('Ingresar').click()
//         cy.get('.cajaLogIn').find('input[name="correo"]').click().type("perez.pepito@uniandes.edu.co")
//         cy.get('.cajaLogIn').find('input[name="password"]').click().type("password1234")
//         // cy.get('.cajaLogIn').find('input[name="correo"]').click().type("ing.mago.ramirez@gmail.com")
//         // cy.get('.cajaLogIn').find('input[name="password"]').click().type("password1234")
//         cy.get('.cajaLogIn').contains('Ingresar').click()
        
//     })
//     it('Visits los estudiantes and fails at login', function() {
//         cy.visit('https://losestudiantes.co')
//         cy.contains('Cerrar').click()
//         //Lineas nuevas  
//         cy.contains('Ingresar').click()
//         cy.get('.cajaLogIn').find('input[name="correo"]').click().type("wrongemail@example.com")
//         cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234")
//         cy.get('.cajaLogIn').contains('Ingresar').click()
//         cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
//     })
//     it('Visits los estudiantes and fails at sign up', function(){
//         //Creación de cuenta con login ya existente
//         cy.visit('https://losestudiantes.co')
//         cy.contains('Cerrar').click()
//         cy.contains('Ingresar').click()
//         cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Pepito")
//         cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Perez")
//         cy.get('.cajaSignUp').find('input[name="correo"]').click().type("perez.pepito@uniandes.edu.co")
//         cy.get('.cajaSignUp').find('input[type="checkbox"]').check()
//         cy.get('.cajaSignUp').find('input[name="password"]').click().type("password1234")
//         cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('Maestría en Ingeniería de Software')
//         cy.get('.cajaSignUp').contains('Registrarse').click()
//         cy.contains(`Error: Ya existe un usuario registrado con el correo 'perez.pepito@uniandes.edu.co'`)
//     })
// })
// describe('Los estudiantes teacher search', function(){
//     it('Search teacher', function(){
//         cy.visit('https://losestudiantes.co')
//         cy.contains('Cerrar').click()
//         cy.get('.Select-placeholder').click().type('Dario')
//         // cy.get('.Select-input').click().find('input[role="combobox"]').type('Dario')
//         // cy.get('.is-open').find('input[role="combobox"]').click().type("Dario Correal")
//     })
// })
describe('Los estudiantes teacher profile', function(){
    it('Search teacher', function(){
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.get(':nth-child(1) > .profesor > a.jsx-633353764 > :nth-child(2)').click()
    })
})