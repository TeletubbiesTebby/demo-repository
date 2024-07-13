import Link from 'next/link';
import { FaGlobe } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="w-full py-4 pt-5">
      <div className="flex justify-end items-center mr-[2%] ">
        <div className="flex space-x-10">
          <Link href="/">
            <p className="text-[#101B8D] hover:text-blue-700 cursor-pointer font-medium hover:underline">Home</p>
          </Link>
          <Link href="/about-us">
            <p className="text-[#101B8D] hover:text-blue-700 cursor-pointer font-medium hover:underline">About Us</p>
          </Link>
          <button className="text-[#101B8D] hover:text-blue-700 cursor-pointer font-medium">
            <FaGlobe size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
