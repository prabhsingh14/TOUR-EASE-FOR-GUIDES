import React from 'react';
import Footer from '../components/layout/Footer';
import { IoBag } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
    return (
        <main className="min-h-screen flex flex-col justify-between overflow-x-hidden">
            {/* section-1 */}
            <section className="bg-white p-10 shadow-lg mx-auto my-12 w-full max-w-3xl rounded-2xl border border-gray-200 text-center">
                <h1 className="text-[#1976D2] text-4xl font-bold"
                    style={{ fontFamily: '"Segoe Script", cursive' }}>
                    Tour<span className="text-[#FF6F00]">Ease</span>
                </h1>
                <p className="text-sm text-gray-600 mt-1"
                    style={{ fontFamily: '"Segoe Script", cursive' }}>
                    Not just a tour, but a memory!
                </p>
                <p className="font-medium mt-6 text-gray-800 leading-relaxed px-4">
                    "Join <span className="text-[#1976D2] font-bold"
                        style={{ fontFamily: '"Segoe Script", cursive' }}>
                            Tour<span className="text-[#FF6F00]">Ease</span>
                        </span> and connect with travelers seeking authentic and enriching experiences in Punjab. As a verified guide or agency, 
                    you'll have the opportunity to showcase your expertise, share your stories, and provide memorable tours to tourists from around the 
                    world. <span className="text-[#1976D2] font-bold"
                            style={{ fontFamily: '"Segoe Script", cursive' }}>
                                Tour<span className="text-[#FF6F00]">Ease</span>
                            </span> ensures a seamless booking process, secure payments, and a trusted environment where you can focus on 
                            delivering top-notch experiences. Partner with <span className="text-[#1976D2] font-bold"
                                                                            style={{ fontFamily: '"Segoe Script", cursive' }}>
                                                                                Tour<span className="text-[#FF6F00]">Ease</span>
                                                                            </span> to expand your reach, grow your business, and become a part of 
                    Punjab’s most reliable travel network!"
                </p>
            </section>

            {/* section-2 */}
            <section className='flex flex-col items-center justify-center my-12'>
                <IoBag className="text-5xl text-[#FF6F00]" />
                <h2 className='text-[#1976D2] text-3xl font-bold mt-4'>Work with us</h2>
                <div className='flex flex-wrap justify-center gap-8 mt-8'>
                    {/* Guide Card */}
                    <div className='flex flex-col bg-white p-6 shadow-lg rounded-xl border border-gray-200 w-[380px] text-center hover:shadow-xl transition-shadow duration-300'>
                        <h3 className="text-xl font-bold text-black">As a Guide</h3>
                        <hr className="my-2 border-gray-300" />
                        <p className="text-gray-500 font-medium mt-2">Perks and Opportunities</p>
                        <ul className="list-inside mt-3 text-gray-700 font-medium space-y-1">
                            <li>Showcase your expertise</li>
                            <li>Expand your network</li>
                            <li>Earn competitive pay</li>
                            <li>Secure and verified bookings</li>
                            <li>Access to premium clients</li>
                        </ul>
                        <Link to="/register-guide"
                            className="mt-4 inline-flex items-center justify-center gap-2 text-white bg-[#FF6F00] py-2 px-5 rounded-lg hover:bg-[#E65A00] transition-all duration-300">
                            Register as a Guide <FaArrowRight className='translate-y-[1.5px] text-[14px]'/>
                        </Link>
                    </div>

                    {/* Agency Card */}
                    <div className='flex flex-col bg-white p-6 shadow-lg rounded-xl border border-gray-200 w-[380px] text-center hover:shadow-xl transition-shadow duration-300'>
                        <h3 className="text-xl font-bold text-black">As an Agency</h3>
                        <hr className="my-2 border-gray-300" />
                        <p className="text-gray-500 font-medium mt-2">Perks and Opportunities</p>
                        <ul className="list-inside mt-3 text-gray-700 font-medium space-y-1">
                            <li>Expand your agency's reach</li>
                            <li>Boost revenue with verified clients</li>
                            <li>Exclusive marketing support</li>
                            <li>Easy booking and payment handling</li>
                            <li>Join Punjab’s top travel network</li>
                        </ul>
                        <Link to="/register-agency"
                            className="mt-4 inline-flex items-center justify-center gap-2 text-white bg-[#FF6F00] py-2 px-5 rounded-lg hover:bg-[#E65A00] transition-all duration-300">
                            Register as an Agency <FaArrowRight className='translate-y-[1.5px] text-[14px]'/>
                        </Link>
                    </div>
                </div>
            </section>

            {/* footer */}
            <Footer />
        </main>
    );
};

export default Home;