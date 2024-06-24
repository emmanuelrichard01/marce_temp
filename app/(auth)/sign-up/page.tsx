"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Page: React.FC = () => {
    // State to manage form inputs
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [country, setCountry] = useState('');

    // Handle form submission
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const userData = {
            firstName,
            lastName,
            userName,
            email,
            password,
            phoneNumber,
            country,
        };

        try {
            const response = await fetch('https://marce-server.onrender.com/v1/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                console.log('User created successfully!');
                // Handle successful user creation (e.g., redirect to login page or show success message)
            } else {
                console.error('Failed to create user');
                // Handle failure (e.g., show error message)
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle network or other errors
        }
    };

    return (
        <section className="">
            <div className="items-center px-5 py-12 lg:px-20">
                <div className="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
                    <div>
                        <Link className="text-gray-600 text-medium" href="/">
                            <Image src="/logo.png" alt='marcelogo' width={180} height={40} />
                        </Link>
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-600">Sign Up.</h2>
                    </div>
                    <div className="mt-8">
                        <div className="mt-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-600">First Name</label>
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required
                                            className="block w-full px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-600">Last Name</label>
                                        <input
                                            id="last-name"
                                            name="last-name"
                                            type="text"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            required
                                            className="block w-full px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="user-name" className="block text-sm font-medium text-gray-600">User Name</label>
                                    <input
                                        id="user-name"
                                        name="user-name"
                                        type="text"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        required
                                        className="block w-full px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                        placeholder="User Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-600"> Email address </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            autoComplete="email"
                                            required
                                            placeholder="Your Email"
                                            className="block w-full px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-600"> Password </label>
                                    <div className="mt-1">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            autoComplete="current-password"
                                            required
                                            placeholder="Your Password"
                                            className="block w-full px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phone-number" className="block text-sm font-medium text-gray-600">Phone Number</label>
                                    <input
                                        id="phone-number"
                                        name="phone-number"
                                        type="text"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        required
                                        className="block w-full px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                        placeholder="Phone Number"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="country" className="block text-sm font-medium text-gray-600">Country</label>
                                    <input
                                        id="country"
                                        name="country"
                                        type="text"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        required
                                        className="block w-full px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                        placeholder="Country"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="w-4 h-4 text-gray-600 border-gray-200 rounded focus:ring-gray-500"
                                        />
                                        <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-600"> Remember me </label>
                                    </div>
                                    <div className="text-sm">
                                        <a href="#" className="font-medium text-gray-600 hover:text-gray-500"> Forgot your password? </a>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-gray-700 rounded-xl hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                    >
                                        Create Account
                                    </button>
                                </div>
                            </form>
                            <div className="text-sm text-center my-8">
                                <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Already have an account? Log in
                                </Link>
                            </div>
                            <div className="relative my-4">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">Or continue with</span>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-gray-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                >
                                    <div className="flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            className="w-6 h-6"
                                            viewBox="0 0 48 48"
                                        >
                                            <defs>
                                                <path
                                                    id="a"
                                                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                                                />
                                            </defs>
                                            <clipPath id="b">
                                                <use xlinkHref="#a" overflow="visible"></use>
                                            </clipPath>
                                            <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"></path>
                                            <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"></path>
                                            <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"></path>
                                            <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"></path>
                                        </svg>
                                        <span className="ml-4"> Log in with Google</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
