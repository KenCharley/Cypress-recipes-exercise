Cypress.Commands.add('isVisible', { prevSubject: 'element'}, (subject) => {
    return cy.wrap(subject).should('be.visible');
})