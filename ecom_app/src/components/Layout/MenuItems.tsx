import Link from 'next/link';
import React, { useState } from 'react'
type TabName = 'Men' | 'Women' | 'Kids'
type TabData = {
    [key in TabName]: {
        clothing: string[],
        shoes: string[],
        accessories: string[],
        image: string;
    }
}

const tabData: TabData = {
    Men: { image: "/men-cover.png", clothing: ["Hoodies & SweatShirts"], shoes: ["Running"], accessories: ["Bags & Backpacks"] },
    Women: { image: "women-cover.png", clothing: ["Tops", "Jeans"], shoes: ["Heels", "Flats"], accessories: ["Handbags"] },
    Kids: { image: "juniors-cover.png", clothing: ["T-Shirts", "Shirts"], shoes: ["Sneakers"], accessories: ["Hats"] },
}

const MenuItems = () => {
    const [activeTab, setActiveTab] = useState<TabName>("Men");

    const renderContent = () => {
        const data = tabData[activeTab];

        return (
            <div className='flex justify-between py-3 w-full'>
                <div className='flex justify-between space-x-8 p-4 w-full'>
                    <img src={data.image} alt='categories' className='w-1/4' />
                    <div className='w-1/4'>
                        <h1 className='text-black font-semibold'>Clothing</h1>
                        <ul>
                            {data.clothing.map((item, index) => <li key={index}>
                                <Link href={`/products?category=${item.toLowerCase()}`} className='text-sm'>{item}</Link>
                            </li>)}
                        </ul>
                    </div>
                    <div className='w-1/4'>
                        <h1 className='text-black font-semibold'>Shoes</h1>
                        <ul>
                            {data.shoes.map((item, index) => <li key={index}>
                                <Link href={`/products?category=${item.toLowerCase()}`} className='text-sm'>{item}</Link>
                            </li>)}
                        </ul>
                    </div>
                    <div className='w-1/4'>
                        <h1 className='text-black font-semibold'>Accessories</h1>
                        <ul>
                            {data.accessories.map((item, index) => <li key={index}>
                                <Link href={`/products?category=${item.toLowerCase()}`} className='text-sm'>{item}</Link>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='w-full'>
            <nav className='flex justify-center space-x-8 py-4'>
                {
                    (["Men", "Women", "Kids"] as TabName[]).map((tab) =>
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-black cursor-pointer ${activeTab === tab ? "text-orange-500 border-b-2" : "text-black"}`}
                        >
                            {tab}
                        </button>
                    )
                }
            </nav>
            {renderContent()}
        </div>
    )
}

export default MenuItems