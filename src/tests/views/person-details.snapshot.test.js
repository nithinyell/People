import React from 'react';
import renderer from 'react-test-renderer';
import PersonDetails from '../../modules/person-details/view/person-details';
import ErrorBoundary
 from '../ErrorBoundary';
// todo - fix 
// seeing /People/node_modules/@react-navigation/elements/lib/commonjs/assets/back-icon.png:1
// ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){�PNG
// SyntaxError: Invalid or unexpected token

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