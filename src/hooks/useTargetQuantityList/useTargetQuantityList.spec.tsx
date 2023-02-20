import { renderHook } from '@testing-library/react';
import React from 'react';
import ApiControllerProvider from '../../contexts/ApiController/ApiControllerProvider';
import { ApiController } from '../../types/api-controller';
import useTargetQuantityList from './useTargetQuantityList';

const mockApiController: ApiController = {
  createTarget: jest.fn(),
  getAllTargets: jest.fn(),
  updateReached: jest.fn(),
};

const Wrapper = () => (
  <ApiControllerProvider controller={() => mockApiController}></ApiControllerProvider>
);

describe('useTargetQuantityList', () => {
  it('should be truthy', () => {
    const { result } = renderHook(useTargetQuantityList, { wrapper: Wrapper });
    expect(result).toBeTruthy();
  });
});
