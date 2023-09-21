import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { hero, heroWithLink } from '../CardFixtures'
import { Card } from '../../components/Card'
import { MemoryRouter } from 'react-router-dom'

describe('test on <Card /> component', () => {
  test('should a tittle and paragraph', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Card {...hero} />
      </MemoryRouter>,
    )

    expect(getByText('This is a card component')).toBeDefined()
    expect(getByText('This is a paragraphText')).toBeDefined()
  })

  test('should a tittle,paragraph and link', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Card {...heroWithLink} />
      </MemoryRouter>,
    )

    expect(getByText('This is a card component')).toBeDefined()
    expect(getByText('This is a paragraphText')).toBeDefined()
    const link = getByText('User list')

    expect(link).toBeTruthy()

    expect(link.href).toBeDefined('/users')
  })
})
