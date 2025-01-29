import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {

    const [users, setUsers] = useState([]);

    const navigateTo = useNavigate();

    const handleLogout = async () => {

        try {

            const { data } = await axios.get("https://social-media-task-backend-code.vercel.app//api/v1/admin/logout", { withCredentials: true });


            alert(data.message);
    
            navigateTo("/");
            
        } catch (error) {

            alert(error);
            
        }

       





    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://social-media-task-backend-code.vercel.app//api/v1/user/all', { withCredentials: true });
            setUsers(response.data.users);
        };
        fetchData();
    }, []);


    // console.log(users);



    return (

        <>


            <div className="py-4 px-2 bg-slate-50 rounded-md">


                <div>
                    <Link onClick={handleLogout} className="inline-flex items-center text-white hover:text-gray-900 bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Logout Admin</Link>
                </div>




                <h1 className="text-center sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">All Users</h1>

                <section className="text-gray-600 body-font overflow-hidden py-2 ">

                    <div className="flex justify-between items-center  gap-2 px-2 py-4 ">
                        <div>
                            <h3 className="text-sm md:text-lg text-gray-900 font-medium ">User Name</h3>
                        </div>
                        <div >

                            <h3 className="text-sm md:text-lg text-gray-900 font-medium ">Social Media Handle</h3>


                        </div>
                        <div>
                            <h3 className="text-sm md:text-lg text-gray-900 font-medium ">View Details</h3>
                        </div>

                    </div>


                </section>

                {



                    users && users.length > 0 ? (
                        users.map(element => {
                            return (

                                <div key={element._id}>
                                    <section className="text-gray-600 body-font overflow-hidden py-2">

                                        <div className="flex  justify-between items-center  gap-2 px-2 py-4 bg-slate-200 rounded-md  ">
                                            <div>
                                                <h3 className="text-sm text-gray-900 ">{element.userName}</h3>
                                            </div>
                                            <div >
                                                <p className="text-sm text-gray-900">{element.socialMediaHandle}</p>

                                            </div>
                                            <div>
                                                <Link to={`/user/${element._id}`} className="text-sm bg-indigo-500 text-white px-4 py-2 rounded-sm">Click</Link>
                                            </div>

                                        </div>


                                    </section>
                                </div>


                            )
                        })

                    ) :
                        (<p>user not found !</p>)

                }



            </div>


        </>
    )
}

export default AdminDashboard
