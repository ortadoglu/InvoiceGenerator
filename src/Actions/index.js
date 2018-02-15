export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const setLogin = state => {
  return {
      type: 'SET_LOGIN',
      state
  }
}