import {createStore} from 'redux'
import allReducer from  './modules/AccountInfo/reducer'

const store = createStore(allReducer)
console.log('storeee', store.getState())
// console.log('createStostorere(allReducer)', store.getState())
export default store