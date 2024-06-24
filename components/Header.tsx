'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="w-full bg-white sticky top-0 z-50 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-screen-xl mx-auto p-5 md:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link href="/" className='mr-4'>
                        <Image src="/logo.png" alt="logo" width={140} height={40} />
                    </Link>
                    <button
                        className="md:hidden focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
                            {menuOpen ? (
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                <nav
                    className={`flex-col mt-4 md:mt-0 md:flex md:flex-row md:items-center md:justify-end w-full md:w-auto ${menuOpen ? 'flex' : 'hidden'}`}
                >
                    <div className="relative mx-auto text-gray-600 lg:block">
                        <input
                            className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                            type="search"
                            name="search"
                            placeholder="Search"
                        />
                        <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                            <svg
                                className="text-gray-600 h-4 w-4 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 56.966 56.966"
                                width="512px"
                                height="512px"
                            >
                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </button>
                    </div>
                    <Link href="#" className='mb-4 sm:mb-0'>
                        <span className="px-4 py-2 text-sm text-gray-500 md:mt-0 hover:text-gray-900 focus:outline-none focus:shadow-outline">
                            About
                        </span>
                    </Link>
                    <Link href="#" className='mb-4 sm:mb-0'>
                        <span className="px-4 py-2 text-sm text-gray-500 md:mt-0 hover:text-gray-900 focus:outline-none focus:shadow-outline">
                            Contact
                        </span>
                    </Link>
                    <div
                        className="relative mb-4 sm:mb-0"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        onBlur={() => setDropdownOpen(false)}
                        tabIndex={0}
                    >
                        <button className="flex flex-row items-center w-full px-4 py-2 text-sm text-left text-gray-500 md:w-auto hover:text-gray-900 focus:outline-none focus:shadow-outline">
                            <span>Dropdown List</span>
                            <svg
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                className={`inline w-4 h-4 ml-1 transition-transform duration-200 transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        {dropdownOpen && (
                            <div className="absolute right-0 z-30 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
                                <div className="px-2 py-2 bg-white rounded-md shadow">
                                    <Link href="#">
                                        <span className="block px-4 py-2 text-sm text-gray-500 hover:text-gray-900 focus:outline-none focus:shadow-outline">
                                            Link #1
                                        </span>
                                    </Link>
                                    <Link href="#">
                                        <span className="block px-4 py-2 text-sm text-gray-500 hover:text-gray-900 focus:outline-none focus:shadow-outline">
                                            Link #2
                                        </span>
                                    </Link>
                                    <Link href="#">
                                        <span className="block px-4 py-2 text-sm text-gray-500 hover:text-gray-900 focus:outline-none focus:shadow-outline">
                                            Link #3
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="inline-flex items-center gap-3 lg:ml-auto">
                        <Link href="/sign-up">
                            <button className="px-6 py-3 text-sm font-medium text-white transition duration-500 ease-in-out transform bg-gray-700 rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                Sign up
                            </button>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
