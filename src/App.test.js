import { render, screen } from '@testing-library/react'
import App from './App'

test('renders without crashing', () => {
  const div = document.createElement('div')
  render(<App />, div)
})

test('renders loading', async () => {
  render(<App />)
  const loading = await screen.findByText(/Cargando/i)
  expect(loading).toBeVisible()
})
