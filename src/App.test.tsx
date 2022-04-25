import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('inputs should be initially empty', () => {
  render(<App />)
  const emailInputElement = screen.getByRole('textbox') as HTMLInputElement
  const passwordInputElement = screen.getByLabelText(
    /password/i
  ) as HTMLInputElement

  expect(emailInputElement.value).toBe('')
  expect(passwordInputElement.value).toBe('')
})
