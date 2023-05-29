import React, {useState} from 'react';
import ClassList from '../Classes/ClassList';
import Navigation from '../Navigation/Navigation';
import StudentHeader from '../Student/StudentHeader';
import AddClass from "../Classes/AddClass";

const Dashboard = () => {
    const [addClassToggle, setAddClassToggle] = useState(false);

    //TODO finish this up based on (yet non-existing) dashboard with all students
    //TODO plus pulling the data from MongoDB (waiting till I get there with the course)
    const students = [
        { studentsName: 'Adam Halada' },
        { studentsName: 'Tereza Chladová' },
    ]

    const subjects = [
        { name: 'Maths' },
        { name: 'Physics' },
        { name: 'English' },
        { name: 'Information technology' },
        { name: 'Databases' },
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
        console.log('Did something happen?')
        setAddClassToggle(event);
    }

    return (
        <div className='flex flex-row h-screen w-screen divide-x'>
            {addClassToggle && <AddClass addClassHandler={addClassToggleHandler} subjects={subjects} />}
            <Navigation />
            <div className='basis-3/12  pl-10'>
                <StudentHeader
                    name={students}
                    addClassHandler={addClassToggleHandler}
                />
                <ClassList classes={classItems} />
            </div>
            <div className='basis-3/6'>
                {/* TODO piecharts with data */}
            </div>
        </div>
    )
}

export default Dashboard;