import React from 'react';
import ClassItem from './ClassItem';

const ClassList = (props) => {
    const classItems = [
        {
            subject: 'Math',
            date: new Date(2023, 4, 14, 18, 30),
            topic: 'Linear equations',
            duration: 1,
        },
        {
            subject: 'Physics',
            date: new Date(2023, 4, 11, 20, 0),
            topic: 'Hydraulics',
            duration: 1,
        }
    ]

    return (
        <div className='divide-y w-3/5'>
            <ClassItem classItem={classItems[0]}/>
            <ClassItem classItem={classItems[1]}/>
        </div>
    );
}

export default ClassList;