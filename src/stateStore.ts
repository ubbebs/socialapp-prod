import { proxy } from 'valtio'

interface StateStore {
  userid: string | null
  userData: {
    displayName: string | undefined
    email: string
    photoURL: string
  } | null
  personalInfo: {
    description: string | undefined
    name: string | undefined
  } | null
  posts: {
    [key: number]: {
      description: string
      imageURL: string
    }[]
  } | null
}

const stateStore = proxy<StateStore>({
  userid: null,
  userData: null,
  personalInfo: null,
  posts: null,
})

export { stateStore }
