import React, {useState} from 'react';
import Input from '../Accessories/Input';
import Button from '../Accessories/Button';
//import { Redirect } from 'react-router-dom'

const LoginForm = () => {
    const [logged, setLogged] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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

    const usernameHandler = (username) => {
        setUsername(username);
    }

    const passwordHandler = (password) => {
        setPassword(password);
    }   

    const inputLoginHandler = () => {
        if (username === 'admin@admin.cz' && password === 'admin') {
            setLogged(true);
            console.log(logged);
        }
    }

    return (
        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <form className='space-y-6' onSubmit={inputLoginHandler}>
                <Input labeling={inputs[0]} setData={usernameHandler}/>
                <Input labeling={inputs[1]} setData={passwordHandler}/>

                <Button
                    label={'Cancel'}
                    classes={'text-white'}
                />
            </form>

            {/*<p className='mt-10 text-center text-sm text-gray-500'>*/}
            {/*    Not a member? <a href='#' className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>Start a 14 day free trial</a>*/}
            {/*</p>*/}
        </div>
    )
}

export default LoginForm;