import React from 'react'
import { render, screen } from '@testing-library/react'
import Search from '../../components/Search'

describe('Button Component', () => {
  test('should be able to render a button', () => {
    render(<Search />)

    expect(screen.getByTestId('button')).toBeTruthy()
  })
})
