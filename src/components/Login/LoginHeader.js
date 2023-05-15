import React from 'react';
import Logo from '../Logo/Logo';

const LoginHeader = () => {
    const logoClasses = 'mx-auto h-20 w-auto'

    return (
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            <Logo classes={logoClasses}/>
            <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>Sign in to your teaching account.</h2>
        </div>
    );
};

export default LoginHeader;