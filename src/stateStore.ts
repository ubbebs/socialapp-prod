import { proxy } from 'valtio'

interface StateStore {
  userid: string | null
}

const stateStore = proxy<StateStore>({
  userid: null,
})

export { stateStore }
