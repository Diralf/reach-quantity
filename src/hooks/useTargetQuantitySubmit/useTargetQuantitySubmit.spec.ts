import { renderHook } from '@testing-library/react';
import useTargetQuantitySubmit from './useTargetQuantitySubmit';

describe('useTargetQuantitySubmit', () => {
  it('should be truthy', () => {
    const { result } = renderHook(useTargetQuantitySubmit, {
      initialProps: { redirectTo: '/test' },
    });
    expect(result).toBeTruthy();
  });
});
