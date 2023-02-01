describe('visit page', () => {
  it('passes', () => {
    cy.visit('/');
  });
});

describe('nav bar', () => {
  it('contains nav', () => {
    cy.visit('/');
    cy.get('nav')
      .should('be.visible');
  });
});

describe('queue list', () => {
  it('is visible', () => {
    cy.visit('/');
    cy.get('[data-cy="queue-list-container"]')
      .should('be.visible');
  });
  it('contains at least 1 item', () => {
    cy.visit('/');
    cy.get('[data-cy="queue-list-container"]')
      .should('have.lengthOf.at.least', 1);
  });
});

describe('queue item', () => {
  it('is active', () => {
    cy.visit('/');
    cy.get('[data-cy="queue-list-container"]')
      .children()
      .first()
      .should(
        'have.css',
        'border-color',
        'rgb(65, 119, 139)',
      );
  });
  it('shows information', () => {
    cy.visit('/');
    cy.get('[data-cy="queue-list-container"]')
      .children()
      .first()
      .should(
        'contain.text',
        'Deep cold freezer'
      )
      .and(
        'contain.text',
        'PCW'
      );
  });
  it('is inactive on another item click', () => {
    cy.visit('/');
    cy.get('[data-cy="queue-list-container"]')
      .children()
      .last()
      .click();
    cy.get('[data-cy="queue-list-container"]')
      .children()
      .first()
      .should(
        'have.css',
        'border-color',
        'rgb(0, 0, 0)',
      );
  });
  it('a new item is highlighted', () => {
    cy.visit('/');
    cy.get('[data-cy="queue-list-container"]')
      .children()
      .last()
      .click()
      .should(
        'have.css',
        'border-color',
        'rgb(65, 119, 139)',
      );
  });
});
