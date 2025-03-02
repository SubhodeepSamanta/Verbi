import React, { use, useContext } from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Navbar = () => {
    const navigate = useNavigate();
    const {user} = useContext(AppContext);
  return (
    <div className='flex justify-between items-center py-4'>
        <Link to='/'>
        <img src={assets.logo} alt="logo" className='w-28 sm:w-32 lg:w-40' />
        </Link>
        <div>
            {
                user ? 
                <div className='flex items-center gap-2 sm:gap-3'>
                    <button className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-2 sm::py-8 rounded-full hover:scale-105 transition-all duration-700' onClick={()=>navigate('/buycredit')}>
                        <img src={assets.credit_star} alt="credits" className='w-5' />
                        <p className='text-xs sm:text-sm font-medium text-gray-500'>Credits Left: 50</p>
                    </button>
                    <p className='text-gray-699 max-sm:hidden pl-4'>Hi! Subhodeep</p>
                    <div className='relative group cursor-pointer'>
                        <img className='w-10 drop-shadow' src={assets.profile_icon} alt="" />
                        <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                            <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                                <li className='py-1 px-2 pr-10 cursor-pointer'>Logout</li>
                            </ul>
                        </div>
                    </div>
                </div>
                :
                <div className='flex items-center gap-2 sm:gap-5'>
                    <p onClick={()=>navigate('/buycredit')} className='cursor-pointer'>Pricing</p>
                    <button className='bg-zinc-800 text-white px-10 py-2 sm:px-7 text-small rounded-full'>Login</button>
                </div>
            }            

        </div>
    </div>
  )
}

export default Navbar