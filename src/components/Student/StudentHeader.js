import React from 'react';
import AddButton from '../Accessories/AddButton';

const StudentHeader = (props) => {
    const addItemHandler = (event) => {
        props.addClassHandler(event);
    }

    return (
        <div className='flex mt-10 mb-5'>
            <h2 className='text-2xl text-gray-700 font-semibold'>{props.name[0].studentsName}</h2>
            <AddButton onAddItemHandler={addItemHandler}/>
        </div>
    );
};

export default StudentHeader;

