import { describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { SubmitButton } from '../SubmitButton'

describe('SubmitButton', () => {
  it('check text inside button', () => {
    const func = () => {
      return null
    }
    const textValue = 'Test value'
    act(() => {
      render(<SubmitButton func={func} value={textValue} />)
    })
    const text = screen.getByText(textValue)
    expect(text).toBeInTheDocument()
  })

  it('check if button click works', () => {
    const OnClickMock = vi.fn()
    act(() => {
      render(<SubmitButton func={OnClickMock} value="Submit" />)
    })
    const button = screen.getAllByRole('button')
    button[0].click()
    expect(OnClickMock.mock.calls.length).toEqual(1)
  })
})
