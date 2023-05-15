import React from 'react';
import ButtonWithPlus from '../Accessories/ButtonWithPlus';

const StudentHeader = (props) => {
    const addItemHandler = (event) => {
        props.addClassHandler(event);
    }

    return (
        <div className='flex mt-10 mb-5'>
            <h2 className='text-2xl text-gray-700 font-semibold'>{props.name[0].studentsName}</h2>
            <ButtonWithPlus addItemHandler={addItemHandler}/>
        </div>
    );
};

export default StudentHeader;

