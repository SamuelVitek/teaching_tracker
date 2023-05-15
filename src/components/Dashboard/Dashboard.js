import React from 'react';
import ClassList from '../Classes/ClassList';
import Navigation from '../Navigation/Navigation';
import StudentHeader from '../Student/StudentHeader';

const Dashboard = () => {
    //TODO dodělat podle toho co si uživatel vybere v záložce studentik
    const students = [
        { name: 'Adam Halada' },
        { name: 'Tereza Chladová' }
    ]

    return (
        <div className='flex flex-row h-screen w-screen divide-x'>
            <Navigation />
            <div className='basis-3/12  pl-10'>
                <StudentHeader studentName={students[0]} />
                <ClassList />
            </div>
            <div className='basis-3/6'>
                {/* TODO dodělat piecharty a listování probíraný látky */}
            </div>
        </div>
    )
}

export default Dashboard;