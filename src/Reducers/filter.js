export const loginState = (state = 'Logged Off', action) => {
    switch (action.type) {
        case 'SET_LOGIN':
            return action.state
        default:
            return state
    }
}