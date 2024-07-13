"use client"
import Navbar from '@/app/component/Slidebar'
import Sidebar from '@/app/component/Slidebar'
import Image from 'next/image'
import prince1 from '/public/prince1.svg'
import prince2 from '/public/prince2.svg'
import prince3 from '/public/prince3.svg'
import prince4 from '/public/prince4.svg'
import prince0 from '/public/image 48.svg'

const Portfolio = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <main className="flex p-20 pl-40">
                <div className="flex ml-40">
                    <div className="w-2/3 pr-8">
                        <h1 className="text-3xl font-bold mb-2">Activity Diary</h1>
                        <p className="text-gray-600 mb-4">Diary for activity</p>
                        <div className="flex space-x-4 mb-4">
                            <button className="px-4 py-2 bg-stone-300 rounded-full">Grade5</button>
                            <button className="px-4 py-2 bg-stone-300 rounded-full">With friend</button>
                        </div>
                        <p className="text-gray-600 mb-4">
                            "Portfolio" refers to a collection of work or projects that someone has done, typically used in contexts such as business, graphic design, art, or investing. Creating a portfolio helps showcase one's abilities and experiences to others, making it easier for them to make decisions or connect with us.
                        </p>
                        <div className="relative mb-20">
                            <div className="absolute top-0 right-0 flex space-x-2 mt-2 mr-2">
                                <button className="px-4 py-1 bg-stone-500 text-zinc-100 rounded-full">add</button>
                                <button className="px-4 py-1 bg-stone-500 text-zinc-100 rounded-full">Edit</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 border bg-stone-200 rounded-lg flex">
                                <Image src={prince1} alt="Activity" width={140} height={100} className="h-full object-cover rounded-lg mb-2" />
                                <div className='pl-5 pt-3'>
                                <p className='font-semibold'>12/12/24</p>
                                <p className='text-stone-500'>I study hard to night.</p>
                                </div>
                            </div>
                            <div className="p-4 border bg-stone-200 rounded-lg flex">
                                <Image src={prince2} alt="Activity" width={140} height={100} className="h-full object-cover rounded-lg mb-2" />
                                <div className='pl-5 pt-3'>
                                <p className='font-semibold'>12/03/24</p>
                                <p className='text-stone-500'>I have a new friend.</p>
                                </div>
                            </div>
                            <div className="p-4 border bg-stone-200 rounded-lg flex">
                                <Image src={prince3} alt="Activity" width={140} height={100} className="h-full object-cover rounded-lg mb-2" />
                                <div className='pl-5 pt-3'>
                                <p className='font-semibold'>26/01/24</p>
                                <p className='text-stone-500'>I will stronger.</p>
                                </div>
                            </div>
                            <div className="p-4 border bg-stone-200 rounded-lg flex">
                                <Image src={prince4} alt="Activity" width={140} height={100} className="h-full object-cover rounded-lg mb-2" />
                                <div className='pl-5 pt-3'>
                                <p className='font-semibold'>22/02/22</p>
                                <p className='text-stone-500'>I so lonely.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="w-1/3 pl-8">
                        <h2 className="text-center text-2xl font-bold mb-4">My Diary</h2>
                        <div className="mb-4">
                            <input type="text" placeholder="Find your project" className="w-full p-2 border rounded-lg" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 border rounded-lg bg-stone-200">
                                <Image src={prince0} alt="Diary" width={100} height={100} className="w-40 h-34 object-cover rounded-lg mb-2" />
                                <p className='font-medium text-center'>elementary school life</p>
                            </div>
                            <div className="p-4 border rounded-lg bg-stone-200">
                            <Image src={prince0} alt="Diary" width={100} height={100} className="w-40 h-34 object-cover rounded-lg mb-2" />
                                <p className='font-medium text-center'>With friend</p>
                            </div>
                            <div className="p-4 border rounded-lg bg-stone-200">
                            <Image src={prince0} alt="Diary" width={100} height={100} className="w-40 h-34 object-cover rounded-lg mb-2" />
                                <p className='font-medium text-center'>With friend</p>
                            </div>
                            <div className="p-4 border rounded-lg bg-stone-200">
                            <Image src={prince0} alt="Diary" width={100} height={100} className="w-40 h-34 object-cover rounded-lg mb-2" />
                                <p className='font-medium text-center'>With friend</p>
                            </div>
                            <div className="flex justify-center items-center w-full h-32 border rounded-lg bg-stone-300">
                                <button className="text-3xl font-bold">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Portfolio;
  