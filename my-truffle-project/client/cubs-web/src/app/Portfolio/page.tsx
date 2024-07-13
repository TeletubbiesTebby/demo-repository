"use client"
import Navbar from '../component/์Navbar'
import Image from 'next/image'
import Sidebar from '@/app/component/Slidebar';

const Portfolio = () => {
    return (
      <main>
        <Sidebar />
        <div className="grid grid-rows-2 grid-cols-4 gap-7">
          <div className="row-start-2 row-span-2 ">01</div>
          <div className="row-start-2 row-span-1 border">
            <h1 className='font-bold text-2xl'>Activity</h1>
          </div>
          <div className="row-start-2 row-span-1 border">03</div>
        </div>
      </main>
    );
  };
  
  
  export default Portfolio;
  