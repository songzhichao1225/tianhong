import { combineReducers, createStore } from 'redux'
import * as model from './model'

console.log(model)
const reducers = combineReducers({
  ...model
});
console.log(reducers)
const store = createStore(reducers)
console.log(store)
export default store;