import React from 'react';

const Logo = (props) => {
    return (
        <img className={props.classes} src={require('../../photos/ttracker-logo.jpg')} alt='Teaching Tracker Logo' />
    );
}

export default Logo;