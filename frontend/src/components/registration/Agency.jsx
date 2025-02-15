import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Footer from "../layout/Footer";
import { IoBag, IoPerson, IoMail, IoCall, IoHome, IoCloudUpload, IoMaleFemale, IoCalendar, IoIdCard } from "react-icons/io5";
import { FaLocationDot, FaBuilding } from "react-icons/fa6";

const Agency = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        dob: "",
        email: "",
        gender: "",
        phone: "",
        address: "",
        firmName: "",
        headOffice: "",
        taxId: "",
        businessRegNo: "",
        govId: null,
        certificateIncorporation: null,
        tradeLicense: null,
    });

    const [fileName, setFileName] = useState("");
    const [fileError, setFileError] = useState("");
    const [isCalendarOpen, setCalendarOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const calendarRef = useRef(null);
    const dobInputRef = useRef(null);

    const isFormComplete = Object.values(formData).every(value => value !== "" && value !== null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const { name } = e.target; // Get the input field name
        const file = e.target.files[0];
    
        if (file) {
            const validTypes = ["image/png", "image/jpeg", "image/jpg", "application/pdf"];
            if (validTypes.includes(file.type)) {
                setFormData(prevState => ({
                    ...prevState,
                    [name]: file, // Update only the specific file field
                }));
                setFileError("");
            } else {
                setFileError("Invalid file type. Only PNG, JPG, JPEG, and PDF are allowed.");
            }
        }
    };    
    
    const handleDateClick = (day) => {
        setSelectedDate(new Date(selectedYear, selectedMonth, day));
        setFormData({ ...formData, dob: new Date(selectedYear, selectedMonth, day) });
        setCalendarOpen(false);
    };

    const toggleCalendar = () => {
        setCalendarOpen(!isCalendarOpen);
    };

    const handleMonthChange = (event) => {
        setSelectedMonth(parseInt(event.target.value));
    };

    const handleYearChange = (event) => {
        setSelectedYear(parseInt(event.target.value));
    };

    const handleOutsideClick = (event) => {
        if (calendarRef.current && !calendarRef.current.contains(event.target) && !dobInputRef.current.contains(event.target)) {
            setCalendarOpen(false);
        }
    };

    const handleSubmit = () => {
        if (isFormComplete) {
            navigate('/register-success', { 
                state: { 
                    type: "Agency", 
                    description: "Are you looking to expand your offerings and attract more travelers with unique, curated experiences? Join forces with TourEase and become part of a network dedicated to delivering exceptional travel adventures." 
                } 
            });
        }
    };
    

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    const renderCalendarDays = () => {
        const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();
        const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();

        let days = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="text-gray-400"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            days.push(
                <div
                    key={day}
                    className={`p-2 rounded-full cursor-pointer text-center ${
                        selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === selectedMonth
                            ? "bg-[#F97316] text-white"
                            : "hover:bg-gray-200"
                    }`}
                    onClick={() => handleDateClick(day)}
                >
                    {day}
                </div>
            );
        }

        return days;
    };

    return (
        <div className="min-h-screen bg-[#FF6F0026] flex flex-col">
            <div className="flex-grow flex items-center justify-center">
                <div className="bg-white p-10 shadow-lg rounded-2xl max-w-3xl w-full mx-auto mt-8">
                    {/* Header */}
                    <div className="text-center">
                        <IoBag className="text-6xl text-[#F97316] mx-auto" />
                        <h2 className="text-[#1D4ED8] text-3xl font-bold mt-5">Register as an Agency</h2>
                        <p className="text-gray-600 mt-3 leading-relaxed">
                            Are you looking to expand your offerings and attract more travelers with unique, curated experiences? Join forces with TourEase and become part of a network dedicated to delivering exceptional travel adventures.
                        </p>
                    </div>

                    {/* Owner Details Section */}
                    <h3 className="text-xl font-semibold mt-6 text-gray-700">Owner Details</h3>
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
                            <div className="relative flex flex-col flex-1">
                                <div className="flex items-center border rounded-lg px-4 py-3 bg-white cursor-pointer relative" onClick={toggleCalendar} 
                                    ref={dobInputRef}>
                                    <IoCalendar className="text-gray-500 mr-3" />
                                    <input
                                        type="text"
                                        name="dob"
                                        value={selectedDate ? selectedDate.toDateString() : ""}
                                        placeholder="Select DOB"
                                        readOnly
                                        className="w-full outline-none bg-transparent text-gray-700 cursor-pointer"
                                    />
                                </div>

                                {isCalendarOpen && (
                                    <div className="absolute bg-white shadow-lg p-4 rounded-md w-64 mt-1 z-10" ref={calendarRef}>
                                        <div className="flex justify-between mb-2">
                                            <select value={selectedMonth} onChange={handleMonthChange} className="border p-1 rounded">
                                                {Array.from({ length: 12 }, (_, i) => (
                                                    <option key={i} value={i}>
                                                        {new Date(2000, i, 1).toLocaleString("default", { month: "long" })}
                                                    </option>
                                                ))}
                                            </select>
                                            <select value={selectedYear} onChange={handleYearChange} className="border p-1 rounded">
                                                {Array.from({ length: 100 }, (_, i) => (
                                                    <option key={i} value={new Date().getFullYear() - i}>
                                                        {new Date().getFullYear() - i}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="grid grid-cols-7 gap-1">{renderCalendarDays()}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        <div className="flex flex-row items-center gap-4">
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
                        </div>
                    </div>
                    
                    {/* Business details section */}
                    <h3 className="text-xl font-semibold mt-6 text-gray-700">Business Details</h3>
                    <div className="mt-4 space-y-4">
                        <div className="flex flex-row items-center gap-4">
                            <div className="flex items-center border rounded-lg px-4 py-3 flex-1 bg-white">
                                <IoPerson className="text-gray-500 mr-3" />
                                <input 
                                    type="text" 
                                    name="firmName" 
                                    placeholder="Firm Name" 
                                    className="w-full outline-none bg-transparent text-gray-700"
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className="flex items-center border rounded-lg px-4 py-3 flex-1 bg-white">
                                <FaLocationDot className="text-gray-500 mr-3" />
                                <input 
                                    type="text" 
                                    name="headOffice" 
                                    placeholder="Firm Address" 
                                    className="w-full outline-none bg-transparent text-gray-700"
                                    onChange={handleChange} 
                                />
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <div className="flex items-center border rounded-lg px-4 py-3 flex-1 bg-white">
                                <IoIdCard className="text-gray-500 mr-3" />
                                <input 
                                    type="text" 
                                    name="taxId" 
                                    placeholder="Tax Identification Number" 
                                    className="w-full outline-none bg-transparent text-gray-700"
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className="flex items-center border rounded-lg px-4 py-3 flex-1 bg-white">
                                <FaBuilding className="text-gray-500 mr-3" />
                                <input 
                                    type="text" 
                                    name="businessRegNo" 
                                    placeholder="Business Registration Number" 
                                    className="w-full outline-none bg-transparent text-gray-700"
                                    onChange={handleChange} 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Certificates & ID Proof Section */}
                    <h3 className="text-xl font-semibold mt-6 text-gray-700">Certificates & Proofs</h3>
                    <div className="mt-4 flex flex-col items-center gap-4">
                        <div className="flex flex-row items-center gap-4 w-full">
                            <div className="flex items-center border rounded-lg px-4 py-3 flex-1 relative bg-white">
                                <IoCloudUpload className="text-gray-500 mr-3" />
                                <label className="w-full cursor-pointer text-gray-500">
                                    <span className="text-gray-700">{formData.govId?.name || "Upload Government ID Proof"}</span>
                                    <input type="file" name="govId" className="hidden" onChange={handleFileChange} />
                                </label>
                            </div>
                            <div className="flex items-center border rounded-lg px-4 py-3 flex-1 relative bg-white">
                                <IoCloudUpload className="text-gray-500 mr-3" />
                                <label className="w-full cursor-pointer text-gray-500">
                                    <span className="text-gray-700">{formData.certificateIncorporation?.name || "Upload Certificate of Incorporation"}</span>
                                    <input type="file" name="certificateIncorporation" className="hidden" onChange={handleFileChange} />
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-4 w-full">
                            <div className="flex items-center border rounded-lg px-4 py-3 flex-1 relative bg-white">
                                <IoCloudUpload className="text-gray-500 mr-3" />
                                <label className="w-full cursor-pointer text-gray-500">
                                    <span className="text-gray-700">{formData.tradeLicense?.name || "Upload Trade License"}</span>
                                    <input type="file" name="tradeLicense" className="hidden" onChange={handleFileChange} />
                                </label>
                            </div>
                        </div>
                    </div>

                    {fileError && <p className="text-[#F97316] text-sm mt-2">{fileError}</p>}

                    {/* Submit Button */}
                    <button
                        onClick={handleSubmit}
                        className={`w-full px-6 py-3 rounded-lg font-semibold mt-6 transition ${
                            isFormComplete ? "bg-[#F97316] text-white cursor-pointer" 
                            : "bg-gray-400 text-gray-200 cursor-not-allowed"
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
};

export default Agency;