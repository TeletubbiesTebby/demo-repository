"use client"
import Navbar from '../component/์Navbar'
import Image from 'next/image'
import Sidebar from '@/app/component/Slidebar';
import Create from '@/app/component/Create';
const Portfolio = () => {
    return (
      <main>
        <Navbar/>
        <Sidebar />
        <section className='ml-72'>
            <Create/>
        </section>
      </main>
    );
  };
  
  
  export default Portfolio;
  