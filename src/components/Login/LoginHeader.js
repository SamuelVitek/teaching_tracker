import React from 'react';

const LoginHeader = () => {
    return (
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            <img className='mx-auto h-20 w-auto' src={require('../../photos/ttracker-logo.jpg')} alt='Teaching Tracker Logo' />
            <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>Sign in to your teaching account.</h2>
        </div>
    );
};

export default LoginHeader;