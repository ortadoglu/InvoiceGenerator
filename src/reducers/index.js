import { combineReducers } from 'redux'
import todos from './todos'
import products from './products'

const invoiceGeneratorApp = combineReducers({
  todos,
  products,

})

export default invoiceGeneratorApp