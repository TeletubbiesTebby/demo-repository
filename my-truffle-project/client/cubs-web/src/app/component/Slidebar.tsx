import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="bg-purple-200 p-4 w-64 min-h-screen">
      <div className="flex items-center mb-6">
        <img src="/path/to/logo.png" alt="Logo" className="h-10 w-10" />
        <h1 className="ml-2 text-xl font-bold">BLOCKTECTIVE</h1>
      </div>
      <div className="flex items-center mb-6">
        <img src="/path/to/profile.png" alt="Profile" className="h-16 w-16 rounded-full" />
        <div className="ml-4">
          <p className="font-bold">Someone Helpme</p>
          <p className="text-sm">Science-Mathematics</p>
        </div>
      </div>
      <nav>
        <Link href="/profile">
          <p className="block py-2 px-4 rounded bg-purple-300">My Profile</p>
        </Link>
        <Link href="/portfolio">
          <p className="block py-2 px-4 rounded hover:bg-purple-300">My Portfolio</p>
        </Link>
        <Link href="/favorites">
          <p className="block py-2 px-4 rounded hover:bg-purple-300">Favorites</p>
        </Link>
        <Link href="/notifications">
          <p className="block py-2 px-4 rounded hover:bg-purple-300">Notifications</p>
        </Link>
        <Link href="/settings">
          <p className="block py-2 px-4 rounded hover:bg-purple-300">Settings</p>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
