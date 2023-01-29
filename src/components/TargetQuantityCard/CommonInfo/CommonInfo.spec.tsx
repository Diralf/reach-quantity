import { render } from '@testing-library/react';
import React from 'react';
import { SymbolicPeriod } from '../../../constants/symbolic-period';
import CommonInfo from './CommonInfo';

describe('CommonInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonInfo name="test" quantity={12} measurement="test" period={SymbolicPeriod['Current Quarter']}/>);
    expect(baseElement).toBeTruthy();
  });
});
