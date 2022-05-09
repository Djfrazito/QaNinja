import signup from '../pages/SignupPage'
import signupFactory from '../factories/SingupFactory'
const {faker} = require('@faker-js/faker')

describe('Signup', () =>{

  // beforeEach(function(){
  //   cy.fixture('deliver').then((d)=>{
  //     this.deliver = d
  //   })
  // })

  it('User shold be deliver',function(){
      var deliver = signupFactory.deliver()

      signup.go()
      signup.fillForm(deliver)
      signup.submit()
    
      const expepectdMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
      signup.modalContentShouldBe(expepectdMessage)
      
  })

  it('Invalid document',function() {

    var deliver = signupFactory.deliver()

    deliver.cpf = '088329404aa'

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.alertMessageShouldBe('Oops! CPF inválido')
  })

  it('Invalid email',function() {

    var deliver = signupFactory.deliver()

    deliver.email = 'djalma.com.br'
    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.alertMessageShouldBe('Oops! Email com formato inválido.')
  })
})