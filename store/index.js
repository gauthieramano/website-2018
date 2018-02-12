import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      navig: false
    },
    mutations: {
      navigationSwitch (state) {
        state.navig = !state.navig
      }
    }
  })
}

export default createStore