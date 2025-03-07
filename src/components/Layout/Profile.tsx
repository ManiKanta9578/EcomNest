import React, { JSX } from 'react'
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

const Profile: React.FC<ProfileProps> = ({ user }) => {

    const menuItems: MenuItems[] = [
        { icon: <FaLock className='mr-2' />, label: "Order History" },
        { icon: <FaUndoAlt className='mr-2' />, label: "Return Orders" },
        { icon: <FaUser className='mr-2' />, label: "Account Info" },
        { icon: <FaKey className='mr-2' />, label: "Change Password" },
        { icon: <FaMapMarkedAlt className='mr-2' />, label: "Address" },
        { icon: <FaSignOutAlt className='mr-2' />, label: "Logout" },
    ]

    return (
        <div className='w-full'>
            <div className="flex">
                <div>
                    <img src='' alt='profile avatar' className='w-12 h-12 rounded-full' />
                </div>
                <div>
                    <h2 className='text-lg font-semibold'>{user.name}</h2>
                    <p className='text-sm text-gray-500'>{user.phone}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile