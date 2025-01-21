import React from 'react'
import Routers from '../routers/Routers'
import Navbar from '../components/Navbar'

const Layout = () => {
    return (
        <>

            <div className=" w-[85%] m-auto ">


                <Navbar />
                <Routers />



            </div>


        </>
    )
}

export default Layout
