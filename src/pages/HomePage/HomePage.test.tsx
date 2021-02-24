import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('renders learn react link', () => {
    render(<HomePage />);
    const link_element = screen.getByText(/learn react/i);
    expect(link_element).toBeInTheDocument();
});
