import React from 'react';

const SelectBoxItem = (props) => {
    const onSelectHandler = () => {
        props.onSelectHandler(props.subjects);
    }

    return (
        <li className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-gray-100"
            id="listbox-option-0" role="option"
            onClick={onSelectHandler}
        >
            <div className="flex items-center">
                <span className="font-normal block truncate">{props.subjects}</span>
            </div>
        </li>
    );
}

export default SelectBoxItem;