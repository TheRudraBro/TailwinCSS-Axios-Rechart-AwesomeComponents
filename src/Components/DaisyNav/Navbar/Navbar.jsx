import React from 'react';
import Link from './Link';
const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Products",
    path: "/products",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
    return (
        <nav className='max-w-[1200px] mx-auto p-10'>
            <ul className='flex mr-10'>
                {
                navigationData.map(route => <Link key={route.id} route={route}  />)
            }
            </ul>
            {/* <ul className='flex mr-10'>
              {  navigationData.map(route =>  <li className='mr-10'>
                <a href={route.path}>{route.name}</a>
                </li>)

                }
            </ul> */}
            {/* <ul className='flex'>
                <li className='mr-10'><a href="#about">About</a></li>
                <li className='mr-10'><a href="#services">Services</a></li>
                <li className='mr-10'><a href="#home">Home</a></li>
                <li className='mr-10'><a href="#contact">Contact</a></li>
            </ul> */}
        </nav>
    );
};

export default Navbar;