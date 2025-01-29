import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {

    const [adminName, setAdminName] = useState("");
    const [password, setPassword] = useState("");

    const navigateTo = useNavigate();


    const handleLogin = async(e) =>{

        e.preventDefault();


        try {

            const {data} = await axios.post("https://social-media-task-backend-code.vercel.app//api/v1/admin/login",{adminName,password},{withCredentials:true,headers:{"Content-Type":"application/json"}});

            alert(data.message);
            navigateTo("/admin/dashboard");
            
        } catch (error) {

            alert(error);
            
        }

       



       


    }


    return (
        <>

            <section className="text-gray-600 body-font relative">

          


                <div className="container px-5 py-24 mx-auto  bg-slate-100 ">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Admin Login</h1>

                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-col gap-2 items-center flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" value={adminName} onChange={(e)=>setAdminName(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>

                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-gray-600">Password</label>
                                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>




                            <div className="p-2 w-full">
                                <button onClick={handleLogin} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
                            </div>




                        </div>
                    </div>
                </div>
           
            </section>





        </>
    )
}

export default AdminLogin
