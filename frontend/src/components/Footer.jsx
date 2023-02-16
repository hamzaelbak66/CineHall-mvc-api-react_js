import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-white mt-10">
                <div className="sm:flex sm:items-center sm:justify-between">
                    
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-black sm:mb-0 dark:text-black">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-black lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-black">© 3 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                </span>
            </footer>
        </div>
    )
}

export default Footer
