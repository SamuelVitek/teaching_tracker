import React, {useState} from 'react';
import Button from "../Accessories/Button";
import Input from "../Accessories/Input";
import SelectBox from "../Accessories/SelectBox";
import DatePicker from "../Accessories/DatePicker";

const AddClass = (props) => {
    const [hours, setHours] = useState();
    const [date, setDate] = useState();
    const [topic, setTopic] = useState();
    const [subject, setSubject] = useState();

    const data = []

    const inputProperties = [
        {
            label: 'Class topic',
            vars: 'text'
        },
        {
            label: 'Hours spent',
            vars: 'number'
        },
        {
            label: 'Date of class'
        }
    ]

    const hoursSpentHandler = (event) => {
        setHours(event);
    }

    const dateHandler = (event) => {
        setDate(event);
    }

    const topicHandler = (event) => {
        setTopic(event);
    }

    const subjectHandler = (event) => {
        setSubject(event);
    }

    const fillData = () => {
        data.push({
            date: date.startDate,
            hours: hours,
            topic: topic,
            subject: subject,
        })

        setToggleHandler();
    }

    const setToggleHandler = () => {
        props.addClassHandler(false);
    }

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={setToggleHandler}></div>

            <div className="fixed inset-0 z-1 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
                    <div className="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg p-5">
                        <h2 className='text-2xl ml-9 mb-5 text-gray-700 font-semibold'>Add new class</h2>
                        <div className='flex justify-evenly py-5'>
                            <DatePicker
                                setData={dateHandler}
                                date={date}
                                labeling={inputProperties[2]} />
                            <Input
                                setData={hoursSpentHandler}
                                labeling={inputProperties[1]}
                            />
                        </div>
                        <div className='flex justify-evenly mb-9'>
                            <Input
                                setData={topicHandler}
                                labeling={inputProperties[0]} />
                            <SelectBox
                                setData={subjectHandler}
                                subjects={props.subjects}/>
                        </div>
                        <div className="px-4 sm:flex sm:flex-row-reverse sm:px-6 mr-6">
                            <Button
                                key={1}
                                label={'Add Class'}
                                onClick={fillData}
                                classes={'text-white sm:ml-3 hover:bg-indigo-500'}
                            />
                            <Button
                                key={2}
                                label={'Cancel'}
                                onClick={setToggleHandler}
                                classes={'bg-white ring-1 ring-inset ring-gray-300 hover:bg-gray-100 text-gray-900'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AddClass;