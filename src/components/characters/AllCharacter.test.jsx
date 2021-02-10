import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import rickAndMortyApiResponse from '../../fixtures/rickAndMorty.json';
import { MemoryRouter } from 'react-router-dom';
import AllCharacters from './AllCharacters';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json(rickAndMortyApiResponse));
  })
);

describe('AllCharacters container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  
  it('fetches and displays a list of characters', async() => {
    render(
      <MemoryRouter>
        <AllCharacters />
      </MemoryRouter>
    );

    screen.getByText('Loading');

    const listOfCharacters = await screen.findByTestId('CharacterList');

    return waitFor(() => {
      expect(listOfCharacters).not.toBeEmptyDOMElement();
    });
  });
});

