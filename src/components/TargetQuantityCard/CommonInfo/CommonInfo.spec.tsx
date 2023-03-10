import { render, screen } from '@testing-library/react';
import React from 'react';
import { SymbolicPeriod } from '../../../constants/symbolic-period';
import { toUtcDateTime } from '../../../services/date-time/date-time';
import CommonInfo from './CommonInfo';

type Props = React.ComponentProps<typeof CommonInfo>;

const testQuantities = {
  12: 12,
  100: 100,
};

const generateProps = (props?: Partial<Props>): Props => ({
  name: 'Test',
  quantity: 12,
  measurement: 'tests',
  period: SymbolicPeriod.CurrentQuarter,
  periodStartDate: toUtcDateTime('2023-01-01'),
  periodEndDate: toUtcDateTime('2023-01-01'),
  ...props,
});

describe('CommonInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonInfo {...generateProps()}/>);
    expect(baseElement).toBeTruthy();
  });

  it.each(['Test name', 'Other name'])('should display name %s', (name) => {
    const props = generateProps({ name });

    render(<CommonInfo {...props}/>);

    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it.each([
    [testQuantities['12'], 'tests'],
    [testQuantities['100'], 'times'],
  ])('should display quantity %d with measurement %s', (quantity, measurement) => {
    const props = generateProps({
      quantity,
      measurement,
    });

    render(<CommonInfo {...props}/>);

    expect(screen.getByText(`${quantity} ${measurement}`)).toBeInTheDocument();
  });

  it.each([
    SymbolicPeriod.CurrentQuarter,
    SymbolicPeriod.Next10Days,
  ])('should display period %p', (period) => {
    const props = generateProps({ period });

    render(<CommonInfo {...props}/>);

    expect(screen.getByText(period)).toBeInTheDocument();
  });

  it.each([
    ['2023-01-01', '2023-01-10'],
    ['2023-02-01', '2023-03-10'],
  ])('should display exact dates %p - %p', (periodStartDate, periodEndDate) => {
    const props = generateProps({
      periodStartDate: toUtcDateTime(periodStartDate),
      periodEndDate: toUtcDateTime(periodEndDate),
    });

    render(<CommonInfo {...props}/>);

    expect(screen.getByText(`${periodStartDate} - ${periodEndDate}`)).toBeInTheDocument();
  });
});
