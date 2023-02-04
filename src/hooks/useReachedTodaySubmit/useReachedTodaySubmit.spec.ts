import { renderHook } from '@testing-library/react';
import useReachedTodaySubmit from './useReachedTodaySubmit';

describe('useReachedTodaySubmit', () => {
  it('should be truthy', () => {
    const { result } = renderHook(useReachedTodaySubmit);
    expect(result).toBeTruthy();
  });
});
