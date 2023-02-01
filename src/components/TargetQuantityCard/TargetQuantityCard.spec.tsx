import { render, screen, within } from '@testing-library/react';
import React, { ComponentProps } from 'react';
import { SymbolicPeriod } from '../../constants/symbolic-period';
import TargetQuantityCard from './TargetQuantityCard';

type Props = ComponentProps<typeof TargetQuantityCard>;
const generateProps = (props: Partial<Props> = {}): Props => ({
  name: 'test',
  quantity: 12,
  measurement: 'test',
  period: SymbolicPeriod['Current Quarter'],
  todayTarget: 0,
  ...props,
});

describe('TargetQuantityCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TargetQuantityCard {...generateProps()}/>);

    expect(baseElement).toBeTruthy();
  });

  it.each([1, 2, 3, 4, 5])('should render correct today target %d', (todayTarget) => {
    const props = generateProps({ todayTarget });

    render(<TargetQuantityCard {...props}/>);
    const todayTargetArea = screen.getByLabelText('Today target');

    expect(within(todayTargetArea).getByText(todayTarget)).toBeInTheDocument();
  });
});