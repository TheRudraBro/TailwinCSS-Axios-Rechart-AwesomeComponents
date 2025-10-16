import React from 'react';

const Link = ({route}) => {
    return (
       <li className='mr-10 hover:bg-accent p-2 rounded-lg'>
        <a href={route.path}>{route.name}</a>
       </li>
    );
};

export default Link;