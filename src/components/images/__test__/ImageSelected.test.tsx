import { screen, render, act } from '@testing-library/react'
import { describe, it, vi } from 'vitest'
import { ImageSelected } from '../ImageSelected'

describe('ImageSelected', () => {
  it('Checks if load an image calls a function', async () => {
    const file = new File([new ArrayBuffer(1)], 'file.jpg')
    const OnClickMock = vi.fn()
    global.URL.createObjectURL = vi.fn()

    act(() => {
      render(<ImageSelected func={OnClickMock} AvatarState={file} />)
    })

    const button = screen.getByRole('button')
    button.click()
    expect(OnClickMock.mock.calls.length).toEqual(1)
  })
})
