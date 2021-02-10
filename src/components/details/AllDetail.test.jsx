import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import rickAndMortyApiDetail from '../../fixtures/rickAndMortyDetail.json';
import AllDetail from './AllDetail';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/1', (req, res, ctx) => {
    return res(ctx.json(rickAndMortyApiDetail));
  })
);

describe('AllDetail container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches and displays a characters details', async() => {
    render(<AllDetail match={{ params: { id: '1' } }}/>);

    screen.getByText('Loading');
    
    return waitFor(() => {
      screen.getByText('Rick Sanchez');
      screen.getByText('Human');
      screen.getByText('Alive');
    });
  });
});
