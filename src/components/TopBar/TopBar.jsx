import React from 'react'
import Avatar from "../../assets/icons/avatar.svg";
import Moment from 'react-moment';
function TopBar() {

    return (
        <div className='min-h-[5vh] topbar flex text-base justify-between w-full px-4 py-2 text-black bg-white rounded-2xl'>
            <div className='flex items-center text-lg'>
            <Moment format="ddd DD MMM HH.MM A" className='date'>{new Date()}</Moment>
            </div>
            <div className="flex items-center">
                <p className="mx-[22px] mx-2.5 text-sm">Welcome John</p>
                <img src={Avatar} alt="" />
            </div>
        </div>
    )
}

export default TopBar