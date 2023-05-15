import React from 'react';

const NavLink = (props) => {
    return (
        <li className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium w-min">{props.itemName}</li>
    );
}

export default NavLink;