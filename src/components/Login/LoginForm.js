import React from 'react';
import LoginInput from './LoginInput';
import LoginButton from './LoginButton';

const LoginForm = () => {
    //TODO handle login through keycloak
    const inputs = [
        {
            label: 'Email address',
            vars: 'email'
        },
        {
            label: 'Password',
            vars: 'password'
        }
    ]

    return (
        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <form className='space-y-6' action='#' method='POST'>
                <LoginInput labeling={inputs[0]}/>
                <LoginInput labeling={inputs[1]}/>

                <LoginButton />
            </form>

            <p className='mt-10 text-center text-sm text-gray-500'>
                Not a member? <a href='#' className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>Start a 14 day free trial</a>
            </p>
        </div>
    )
}

export default LoginForm;