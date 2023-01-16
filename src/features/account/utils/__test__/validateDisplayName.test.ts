import { describe } from 'vitest'
import { validateDisplayName } from '../validateDisplayName'

describe('validateDisplayName', () => {
  test('Test correct string', () => {
    const ref = {
      current: {
        value: 'DisplayName',
      },
    } as React.RefObject<HTMLInputElement>
    expect(validateDisplayName({ displayNameRef: ref })).toBeTruthy()
  })
  test('Test correct string with space', () => {
    const ref = {
      current: {
        value: 'Display Name',
      },
    } as React.RefObject<HTMLInputElement>
    expect(validateDisplayName({ displayNameRef: ref })).toBeTruthy()
  })
  test('Test too short string', () => {
    const ref = {
      current: {
        value: 'abc',
      },
    } as React.RefObject<HTMLInputElement>
    expect(validateDisplayName({ displayNameRef: ref })).toBeFalsy()
  })
  test('Test too long string', () => {
    const ref = {
      current: {
        value: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      },
    } as React.RefObject<HTMLInputElement>
    expect(validateDisplayName({ displayNameRef: ref })).toBeFalsy()
  })
})
