const {faker} = require('@faker-js/faker')
const cpf = require('gerador-validador-cpf')

export default {

  deliver: function(){

    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()
    var email = faker.internet.email(firstName)

    var data = {
      name: `${firstName} ${lastName}`,
      cpf:  cpf.generate(),
      email: `${email}`,
      whatsapp:'73999044282',
      address: {
      postalcode:'45990292',
      street: 'Rua da Pituba',
      number: '108',
      details: 'adsoft',
      district: 'Bela Vista',
      city_state: 'Teixeira de Freitas/BA'
    },
      deliver_method: 'Moto',
      cnh: 'cnh-digital.jpg'
    }

    return data
  }
}