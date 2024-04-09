describe('visits turing cafe', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 201,
      body:
        [{
              "id": 1,
              "name": "Christie",
              "date": "12/29",
              "time": "7:00",
              "number": 12
          },
          {
              "id": 2,
              "name": "Leta",
              "date": "4/5",
              "time": "7:00",
              "number": 2
          },
          {
              "id": 3,
              "name": "Pam",
              "date": "1/21",
              "time": "6:00",
              "number": 4
          },
          {
              "id": 4,
              "name": "Khalid",
              "date": "5/9",
              "time": "7:30",
              "number": 7
          },
          {
              "id": 5,
              "name": "Will",
              "date": "5/15",
              "time": "6:30",
              "number": 2
          },
          {
              "id": 6,
              "name": "Eric",
              "date": "5/30",
              "time": "6:00",
              "number": 8
          },
          {
              "id": 7,
              "name": "Robbie",
              "date": "6/5",
              "time": "5:30",
              "number": 2
          },
          {
              "id": 8,
              "name": "Travis",
              "date": "6/8",
              "time": "7:00",
              "number": 12
          },
          {
              "id": 9,
              "name": "Brittany",
              "date": "9/9",
              "time": "7:30",
              "number": 3
          }]
    })
    cy.visit('http://localhost:3000')
  })
  it('should show a heading and form with 4 inputs and one button', () => {
    cy.get('h1').contains('Turing Cafe Reservations')
    .get('form').children().should('have.length', '5')
    .get('form input').should('have.prop', 'name')
    .get('form input').last().should('have.id', 'form-guests')
  })
  it('Should show reservations',() => {
    cy.get('section').within(() => {
      cy.get('article').first().should('have.id', '1')
      .get('article').last().should('have.id', '9')
    })
  })
  it('Should add a new reservation',() => {
    cy.get('#form-name').type('asher')
    .get('#form-name').should('have.value', 'asher')
    .get('#form-date').type('5/13')
    .get('#form-date').should('have.value', '5/13')
    .get('#form-time').type('7:30')
    .get('#form-time').should('have.value', '7:30')
    .get('#form-guests').type('2')
    .get('#form-guests').should('have.value', '2')
    .get('form button').click()

    .get('article').last().get('h2').contains('asher')
    .get('article').last().children().last().contains('2')
  })
  it('Should show user flow left to right through inputs',() => {
    cy.get('#form-name').next().should('have.id', 'form-date').next().should('have.id', 'form-time')
    .next().should('have.id', 'form-guests')
  })
})