import React from "react";

const Tasks: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex">
        <div className="flex-none md:flex-1 flex flex-col justify-center py-12 px-28 lg:px-18 md:px-12 sm:px-8">
            <div className="mx-auto w-full max-w-sm">
            <div>
                <h2 className="mt-6 text-3xl leading-9 font-extrabold text-main">
                Login to your account
                </h2>
            </div>

            <div className="mt-8">

                <div className="mt-6">
                <form action="#" method="POST">
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
                        Email address
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                        <input id="email" type="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    </div>
                    </div>

                    <div className="mt-6">
                    <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
                        Password
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                        <input id="password" type="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center">
                        <input id="remember_me" type="checkbox" className="form-checkbox h-4 w-4 text-main transition duration-150 ease-in-out" />
                        <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900">
                        Remember me
                        </label>
                    </div>

                    <div className="text-sm leading-5">
                        <a href="#" className="font-medium text-main hover:text-third focus:outline-none focus:underline transition ease-in-out duration-150">
                        Forgot your password?
                        </a>
                    </div>
                    </div>

                    <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-main hover:bg-third focus:outline-none focus:border-main focus:shadow-outline-indigo active:bg-main transition duration-150 ease-in-out">
                            Login
                        </button>
                    </span>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        <div className="md:hidden block relative w-0 flex-1">
            <img className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" alt="" />
        </div>
    </div>
  );
};

export default Tasks;
