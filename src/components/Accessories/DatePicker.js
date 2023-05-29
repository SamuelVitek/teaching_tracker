import React from 'react';
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = (props) => {
    const onDateChangeHandler = (event) => {
        props.setData(event);
    }

    return (
        <div>
            <div className='flex items-center justify-between'>
                <label
                    htmlFor={props.labeling.label}
                    className='block text-sm font-medium leading-6 text-gray-900'
                >{props.labeling.label}</label>
            </div>
            {/*TODO fix input positioning*/}
            <Datepicker
                inputClassName='mt-2 pt-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                asSingle={true}
                onChange={onDateChangeHandler}
                value={props.date}
                useRange={false}
            />
        </div>
);
}

export default DatePicker;