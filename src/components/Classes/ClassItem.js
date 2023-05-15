import React from 'react';

const ClassItem = (props) => {

    return (
        <div className='pt-5'>
            <div className="flex items-center gap-x-4 text-xs">
                <a href={'/' + props.classItem.subject.toLowerCase()}
                   className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Math</a>
                <time className="text-gray-500">{props.classItem.date.toLocaleString('en-GB', { timeZone: 'CET' })}</time>
            </div>
            <div className='pt-3 pb-5 px-3'>
                <p>{props.classItem.topic}</p>
                <p className='text-xs'>{'Duration: ' + props.classItem.duration + 'h'}</p>
                <p className='text-xs'>{'Earned: ' + props.classItem.duration * 200 + 'CZK'}</p>
            </div>
        </div>
    );
}

export default ClassItem;