'use client'
import Link from 'next/link';
import { useState } from 'react';

const SignIn = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <main className='container mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-center my-8 min-h-[60vh]'>
      <div className="w-2/3 sm:w-3/5 md:w-1/2 lg:w-1/3 bg-white p-6 shadow-md flex flex-col items-center border border-darkbrown px-2 py-4 rounded-xl">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-darkbrown italic font-bold">
          Sign In
        </h1>

        <form
          onSubmit={handleSubmit}
          className='w-full px-8 my-2 text-xs md:text-base'
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded border bg-gray-200 focus:outline-none focus:border-gray-500"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 rounded border bg-gray-200 focus:outline-none focus:border-gray-500"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-lightbrown hover:bg-darkbrown text-white font-bold font-lato py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
          >
            Sign In
          </button>
        </form>

          <p className='text-xs md:text-base'>
            Don't have an account? 
            <Link href='/' className='text-lightbrown font-semibold hover:text-darkbrown'> Sign Up</Link>
          </p>
          <Link href='/' className='hover:text-lightbrown text-darkbrown font-medium text-xs md:text-base'>
            Forgot Password?
          </Link>
      </div>
    </main>
  )
}

export default SignIn