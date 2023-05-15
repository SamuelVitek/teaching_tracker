import React from 'react';
import ClassItem from './ClassItem';

const ClassList = (props) => {
    return (
        <div className='divide-y w-3/5'>
            <ClassItem classItem={props.classes[0]}/>
            <ClassItem classItem={props.classes[1]}/>
        </div>
    );
}

export default ClassList;