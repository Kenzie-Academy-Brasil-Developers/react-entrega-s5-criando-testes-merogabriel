context('Search', () => {
  it('Enters the page and tries to search a address', () => {
    cy.visit('http://localhost:3000')
    cy.viewport(1440, 900)

    cy.get('input[name=inputsearch]').type('57035180')

    cy.intercept('GET', '/', {
      statusCode: 200,
      body: {
        complemento: 'até 3308/3309',
        bairro: 'Ponta Verde',
        cidade: 'Maceió',
        logradouro: 'Avenida Álvaro Otacílio',
        estado_info: {
          area_km2: '27.848,158',
          codigo_ibge: '27',
          nome: 'Alagoas',
        },
        cep: '57035180',
        cidade_info: {
          area_km2: '509,552',
          codigo_ibge: '2704302',
        },
        estado: 'AL',
      },
    })
    cy.contains('Buscar pelo CEP').click()
  })
})
