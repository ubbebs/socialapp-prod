import { screen, render, fireEvent, act } from '@testing-library/react'
import { describe, it, vi } from 'vitest'
import { ImageNotSelected } from '../ImageNotSelected'

describe('ImageNotSelected', () => {
  it('Checks if load an image calls a function', () => {
    const file = new File([new ArrayBuffer(1)], 'file.jpg')
    const OnClickMock = vi.fn()

    act(() => {
      render(<ImageNotSelected func={OnClickMock} />)
    })
    const input = screen.getByTestId('inputField')
    fireEvent.change(input, {
      target: { files: [file] },
    })
    expect(OnClickMock.mock.calls.length).toEqual(1)
  })
})
