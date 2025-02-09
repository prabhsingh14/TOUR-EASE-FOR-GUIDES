import React, { useState } from 'react';
import Footer from '../layout/Footer';
import { IoBag, IoPerson, IoMail, IoCall, IoHome, IoCloudUpload, IoCalendar, IoMaleFemale } from "react-icons/io5";

const Guide = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        address: '',
        idProof: null,
    });

    const [fileName, setFileName] = useState('');
    const [fileError, setFileError] = useState('');

    const isFormComplete = Object.values(formData).every(value => value !== '' && value !== null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'];
            if (validTypes.includes(file.type)) {
                setFormData({ ...formData, idProof: file });
                setFileName(file.name);
                setFileError('');
            } else {
                setFileError('Invalid file type. Only PNG, JPG, JPEG, and PDF are allowed.');
                setFileName('');
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#FF6F0026] flex flex-col">
            <div className="flex-grow flex items-center justify-center">
                <div className="bg-white p-8 shadow-lg rounded-2xl max-w-2xl w-full mx-auto mt-8">
                    {/* Header */}
                    <div className="text-center">
                        <IoBag className="text-6xl text-[#FF6F00] mx-auto" />
                        <h2 className="text-[#1976D2] text-3xl font-bold mt-5">Register as a Guide</h2>
                        <p className="text-gray-600 mt-3 leading-relaxed">
                            Are you passionate about sharing the stories, culture, and hidden gems of your destination? 
                            Join us and turn your knowledge into unforgettable experiences for travelers from around the world.
                        </p>
                    </div>

                    {/* Personal Details Section */}
                    <h3 className="text-xl font-semibold mt-6 text-gray-700">Personal Details</h3>
                    <div className="mt-4 space-y-4">
                        <div className="flex flex-row items-center gap-4">
                            <div className="flex items-center border rounded-lg px-4 py-3 flex-1 bg-white">
                                <IoPerson className="text-gray-500 mr-3" />
                                <input 
                                    type="text" 
                                    name="fullName" 
                                    placeholder="Full Name" 
                                    className="w-full outline-none bg-transparent text-gray-700"
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className="flex items-center border rounded-lg px-4 py-3 flex-1 bg-white">
                                <IoMail className="text-gray-500 mr-3" />
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    className="w-full outline-none bg-transparent text-gray-700"
                                    onChange={handleChange} 
                                />
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <div className="flex items-center border rounded-lg px-4 py-3 flex-1 bg-white">
                                <IoCall className="text-gray-500 mr-3" />
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    placeholder="Phone Number" 
                                    className="w-full outline-none bg-transparent text-gray-700"
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className="flex items-center border rounded-lg px-4 py-3 flex-1 bg-white">
                                <IoCalendar className="text-gray-500 mr-3" />
                                <input 
                                    type="date" 
                                    name="dob" 
                                    className="w-full outline-none bg-transparent text-gray-700"
                                    onChange={handleChange} 
                                />
                            </div>
                        </div>
                        <div className="flex items-center border rounded-lg px-4 py-3 bg-white">
                            <IoMaleFemale className="text-gray-500 mr-3" />
                            <select 
                                name="gender" 
                                className="w-full outline-none bg-transparent text-gray-700" 
                                onChange={handleChange}
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    {/* Address & ID Proof Section */}
                    <h3 className="text-xl font-semibold mt-6 text-gray-700">Address & ID Proof</h3>
                    <div className="mt-4 flex flex-row items-center gap-4">
                        <div className="flex items-center border rounded-lg px-4 py-3 flex-1 bg-white">
                            <IoHome className="text-gray-500 mr-3" />
                            <input 
                                type="text" 
                                name="address" 
                                placeholder="Enter your address" 
                                className="w-full outline-none bg-transparent text-gray-700"
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="flex items-center border rounded-lg px-4 py-3 flex-1 relative bg-white">
                            <IoCloudUpload className="text-gray-500 mr-3" />
                            <label className="w-full cursor-pointer text-gray-500">
                                <span className="text-gray-700">{fileName || "Upload ID Proof"}</span>
                                <input type="file" className="hidden" onChange={handleFileChange} />
                            </label>
                        </div>
                    </div>
                    {fileError && <p className="text-red-500 text-sm mt-2">{fileError}</p>}

                    {/* Submit Button */}
                    <button
                        className={`w-full px-6 py-3 rounded-lg font-semibold mt-6 transition ${
                            isFormComplete ? 'bg-[#FF6F00] text-white hover:bg-[#e65a00]' : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                        }`}
                        disabled={!isFormComplete}
                    >
                        Register
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Guide;