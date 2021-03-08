import testUrl from '../config/testUrl';
import data from '../fixtures/data';

describe('Homepage testing', () => {
  it('Visit Landing Homepage ', () => {
    cy.visit(testUrl);
  });

  it('Open Modal, Input login info validate info and close login Modal', () => {
    cy.contains('Log in').click();

    // Get the login email input, type into it and verify that the value has been updated
    cy.get('[data-test-id="loginEmail"]').type(data.email).should('have.value', data.email);

    // Get the login password input, type into it and verify that the value has been updated
    cy.get('[data-test-id="loginPassword"]')
      .type(data.password)
      .should('have.value', data.password);

    // Get the login password input, type into it and verify that the value has been updated
    cy.get('[data-test-id="loginButton"]').click();

    // Close the modal
    cy.get('[data-test-id="closeModal"]').click();
  });

  it('Validate Page Routes on link click', () => {
    cy.get('[data-test-id="menCategory"]').click();
    cy.url().should('include', '/men');
    cy.go('back');

    cy.get('[data-test-id="womenCategory"]').click();
    cy.url().should('include', '/women');
    cy.go('back');

    cy.get('[data-test-id="jewelleryCategory"]').click();
    cy.url().should('include', '/jewellery');
    cy.go('back');

    cy.get('[data-test-id="referralsPage"]').click();
    cy.url().should('include', '/referrals');
    cy.go('back');

    cy.get('[data-test-id="menCategory"]').click();
    cy.url().should('include', '/men');
    cy.go('back');

    cy.get('[data-test-id="helpPage"]').click();
    cy.url().should('include', '/help');
    cy.go('back');
  });
});
