import { renderHook } from '@testing-library/react';
import useDefaultPage from './useDefaultPage';

describe('useDefaultPage', () => {
  it('should be truthy', () => {
    const { result } = renderHook(useDefaultPage);
    expect(result).toBeTruthy();
  });
});
