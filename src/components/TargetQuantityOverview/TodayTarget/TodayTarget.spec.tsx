import { render } from '@testing-library/react';
import React from 'react';
import TodayTarget from './TodayTarget';

describe('TodayTarget', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodayTarget/>);
    expect(baseElement).toBeTruthy();
  });
});
