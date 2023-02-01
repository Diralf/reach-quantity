import { render } from '@testing-library/react';
import React from 'react';
import TargetQuantityOverview from './TargetQuantityOverview';

describe('TargetQuantityOverview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TargetQuantityOverview id={1}>
        <div/>
      </TargetQuantityOverview>,
    );
    expect(baseElement).toBeTruthy();
  });
});
