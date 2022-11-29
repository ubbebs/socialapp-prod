import { proxy } from 'valtio'

interface StateStore {
  userid: string | null
  searchKey: string | undefined
}

const stateStore = proxy<StateStore>({
  userid: null,
  searchKey: undefined,
})

export { stateStore }
