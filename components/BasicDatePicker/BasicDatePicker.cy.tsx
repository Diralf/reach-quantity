import React from 'react';
import BasicDatePicker from './BasicDatePicker';

describe('<BasicDatePicker />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<BasicDatePicker />);
  });
});
