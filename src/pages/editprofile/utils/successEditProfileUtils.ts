export type SuccessMutationType = {
  okAvatar: boolean
  okDescription: boolean
  okDisplayName: boolean
  errorAvatar: string
  errorDescription: string
  errorDisplayName: string
  displayNameValue: string
}

export const defaultSuccessMutation = {
  okAvatar: false,
  okDescription: false,
  okDisplayName: false,
  errorAvatar: '',
  errorDescription: '',
  errorDisplayName: '',
  displayNameValue: '',
}
