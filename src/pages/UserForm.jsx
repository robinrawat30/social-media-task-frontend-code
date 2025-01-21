import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const UserForm = () => {
    const [userName, setUserName] = useState('');
    const [socialMediaHandle, setSocialMediaHandle] = useState('');
    const [userImage, setUserImage] = useState('');

    const handleUserImage = (e) => {

        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setUserImage(file);

        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('userName', userName);
        formData.append('socialMediaHandle', socialMediaHandle);
        formData.append('userImage', userImage);


        try {

            const { data } = await axios.post('https://social-media-task-backend-code.onrender.com/api/v1/user/submit', formData, {
                withCredentials: true,
                headers: { 'Content-Type': 'multipart/form-data' },
    
            });
            alert(data.message);
            
        } catch (error) {

            alert(error);
            
        }

       
    };
    return (
        <>



            <section className="text-gray-600 body-font relative">
                <form onSubmit={handleSubmit}>



                    <div className="container px-5 py-24 mx-auto  bg-slate-100 ">

                        <div className="flex justify-end items-center">
                            <Link to="/admin/login" className="inline-flex items-center text-white hover:text-gray-900 bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">

                                Login Admin

                            </Link>
                        </div>
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Please Submit Form</h1>

                        </div>

                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-col gap-2 items-center flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Name</label>
                                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>

                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Social Media Handle</label>
                                        <input type="text" value={socialMediaHandle} onChange={(e) => setSocialMediaHandle(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>

                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Upload Image</label>
                                        <input type="file" onChange={handleUserImage} className="file-input file-input-bordered text-sm   w-full max-w-xs" />
                                    </div>
                                </div>



                                <div className="p-2 w-full">
                                    <button type='submit' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-200 hover:text-gray-900 rounded text-lg">Submit</button>
                                </div>




                            </div>
                        </div>
                    </div>
                </form>
            </section>



        </>
    )
}

export default UserForm
