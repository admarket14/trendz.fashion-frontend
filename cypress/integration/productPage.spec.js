import testUrl from '../config/testUrl';

describe('Homepage testing', () => {
  it('Visit Product Page ', () => {
    cy.visit(`${testUrl}/product/1`);
  });

  it('Change images, size and quantity', () => {
    // Get the product thumbnail and click each of them
    cy.get('[data-test-id="productThumbnail"]').click({ multiple: true });

    // Get the color card and click each of them
    cy.get('[data-test-id="productColor"]').click({ multiple: true });

    // Select value from size drop down and validate
    cy.get('[data-test-id="sizeDropdown"]').select('9 UK').should('have.value', '9 UK');

    // Select value from Quantity drop down and validate
    cy.get('[data-test-id="quantityDropdown"]').select('05').should('have.value', '05');
  });
});
