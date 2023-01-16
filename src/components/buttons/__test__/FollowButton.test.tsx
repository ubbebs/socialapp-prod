import { describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { FollowButton } from '../FollowButton'

describe('FollowButton', () => {
  it('check text inside button', () => {
    const func = () => {
      return null
    }
    const textValue = 'Test value'
    act(() => {
      render(<FollowButton func={func} text={textValue} />)
    })
    const text = screen.getByText(textValue)
    expect(text).toBeInTheDocument()
  })

  it('check if button click works', () => {
    const OnClickMock = vi.fn()
    act(() => {
      render(<FollowButton func={OnClickMock} text="Follow" />)
    })
    const button = screen.getAllByRole('button')
    button[0].click()
    expect(OnClickMock.mock.calls.length).toEqual(1)
  })
})
