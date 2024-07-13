import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/navigation' // Corrected the import path here
import profilePic from '/public/logo.svg'
import profileMan from '/public/logoMan.svg'

const Sidebar = () => {
  const router = useRouter(); // Correct usage of useRouter
  
  return (
    <div className="bg-purple-200 p-5 w-64 min-h-screen fixed top-0 left-0 z-50">
      <div className="flex items-center mb-6 border-b-2 border-[#101B8D] pb-2 ">
        <Image
            src={profilePic}
            alt="Picture of the author"
            width={60} 
            height={60} 
        />
        <h1 className="m-2 text-lg font-bold text-[#101B8D]">BLOCKTECTIVE</h1>
      </div>
      
      <div className="flex flex-col items-center mb-6">
        <h1 className="m-2 pb-2 text-2xl font-semibold font-mono">My Account</h1>
          <Image
            className='pb-3'
            src={profileMan}
            alt="Picture of the man"
            width={60} 
            height={60} 
        />
        <div className="ml-4">
          <p className="text-center text-lg tracking-wide font-bold">Someone Helpme</p>
          <p className="text-center text-stone-500 tracking-wide text-sm">Science-Mathematics</p>
        </div>
      </div>
      <nav>
        <Link href="/Profile">
          <p className={`text-center block py-2 px-4 rounded 'hover:bg-purple-300'`}>My Profile</p>
        </Link>
        <Link href="/Portfolio">
          <p className={`text-center block py-2 px-4 rounded 'hover:bg-purple-300'`}>My Portfolio</p>
        </Link>
        {/* <Link href="/Education">
          <p className={`text-center block py-2 px-4 rounded 'hover:bg-purple-300'`}>Education</p>
        </Link>
        <Link href="/notifications">
          <p className={`text-center block py-2 px-4 rounded 'hover:bg-purple-300'`}>Notifications</p>
        </Link>
        <Link href="/settings">
          <p className={`text-center block py-2 px-4 rounded  'hover:bg-purple-300'`}>Settings</p>
        </Link> */}
      </nav>
    </div>
  );
};

export default Sidebar;

