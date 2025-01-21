import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { Link, useParams } from "react-router-dom"

const SingleUser = () => {

    const [userName, setUserName] = useState("");
    const [socialMediaHandle, setSocialMediaHandle] = useState("");

    const [userImage, setUserImage] = useState("");

    const { id } = useParams();

    useEffect(() => {

        const getUser = async () => {

            await axios.get(`https://social-media-task-backend-code.onrender.com/api/v1/user/${id}`, {
                withCredentials: true,
            }).then((res) => {

                setUserName(res.data.user.userName);
                setSocialMediaHandle(res.data.user.socialMediaHandle);
                setUserImage(res.data.user.userImage && res.data.user.userImage.url);
            }).catch((error) => {

                // alert(error.response.data.message);
            })

        }

        getUser();

    }, [id])







    return (
        <>

            <section className="text-gray-600 body-font">


                <div className="container px-5 py-24 mx-auto">

                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{userName}</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-xl  text-gray-800">{socialMediaHandle}</p>

                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src={userImage ? userImage : userName} alt="User Image" />

                            </div>
                        </div>



                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Link to="/admin/dashboard" className="bg-indigo-500  text-white p-4 rounded-md">Return To DashBoard</Link>
                </div>

            </section>




        </>
    )
}

export default SingleUser
