import { stressData, products, defaultUser } from '../Pages/CustomerManager/stressdata';
//import _ from lodas

const allPproducts = (state = products, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [
        ...state,
        {
          Id: action.Id,
          Name: action.Name,
          Description: action.Description,
          TaxGroup: {
            TaxValue: action.TaxValue,
            Id: action.TaxId,
          },
          Value: action.Value,
          ValueIncVAT: action.ValueIncVAT
        }
      ]
    // case 'REMOVE_PRODUCT':
    //   return _.reject(state, function (product) { return product.Id === action.Id; });
    case 'MODIFY_PRODUCT':
      return state.map(product =>
        (product.id === action.id)
          ? {
            Id: action.Id,
            Name: action.Name,
            Description: action.Description,
            TaxGroup: {
              TaxValue: action.TaxValue,
              Id: action.TaxId,
            },
            Value: action.Value,
            ValueIncVAT: action.ValueIncVAT
          }
          : product
      )
    default:
      return state
  }
}

export default allPproducts