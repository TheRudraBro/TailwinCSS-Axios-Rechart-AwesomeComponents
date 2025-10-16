import React, { useState } from 'react';
import Link from './Link';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
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
    const [open, setOpen] = useState(false);

    const Links =  navigationData.map(route => <Link key={route.id} route={route}></Link>);
    return (
        <nav className='max-w-[1200px] mx-auto p-10 flex justify-between items-center border-2   mb-10'>
          <span className='flex gap-3' onClick={() => setOpen(!open)}>
            { open ?  
            <X className='md:hidden'></X> : 
            <Menu className='md:hidden'></Menu> 
            }
           <ul className='md:hidden'>
            {
              Links
            }
           </ul>
            <h3>My Navbar</h3>
          </span>
            <ul className='md:flex hidden mr-10'>
                {
               Links
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
            <button>Sign In</button>
        </nav>
    );
};

export default Navbar;