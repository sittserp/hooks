import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Character from './Character';
import { MemoryRouter } from 'react-router-dom';

describe('Character component', () => {
  afterEach(() => cleanup());
  it('renders Character', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Character />
      </MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
