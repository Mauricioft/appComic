import { render, screen } from '@testing-library/react'
import App from './App'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

test('renders title', async () => {
  render(<App />)
  const value = 'Manage Your Preferences'
  const title = await screen.findByText(value)
  expect(title).toBeVisible()
})
