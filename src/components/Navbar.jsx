import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {



    
    return (
        <>


            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">

                        <span className="ml-3 text-xl">Social-Media-Task</span>
                    </Link>

                </div>
            </header>
           
        </>
    )
}

export default Navbar
