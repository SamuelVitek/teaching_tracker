import React from 'react';
import Logo from '../Logo/Logo';

const NavHeader = () => {
    const logoClasses = 'ml-8 mt-8 w-3/6';

    return (
        <div className='w-full h-28'>
            <Logo classes={logoClasses} />
        </div>
    );
}

export default NavHeader;