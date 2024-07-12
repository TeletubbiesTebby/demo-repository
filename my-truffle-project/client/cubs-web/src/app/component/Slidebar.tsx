import Link from 'next/link';
import Image from 'next/image'
import profilePic from '/public/logo.svg'
import profileMan from '/public/logoMan.svg'

const Sidebar = () => {
  return (
    <div className="bg-purple-200 p-4 w-64 min-h-screen">
      <div className="flex items-center mb-6">
        <Image
            src={profilePic}
            alt="Picture of the author"
            width={60} 
            height={60} 
        />
        <h1 className="m-2 text-lg font-bold">BLOCKTECTIVE</h1>
      </div>
      <div className="flex flex-col items-center mb-6">
        <h1 className="m-2 pb-2 text-2xl font-semibold font-mono">My Account</h1>
          <Image
            className='pb-3'
            src={profileMan}
            alt="Picture of the author"
            width={60} 
            height={60} 
        />
        <div className="ml-4">
          <p className="text-center text-lg tracking-wide font-bold">Someone Helpme</p>
          <p className="text-center text-stone-500 tracking-wide text-sm">Science-Mathematics</p>
        </div>
      </div>
      <nav>
        <Link href="/profile">
          <p className="text-center block py-2 px-4 rounded bg-purple-300 text-white font-semibold">My Profile</p>
        </Link>
        <Link href="/portfolio">
          <p className="text-center block py-2 px-4 rounded hover:bg-purple-300">My Portfolio</p>
        </Link>
        <Link href="/favorites">
          <p className="text-center block py-2 px-4 rounded hover:bg-purple-300">Favorites</p>
        </Link>
        <Link href="/notifications">
          <p className="text-center block py-2 px-4 rounded hover:bg-purple-300">Notifications</p>
        </Link>
        <Link href="/settings">
          <p className="text-center block py-2 px-4 rounded hover:bg-purple-300">Settings</p>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
