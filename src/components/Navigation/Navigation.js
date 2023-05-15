import React from 'react';
import NavLink from './NavLink';
import NavHeader from './NavHeader';

const Navigation = (props) => {
    const menuItems = [
        'Dashboard',
        'Students',
        'Subjects',
        'Calendar',
        'Reports',
    ]

    return (
        <aside className='basis-1/6 w-80 h-full'>
            <NavHeader />
            <div className='divide-y'>
                <ul className='ml-10 flex flex-col'>
                    {menuItems.map(item =>
                        <NavLink itemName={item}/>
                    )}
                </ul>
            </div>
        </aside>
    );
}

export default Navigation;