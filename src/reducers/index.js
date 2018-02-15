import { combineReducers } from 'redux'
import customers from './customers'
import products from './products'
import { loginState } from './filter';

const invoiceGeneratorApp = combineReducers({
  customers,
  products,
  loginState

})

export default invoiceGeneratorApp