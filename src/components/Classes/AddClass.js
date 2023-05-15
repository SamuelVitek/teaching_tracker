import React from 'react';
import Button from "../Accessories/Button";
import Input from "../Accessories/Input";

const AddClass = (props) => {
    const inputProperties = [
        {
            label: 'Email address',
            vars: 'email'
        },
        {
            label: 'Password',
            vars: 'password'
        }
    ]

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg p-5">
                        <h2 className='text-2xl ml-9 mb-5 text-gray-700 font-semibold'>Add new class</h2>
                        <div className='flex justify-evenly py-5'>
                            <Input labeling={inputProperties[0]} />
                            <Input labeling={inputProperties[0]} />
                        </div>
                        <div className='flex justify-evenly mb-9'>
                            <Input labeling={inputProperties[0]} />
                            <Input labeling={inputProperties[0]} />
                        </div>
                        <div className="bg-gray-50 px-4 sm:flex sm:flex-row-reverse sm:px-6 mr-6">
                            <Button
                                key={1}
                                label={'Add Class'}
                                classes={'text-white sm:ml-3'}
                            />
                            <Button
                                key={2}
                                label={'Cancel'}
                                classes={'bg-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-gray-900'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AddClass;