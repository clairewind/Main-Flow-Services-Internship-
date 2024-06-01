import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import App from './App';

const mock = new MockAdapter(axios);

test('renders Hello World', async () => {
  const mockedResponse = { message: 'Hello World!' };
  mock.onGet('/').reply(200, mockedResponse);

  const { getByText } = render(<App />);
  await waitFor(() => {
    expect(getByText('Hello World!')).toBeInTheDocument();
  });
});
