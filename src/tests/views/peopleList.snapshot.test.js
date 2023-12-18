import React from 'react';
import renderer from 'react-test-renderer';
import PeopleList from '../../modules/people/view/PeopleList';

test('renders correctly', () => {
  const tree = renderer.create(<PeopleList />).toJSON();
  expect(tree).toMatchSnapshot();
});