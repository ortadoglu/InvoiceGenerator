const customers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CUSTOMER':
      return [
        ...state,
        {
          Id: action.Id,
          Name: action.Name,
          Email: action.Email,
          Country: action.Country,
          Phone: action.Phone
        }
      ]

    default:
      return state
  }
}

export default customers