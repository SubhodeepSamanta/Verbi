import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [user,setUser] = useState(null);
    const navigate = useNavigate();
  return (
    <div className='flex justify-between items-center py-4'>
        <Link to='/'>
        <img src={assets.logo} alt="logo" className='w-28 sm:w-32 lg:w-40' />
        </Link>
        <div>
            {
                user ? 
                <div></div>
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