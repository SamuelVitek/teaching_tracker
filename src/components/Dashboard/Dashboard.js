import React from "react";
import ClassList from "../Classes/ClassList";
import Navigation from "../Navigation/Navigation";

const Dashboard = () => {
    return (
        <div className="flex flex-row h-screen w-screen divide-x">
            <Navigation />
            <div className='basis-3/12  pl-10'>
                <div className='flex mt-10 mb-5'>
                    <h2 className='text-2xl text-gray-700 font-semibold'>Adam Halada</h2>
                    <button type="button"
                            className="ml-10 rounded-full bg-indigo-600 p-1.5 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path
                                d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"/>
                        </svg>
                    </button>
                </div>
                <ClassList />
            </div>
            <div className='basis-3/6'>
                {/* TODO dodělat piecharty a listování probíraný látky */}
            </div>
        </div>
    )
}

export default Dashboard;