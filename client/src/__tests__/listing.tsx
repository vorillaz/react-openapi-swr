import { expect, test } from 'vitest';
import {
  screen,
  waitForElementToBeRemoved,
  waitFor,
} from '@testing-library/react';
import { render } from '../lib/setup-tests';
import Listing from '../components/listing';

test('Listing', async () => {
  render(<Listing />);
  await waitForElementToBeRemoved(() => screen.queryByText('Loading...'), {
    timeout: 4000,
  });

  await expect(
    screen.getByTestId('pizza-listing-description'),
  ).toBeInTheDocument();
  screen.debug();
});
