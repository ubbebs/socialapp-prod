import { describe } from 'vitest'
import { signupValidate } from '../signupValidate'

describe('signupValidate', () => {
  test('Test correct passwords', () => {
    const emailRef = {
      value: 'email@wp.pl',
    } as HTMLInputElement
    const passwordRef = {
      value: 'aaa111',
    } as HTMLInputElement
    const passwordconfirmRef = {
      value: 'aaa111',
    } as HTMLInputElement
    expect(
      signupValidate({
        email: emailRef,
        password: passwordRef,
        passwordConfirm: passwordconfirmRef,
      })
    ).toBeTruthy()
  })
  test('Test too short passwords', () => {
    const emailRef = {
      value: 'email@wp.pl',
    } as HTMLInputElement
    const passwordRef = {
      value: 'aaa',
    } as HTMLInputElement
    const passwordconfirmRef = {
      value: 'aaa',
    } as HTMLInputElement
    expect(
      signupValidate({
        email: emailRef,
        password: passwordRef,
        passwordConfirm: passwordconfirmRef,
      })
    ).toBeFalsy()
  })
  test('Test two different passwords', () => {
    const emailRef = {
      value: 'email@wp.pl',
    } as HTMLInputElement
    const passwordRef = {
      value: 'aaa111',
    } as HTMLInputElement
    const passwordconfirmRef = {
      value: 'aaa222',
    } as HTMLInputElement
    expect(
      signupValidate({
        email: emailRef,
        password: passwordRef,
        passwordConfirm: passwordconfirmRef,
      })
    ).toBeFalsy()
  })
})
