import { useState } from 'react'
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';

export default function Auth({ onCloseModal, setTitleModal }) {
    const [showLogin, setShowLogin] = useState(true);

    const showLoginForm = () => {
        setTitleModal('Sign In');
        setShowLogin(true);
    }

    const showRegisterForm = () => {
        setTitleModal('Sign Up');
        setShowLogin(false);
    }

    return showLogin ? <LoginForm showRegisterForm={showRegisterForm} /> : <RegisterForm showLoginForm={showLoginForm} />;
}
