import React from 'react';
import renderer from 'react-test-renderer';
import PersonDetails from '../../modules/person-details/view/person-details';
import ErrorBoundary from '../ErrorBoundary';

test('PersonDetails renders correctly', () => {
  const mockedParams = {
    route: {params: {details: 'person-id'}},
    navigation: '',
  };
  const tree = renderer
    .create(
      <ErrorBoundary>
        <PersonDetails {...mockedParams} />
      </ErrorBoundary>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});