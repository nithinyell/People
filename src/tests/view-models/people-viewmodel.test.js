import { act } from 'react-test-renderer';
import { mockPeopleList } from '../../modules/people/data/mock/peopleList';
import { PeopleViewModel } from '../../modules/people/view-model/people-viewmodel';
import React from 'react';

// Mock the asynchronous function
jest.mock('../../modules/people/data/mock/peopleList', () => ({
  __esModule: true,
  mockPeopleList: jest.fn().mockResolvedValue({
    people: [
    ],
  }),
}));

describe('PeopleViewModel', () => {
  it('fetches people correctly', async () => {
    // Mock useState
    const mockSetState = jest.fn();
    jest.spyOn(React, 'useState').mockImplementation(initialState => [initialState, mockSetState]);

    // Mock useEffect
    const mockUseEffect = jest.fn();
    jest.spyOn(React, 'useEffect').mockImplementation(mockUseEffect);

    // Create a mock response
    const mockResponse = {
      people: [
      ],
    };

    // Mock the implementation of mockPeopleList
    mockPeopleList.mockResolvedValueOnce(mockResponse);

    // Capture the result
    let result;
    await act(async () => {
      result = PeopleViewModel();
      // Wait for the promise to resolve
      await Promise.resolve();
    });

    // Assert the final state matches the expected result
    expect(result.people).toEqual(mockResponse.people);

    // Cleanup
    jest.restoreAllMocks();
  });
});
