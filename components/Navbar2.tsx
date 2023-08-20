"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { useState } from "react";
import { navLinks } from "@/constants";
// import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  // const { data: session } = useSession();
  
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();

  return (
    <>
    <nav className='container mx-auto flex justify-between items-center my-2 pt-3 text-md text-lightbrown layout'>
      <Link href='/'>
        <Image
          src="/shop-logo.png"
          alt="logo"
          width={192}
          height={51}
          className='object-contain'
        />				
      </Link>
 
      {/* nav links */}
      <div className="hidden lg:flex lg:justify-between lg:items-center w-1/4">
        {navLinks.map(({name, href})=> {
          const isActive = pathname === href;
          return (
          <Link href={href} className={isActive ? 'text-darkbrown' : 'hover:text-darkbrown'} key={href+name}>
            {name}
          </Link>)
        })}
        {/* <Link href='/' className='hover:text-darkbrown'>Link 1</Link>
        <Link href='/' className='hover:text-darkbrown'>Link 2</Link>
        <Link href='/' className='hover:text-darkbrown'>Link 3</Link>
        <Link href='/' className='hover:text-darkbrown'>Link 4</Link> */}
      </div>
      
      {/* cart and login/signup */}
      <div className='flex items-center justify-between gap-6'>
        <Link href='/shopping-cart' className="hover:text-darkbrown"><FontAwesomeIcon icon={faShoppingCart} size='lg'/> Cart</Link>
        <button className='hidden lg:block px-4 py-3 text-md text-center text-white bg-lightbrown hover:bg-darkbrown rounded-full font-lato'><FontAwesomeIcon icon={faUser} size='lg'/> Sign In</button>
        <button className='block lg:hidden ' onClick={() => setShowDropdown(true)}><FontAwesomeIcon icon={faBars} size='lg'/></button>
      </div>


    </nav>

    {/* Mobile navigation */}
    {showDropdown && 
    <div className="lg:hidden relative z-50">
      <div className="fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
        <div className="flex items-center mb-8">
          <Link className="mr-auto" href="/">
            <Image
            src="/shop-logo.png"
            alt="logo"
            width={192}
            height={51}
            className='object-contain'
            />				
          </Link>
          <button onClick={() => {setShowDropdown(false)}}>
            <FontAwesomeIcon icon={faXmark} size="xl"/>
          </button>
        </div>
        <div>
          <ul className="text-sm font-semibold text-lightbrown ">
            <li className="mb-1">
              <Link className="block p-4 rounded hover:bg-gray-50 hover:text-darkbrown" href="/">Home</Link>
            </li>
            <li className="mb-1">
              <Link className="block p-4 rounded hover:bg-gray-50 hover:text-darkbrown" href="/">About Us</Link>
            </li>
            <li className="mb-1">
              <Link className="block p-4 rounded hover:bg-gray-50 hover:text-darkbrown" href="/">Services</Link>
            </li>
            <li className="mb-1">
              <Link className="block p-4 rounded hover:bg-gray-50 hover:text-darkbrown" href="/">Pricing</Link>
            </li>
            <li className="mb-1">
              <Link className="block p-4 rounded hover:bg-gray-50 hover:text-darkbrown" href="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="mt-auto">
          <div className="pt-6">
            <Link className="block px-4 py-3 mb-2 leading-loose text-md text-center text-white font-semibold bg-lightbrown hover:bg-darkbrown  rounded-xl " href="/">Sign In</Link>
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