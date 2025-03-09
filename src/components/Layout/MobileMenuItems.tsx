import Link from 'next/link'
import React from 'react'
import { BiSolidCategory } from 'react-icons/bi'
import { FaKey, FaLock, FaMapMarkedAlt, FaSignOutAlt, FaUndoAlt, FaUser } from 'react-icons/fa'

type MenuItems = {
    icon: JSX.Element,
    label: string
}

type User = {
    avatarUrl: string,
    name: string,
    phone: string
}

type ProfileProps = {
    user: User
}

const MobileMenuItems: React.FC<ProfileProps> = ({ user }) => {

    const menuItems: MenuItems[] = [
        { icon: <BiSolidCategory className='mr-2' />, label: "Categories" },
        { icon: <FaLock className='mr-2' />, label: "Order History" },
        { icon: <FaUndoAlt className='mr-2' />, label: "Return Orders" },
        { icon: <FaUser className='mr-2' />, label: "Account Info" },
        { icon: <FaKey className='mr-2' />, label: "Change Password" },
        { icon: <FaMapMarkedAlt className='mr-2' />, label: "Address" },
        { icon: <FaSignOutAlt className='mr-2' />, label: "Logout" },
    ]

    return (
        <div className='p-4'>
            <div className="flex space-x-4 items-center">
                <div>
                    <img src='/avatar.png' alt='profile avatar' className='w-12 h-12 rounded-full' />
                </div>
                <div>
                    <h2 className='text-lg font-semibold'>{user.name}</h2>
                    <p className='text-sm text-gray-500'>{user.phone}</p>
                </div>
            </div>
            <div className="mt-4">
                <ul>
                    {
                        menuItems.map((item, index) => (
                            <li key={index}>
                                <Link className=" flex items-center hover:bg-gray-100 p-2" href={"/account"} >
                                    {item.icon}
                                    <span>{item.label} </span>

                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default MobileMenuItems