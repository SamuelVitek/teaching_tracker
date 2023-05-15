import React from 'react';
import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
            <LoginHeader />
            <LoginForm />
        </div>
    );

}

export default Login;