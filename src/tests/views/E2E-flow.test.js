import * as React from 'react';
import {render, act, waitFor, screen, fireEvent} from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import BuildRoot from '../../navigation/navigation';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('E2E Flow for people list', () => {
    test('clicking on people list item must navigate to details screen', async () => {
      const component = (
          <BuildRoot />
      );
  
      await waitFor(() => render(component));
  
      // Wait for PeopleList to render
      await waitFor(() => expect(screen.getByText('Alan Jackson')).toBeTruthy());
  
      // Tap on the person item
      fireEvent.press(screen.getByText('Alan Jackson'));
  
      // Wait for PersonDetails to render
      await waitFor(() => expect(screen.getByText('Alan Jackson')).toBeTruthy());
  
      // Tap on the edit button
      fireEvent.press(screen.getByText('Edit'));
  
      // Edit name and email
      fireEvent.changeText(screen.getByTestId('name-input'), 'New Name');
      fireEvent.changeText(screen.getByTestId('email-input'), 'new.email@example.com');
  
      // Tap on the save button
      fireEvent.press(screen.getByText('Save'));
  
      // Validate new name and email
      await waitFor(() => {
        expect(screen.getByText('New Name')).toBeTruthy();
        expect(screen.getByText('Personal: new.email@example.com')).toBeTruthy();
      });
    });
  });