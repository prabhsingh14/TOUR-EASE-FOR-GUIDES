import React from 'react';
import { Link } from 'react-router-dom';
// import ProfileDropDown from './ProfileDropDown';

const Navbar = (props) => {
    // const { token } = useSelector((state) => state.auth);
    // const { user } = useSelector((state) => state.profile);
    // const { totalItems } = useSelector((state) => state.wishlist); backend se api call karke total items nikalna hai

    // for now, we are using props
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className='bg-white shadow-[0px_24px_20px_-10px_rgba(0,0,0,0.08)] w-full'>
            <div className='h-[84px] flex items-center justify-between px-6 container mx-auto max-w-screen-lg'>

                {/* logo */}
                <Link to={'/'} className='flex flex-col' style={{ fontFamily: '"Segoe Script", cursive' }}>
                    <p className='text-[#1976D2] text-[32px] leading-[51.39px] font-bold'>
                        Smooth<span className='text-[#FF6F00]'>Trips</span>
                    </p>
                    <p className='text-[12px] leading-[19.27px]'>Not just a tour, but a memory!</p>
                </Link>

                <nav className='hidden md:block'>
                    {/* routes */}
                    <div className="flex gap-x-6">
                        <Link to='/register-guide' className="text-gray-700 hover:text-[#FF6F00] font-medium">Work as a Guide</Link>
                        <Link to="/register-agency" className="text-gray-700 hover:text-[#FF6F00] font-medium">Partner as an Agency</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-[#FF6F00] font-medium">Contact Us</Link>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;