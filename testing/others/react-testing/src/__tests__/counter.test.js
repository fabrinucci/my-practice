import React from 'react';
import { render, screen } from "@testing-library/react";
import { Counter } from '../components/Counter';

describe('<Counter />', () => {
  test('Should show a component', () => {

    const component = render(<Counter />);
    
    expect(component.container)

  })
})