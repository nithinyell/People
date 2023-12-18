import React from 'react';
import renderer from 'react-test-renderer';
import PeopleList from '../../modules/people/view/PeopleList';
import ErrorBoundary from '../ErrorBoundary';

test('renders correctly', () => {
  const tree = renderer.create(
    <ErrorBoundary>
      <PeopleList/>
    </ErrorBoundary>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});