import React from 'react';
import ButtonWithPlus from '../Accessories/ButtonWithPlus';

const StudentHeader = (props) => {
    return (
        <div className='flex mt-10 mb-5'>
            <h2 className='text-2xl text-gray-700 font-semibold'>Adam Halada</h2>
            <ButtonWithPlus />
        </div>
    );
}

export default StudentHeader

