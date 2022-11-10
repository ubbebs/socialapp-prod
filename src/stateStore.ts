import { proxy } from 'valtio'

interface StateStore {
  userData: any
}

const stateStore = proxy<StateStore>({
  userData: null,
})

export { stateStore }
