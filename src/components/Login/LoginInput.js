import React from 'react';

const LoginInput = (props) => {
    let forgottenPassword;

    if (props.labeling.vars === 'password') {
        forgottenPassword = (
            <div className='text-sm'>
                <a href='#' className='font-semibold text-indigo-600 hover:text-indigo-500'>Forgot password?</a>
            </div>
        )
    }

    const setData = (event) => {
        props.setData(event.target.value);
    }

    return (
        <div>
            <div className='flex items-center justify-between'>
                <label
                    htmlFor={props.labeling.vars}
                    className='block text-sm font-medium leading-6 text-gray-900'
                >{props.labeling.label}</label>
                {forgottenPassword}
            </div>
            <div className='mt-2'>
                <input
                    id={props.labeling.vars}
                    name={props.labeling.vars}
                    type={props.labeling.vars}
                    autoComplete={props.labeling.vars}
                    onChange={setData}
                    required
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
            </div>
        </div>
    )

}

export default LoginInput;