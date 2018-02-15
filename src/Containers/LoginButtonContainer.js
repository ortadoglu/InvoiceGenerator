import { connect } from 'react-redux';
import { setLogin } from '../Actions';
import LoginButton from '../Pages/Components/Menus/LoginButton';

const mapStateToProps = state => ({
    loggedIn: state.loginState,
});

const mapDispatchToProps = dispatch => {
    return {
        onLoginAnswer: answer => { dispatch(setLogin(answer)) },
    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginButton)

export default LoginContainer

