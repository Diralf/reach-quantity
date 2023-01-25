import React from 'react';
import { render } from '../../../test-utils';
import CommonInfo from './CommonInfo';

describe('CommonInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonInfo/>);
    expect(baseElement)
      .toBeTruthy();
  });
});
