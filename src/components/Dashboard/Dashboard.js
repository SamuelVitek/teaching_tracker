import React, {useState} from 'react';
import ClassList from '../Classes/ClassList';
import Navigation from '../Navigation/Navigation';
import StudentHeader from '../Student/StudentHeader';
import AddClass from "../Classes/AddClass";

const Dashboard = () => {
    const [addClassToggle, setAddClassToggle] = useState(false);

    //TODO dodělat podle toho co si uživatel vybere v záložce studenti
    const students = [
        { studentsName: 'Adam Halada' },
        { studentsName: 'Tereza Chladová' },
    ]

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

    const addClassToggleHandler = (event) => {
        setAddClassToggle(event);
    }

    return (
        <div className='flex flex-row h-screen w-screen divide-x'>
            {addClassToggle && <AddClass />}
            <Navigation />
            <div className='basis-3/12  pl-10'>
                <StudentHeader
                    name={students}
                    addClassHandler={addClassToggleHandler}
                />
                <ClassList classes={classItems} />
            </div>
            <div className='basis-3/6'>
                {/* TODO dodělat piecharty a listování probíraný látky */}
            </div>
        </div>
    )
}

export default Dashboard;