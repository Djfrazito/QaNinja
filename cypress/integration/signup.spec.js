import signup from '../pages/SignupPage'
import signupFactory from '../factories/SingupFactory'

describe('Signup', () => {

  // beforeEach(function(){
  //   cy.fixture('deliver').then((d)=>{
  //     this.deliver = d
  //   })
  // })

  it('User shold be deliver', function () {
    var deliver = signupFactory.deliver()

    signup.go()
    signup.fillForm(deliver)
    signup.submit()

    const expepectdMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    signup.modalContentShouldBe(expepectdMessage)

  })

  it('Invalid document', function () {

    var deliver = signupFactory.deliver()

    deliver.cpf = '088329404aa'

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.alertMessageShouldBe('Oops! CPF inválido')
  })

  it('Invalid email', function () {

    var deliver = signupFactory.deliver()

    deliver.email = 'djalma.com.br'
    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.alertMessageShouldBe('Oops! Email com formato inválido.')
  })

  context('Required Fields', () =>{

    const messages = [
      {field: 'name', output:'É necessário informar o nome'},
      {field: 'cpf', output:'É necessário informar o CPF'},
      {field: 'email', output:'É necessário informar o email'},
      {field: 'postalCode', output:'É necessário informar o CEP'},
      {field: 'number', output:'É necessário informar o número do endereço'},
      {field: 'deliverMethod', output:'Selecione o método de entrega'},
      {field: 'cnh', output:'Adicione uma foto da sua CNH'},
    ]

    before(()=>{
      signup.go()
      signup.submit()
    })

    messages.forEach(function(msg){
      
      it(`${msg.field} is required`, ()=>{
        signup.alertMessageShouldBe(msg.output)
      })
    })

  })

})