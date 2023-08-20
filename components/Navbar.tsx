"use client";

import {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {

  const [showDropdown, setShowDropdown] = useState(false);

  return (
  <>
    {/* Desktop Navigation */}
    <nav className="container mx-auto relative py-4 flex justify-between items-center">
      <Link href="/">
        <Image
        src="/shop-logo.png"
        alt="logo"
        width={192}
        height={51}
        className='object-contain'
        />
      </Link>
      <div className="lg:hidden">
        <button className="navbar-burger flex items-center text-blue-600" onClick={() => setShowDropdown(true)}>
          <Image
            src='/profile.png'
            alt='profile'
            width={50}
            height={50}
          />
        </button>
      </div>
      <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
        <li><Link className="text-sm text-gray-400 hover:text-gray-500" href="/">Home</Link>
        </li>
        <li><Link className="text-sm text-gray-400 hover:text-gray-500" href="/">About Us</Link>
        </li>
        <li><Link className="text-sm text-gray-400 hover:text-gray-500" href="/">Services</Link>
        </li>
        <li><Link className="text-sm text-gray-400 hover:text-gray-500" href="/">Pricing</Link>
        </li>
        <li><Link className="text-sm text-gray-400 hover:text-gray-500" href="/">Contact</Link>
        </li>
      </ul>

      {/* <div className="relative text-gray-600">
        <input type="search" name="serch" placeholder="Search" className="bg-gray-200 focus:bg-gray-100 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"/>
        <button type="submit" className="absolute right-0 top-0 mt-2.5 mr-2">
          <Image
            src='/search-icon.svg'
            alt='search-icon'
            width={20}
            height={20}
          />
        </button>
      </div> */}

      <div>
      <FontAwesomeIcon icon={faFacebook} size='lg' className='text-darkgreen'/>
      <FontAwesomeIcon icon={faUser} size='lg' className='text-darkgreen'/>
      <Link className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="/">Sign In</Link>
      </div>
    </nav>

    {/* Mobile navigation */}
    {showDropdown && 
    <div className="navbar-menu relative z-50">
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
        <div className="flex items-center mb-8">
          <Link className="mr-auto text-3xl font-bold leading-none" href="/">
            <Image
            src="/shop-logo.png"
            alt="logo"
            width={192}
            height={51}
            className='object-contain'
            />				
          </Link>
          <button className="navbar-close" onClick={() => {setShowDropdown(false)}}>
            <Image
              src="/close.svg"
              alt="close"
              width={25}
              height={25}
              className="cursor-pointer"
            />
          </button>
        </div>
        <div>
          <ul>
            <li className="mb-1">
              <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="/">Home</Link>
            </li>
            <li className="mb-1">
              <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="/">About Us</Link>
            </li>
            <li className="mb-1">
              <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="/">Services</Link>
            </li>
            <li className="mb-1">
              <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="/">Pricing</Link>
            </li>
            <li className="mb-1">
              <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="mt-auto">
          <div className="pt-6">
            <Link className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl" href="/">Sign in</Link>
            <Link className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-darkbrown hover:bg-brown  rounded-xl " href="/">Sign Up</Link>
          </div>
          <p className="my-4 text-xs text-center text-gray-400">
            <span>Copyright © 2023</span>
          </p>
        </div>
      </nav>
    </div>
    }
  </>
  );
};

export default Navbar;