import React from "react";

const Dashboard = () => {
    return (
        <div className="flex flex-row h-screen w-screen divide-x">
            <aside className='basis-1/6 w-80 h-full'>
                <div className="w-full h-28">
                    <img
                        src={require('../../photos/ttracker-logo.jpg')}
                        alt="Logo"
                        className='ml-8 mt-8 w-3/6'
                    />
                </div>
                <div className="divide-y">
                    <ul className="ml-10 flex flex-col">
                        <li className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium w-min">Dashboard</li>
                        <li className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium w-min">Team</li>
                        <li className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium w-min">Projects</li>
                        <li className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium w-min">Calendar</li>
                        <li className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium w-min">Reports</li>
                    </ul>
                </div>
            </aside>
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
                <div className='divide-y w-3/5'>
                    <div>
                        <div className="flex items-center gap-x-4 text-xs pt-5">
                            <a href="/math"
                               className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Math</a>
                            <time className="text-gray-500">Mar 16, 2020</time>
                        </div>
                        <div className='pt-3 pb-5 px-3'>
                            <p>Linear equations</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-x-4 text-xs pt-5">
                            <a href="/math"
                               className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Math</a>
                            <time className="text-gray-500">Mar 16, 2020</time>
                        </div>
                        <div className='pt-3 pb-5 px-3'>
                            <p>Linear equations</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='basis-3/6'>

            </div>
        </div>
    )
}

export default Dashboard;