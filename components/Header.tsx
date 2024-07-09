'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import useDebounce from '@/hooks/useDebounce';

const Categories = [
    { name: 'Phones', href: '/category/phones' },
    { name: 'Groceries', href: '/category/groceries' },
    { name: 'Wears', href: '/category/wears' },
];

const Header: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 300);
    const router = useRouter();

    const handleSearch = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (debouncedSearchTerm.trim()) {
            router.push(`/search?q=${encodeURIComponent(debouncedSearchTerm.trim())}`);
        }
    }, [debouncedSearchTerm, router]);

    return (
        <header className="w-full bg-white sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-row-reverse xl:flex-row sm:flex-row md:flex-row lg:flex-row justify-between items-center py-6 pl-0 pr-5 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link href="/">
                            <Image src="/logo.png" alt="Marce-Logo" width={140} height={40} priority />
                        </Link>
                    </div>
                    <div className="mr-3 -my-2 md:hidden">
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <PopoverButton className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                                        <span className="sr-only">Open menu</span>
                                        {open ? (
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                        )}
                                    </PopoverButton>
                                    <Transition
                                        show={open}
                                        enter="duration-200 ease-out"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="duration-100 ease-in"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <PopoverPanel
                                            focus
                                            className="absolute top-0 inset-x-0 p-2 w-[60vw] transition transform origin-top md:hidden"
                                        >
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                                <div className="pt-5 pb-6 px-5">
                                                    <div className="flex items-center justify-between">
                                                        {/* <div>
                                                            <Image src="/logo.png" alt="Marce-Logo" width={140} height={40} />
                                                        </div> */}
                                                        <div className="-mr-2">
                                                            <PopoverButton className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                                                                <span className="sr-only">Close menu</span>
                                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                            </PopoverButton>
                                                        </div>
                                                    </div>
                                                    <div className="mt-6">
                                                        <nav className="grid gap-y-8">
                                                            {Categories.map((item) => (
                                                                <Link
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                                                >
                                                                    <span className="ml-3 text-base font-medium text-gray-900">
                                                                        {item.name}
                                                                    </span>
                                                                </Link>
                                                            ))}
                                                        </nav>
                                                    </div>
                                                </div>
                                                <div className="py-6 px-5 space-y-6 mr-4 ml-4">
                                                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                                        <Link href="/about" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                                            About
                                                        </Link>
                                                        <Link href="/contact" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                                            Contact
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <Link
                                                            href="/sign-up"
                                                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-700 hover:bg-gray-900"
                                                        >
                                                            Sign up
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </PopoverPanel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                    </div>
                    <nav className="hidden md:flex space-x-10 items-center">
                        <form onSubmit={handleSearch} className="relative flex-grow max-w-md">
                            <input
                                type="search"
                                placeholder="Search..."
                                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        </form>
                        <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            About
                        </Link>
                        <Link href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Contact
                        </Link>
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <PopoverButton
                                        className={`${open ? 'text-gray-900' : 'text-gray-500'} group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600`}
                                    >
                                        <span>Categories</span>
                                        <svg
                                            className={`${open ? 'text-gray-600' : 'text-gray-400'} ml-2 h-5 w-5 group-hover:text-gray-500`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </PopoverButton>

                                    <Transition
                                        show={open}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <PopoverPanel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {Categories.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                        >
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </PopoverPanel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                    </nav>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <Link
                            href="/sign-up"
                            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-700 hover:bg-gray-900"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;