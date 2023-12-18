import PeopleList from '../../modules/people/view/PeopleList';
import {render, act, waitFor, screen} from '@testing-library/react-native';

describe('PeopleList', () => {
  test('renders list of people', async () => {
    await act(async () => {
      // Render the PeopleList component
      await waitFor(() => render(<PeopleList />));

      await waitFor(() => {
        // Check if the names of Chris is present in the rendered component
        expect(screen.getByText('Chris Kong')).toBeTruthy();
        expect(screen.getByText('christ.kong@email.com')).toBeTruthy();

        // Check if a non-existing name is not present
        expect(screen.queryByText('Non Existing Name')).toBeNull();
      });
    });
  });
});