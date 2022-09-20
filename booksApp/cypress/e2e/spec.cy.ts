describe('Start App', () => {
  
});

it('Wait for loading page', ()=>{
  cy.visit('/');
  cy.contains('Books list').should('be.visible');
  cy.contains('Log in').should('be.visible');
});

it('Logging in', ()=>{
  cy.contains('Log in').click();
//check form
  cy.contains('Log in').should('be.visible');
  cy.contains('Your Email').should('be.visible');
  cy.get('#mail').should('be.visible').should('have.attr','placeholder');
  cy.get('#mail').invoke('attr','placeholder').should('contain','Enter email');
  cy.contains('have fun!').should('be.visible');
  cy.contains('Your password').should('be.visible');
  cy.get('#pass').should('be.visible').should('have.attr','placeholder');
  cy.get('#pass').invoke('attr','placeholder').should('contain','Enter password');
  cy.contains('Cancel').should('be.visible').click();
  cy.contains('Log in').click();
  cy.contains('Submit').should('be.visible');
  //log in
  cy.get('#mail').type('bropet@mail.ru');
  cy.get('#pass').type('123');
  cy.contains('Submit').click();
  //check
  cy.contains('Books list').should('be.visible');
  cy.contains('Favorites').should('be.visible');
  cy.contains('Log out').should('be.visible');
  cy.contains('Добро пожаловать').should('be.visible');
});

it('Add a book', ()=>{
  cy.contains('Add new').should('be.visible');
});