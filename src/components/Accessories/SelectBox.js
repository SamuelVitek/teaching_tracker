import React, {useState} from 'react';
import SelectBoxItem from "./SelectBoxItem";

const SelectBox = (props) => {
    const [isActive, setIsActive] = useState('block');
    const [selectedSubject, setSelectedSubject] = useState(props.subjects[0].name);

    const onClickHandler = () => {
        if (isActive === 'block') {
            setIsActive('none');
        } else {
            setIsActive('block');
        }
    }

    const onSelectHandler = (event) => {
        setSelectedSubject(event);
    }

    const restOfSubjects = props.subjects.filter(subject => {
        return subject.name !== selectedSubject
    });

    return (
        <div onClick={onClickHandler}>
            <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">Choose subject</label>
            <div className="relative mt-2">
                <button type="button"
                        className="relative cursor-default rounded-md w-48 bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                    <span className="flex items-center">
                        {selectedSubject}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd"
                                d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                clipRule="evenodd"/>
                        </svg>
                    </span>
                </button>

                <ul className="relative z-10 mt-1 w-48 max-h-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                    tabIndex="-1" role="listbox" aria-labelledby="listbox-label"
                    aria-activedescendant="listbox-option-3"
                    style={{display: isActive}}>

                    {restOfSubjects.map((subject) => (
                        <SelectBoxItem
                            subjects={subject.name}
                            onSelectHandler={onSelectHandler}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SelectBox;