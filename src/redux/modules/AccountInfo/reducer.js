// import { increase } from './action'
import { combineReducers } from 'redux'

const initialState = {
  // number: 0,
  repos: []
}

const account = (state = initialState, action = {}) => {
  switch (action.type) {
    // case 'INCREASE':
    //   return {
    //     ...state,
    //     number: state.number + action.payload
    //   }
    case 'TEST_JA':
      return {
        ...state,
        repos: action.data
      }
    // case 'REPOS_SUCCESS':
    //   return {
    //     ...state,
    //     repos: action.repos
    //   }
    default: return state
  }
}

const allReducer = combineReducers({
  account
})

export default allReducer