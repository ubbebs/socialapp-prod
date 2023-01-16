import { describe } from 'vitest'
import { validateAccountName } from '../validateAccountName'

describe('validateAccountName', () => {
  test('Test correct string', () => {
    const ref = {
      current: {
        value: 'AccountName1',
      },
    } as React.RefObject<HTMLInputElement>
    expect(validateAccountName({ accountNameRef: ref })).toBeTruthy()
  })
  test('Test string with space', () => {
    const ref = {
      current: {
        value: 'Account Name',
      },
    } as React.RefObject<HTMLInputElement>
    expect(validateAccountName({ accountNameRef: ref })).toBeFalsy()
  })
  test('Test too short string', () => {
    const ref = {
      current: {
        value: 'aaa',
      },
    } as React.RefObject<HTMLInputElement>
    expect(validateAccountName({ accountNameRef: ref })).toBeFalsy()
  })
  test('Test too short string', () => {
    const ref = {
      current: {
        value: 'AAAAAAAAAAAAAAAAA',
      },
    } as React.RefObject<HTMLInputElement>
    expect(validateAccountName({ accountNameRef: ref })).toBeFalsy()
  })
})
