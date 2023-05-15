import React from 'react';
import ButtonWithText from "../Accessories/ButtonWithText";

const AddClass = (props) => {


    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <ButtonWithText
                                key={1}
                                label={'Add Class'}
                                classes={'sm:ml-3'}
                            />
                            <ButtonWithText
                                key={2}
                                label={'Cancel'}
                                classes={'bg-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-gray-900 '}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AddClass;