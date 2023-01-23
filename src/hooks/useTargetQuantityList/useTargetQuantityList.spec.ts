import { renderHook } from '../../test-utils';
import useTargetQuantityList from './useTargetQuantityList';

describe('useTargetQuantityList', () => {
  it('should be truthy', () => {
    const { result } = renderHook(useTargetQuantityList);
    expect(result)
      .toBeTruthy();
  });
});
