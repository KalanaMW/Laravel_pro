import { useState } from 'react';
import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';

export default function Navigation() {
    const { auth } = usePage().props;
    const user = auth?.user;
    const [searchQuery, setSearchQuery] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <nav className="bg-gray-900 text-white">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-orange-500">
                            Gamers_Hub ;
                        </Link>
                    </div>

                    {/* Search Bar - Only for logged-in users */}
                    {user && (
                        <div className="hidden md:flex flex-1 max-w-xl mx-8">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Search games..."
                                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button className="absolute right-3 top-2.5 text-gray-400 hover:text-white">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link
                            href="/GameNews"
                            className="text-gray-300 hover:text-white transition"
                        >
                            News
                        </Link>
                        <Link
                            href="/upcoming"
                            className="text-gray-300 hover:text-white transition"
                        >
                            Upcoming
                        </Link>
                        {user && (
                            <Link
                                href={route('downloads')}
                                className="text-gray-300 hover:text-white transition"
                            >
                                Downloads
                            </Link>
                        )}
                        {/* Categories Dropdown - Only show for logged-in users */}
                        {user && (
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button className="text-gray-300 hover:text-white transition">
                                        Categories
                                    </button>
                                </Dropdown.Trigger>
                                <Dropdown.Content align="right" width="48">
                                    <Dropdown.Link href="#">Action</Dropdown.Link>
                                    <Dropdown.Link href="#">Adventure</Dropdown.Link>
                                    <Dropdown.Link href="#">RPG</Dropdown.Link>
                                    <Dropdown.Link href="#">Strategy</Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        )}
                        {user ? (
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button className="text-gray-300 hover:text-white transition">
                                        {user.name}
                                    </button>
                                </Dropdown.Trigger>
                                <Dropdown.Content align="right" width="48">
                                    {/* Downloads link moved to navbar */}
                                    {user.is_admin && (
                                        <Dropdown.Link href={route('admin.dashboard')}>
                                            Admin Dashboard
                                        </Dropdown.Link>
                                    )}
                                    <Dropdown.Link href={route('profile.edit')}>
                                        Profile
                                    </Dropdown.Link>
                                    <Dropdown.Link href={route('logout')} method="post" as="button">
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link
                                    href={route('login')}
                                    className="text-gray-300 hover:text-white transition"
                                >
                                    Login
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-300 hover:text-white"
                        >
                            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 space-y-4">
                        {user && (
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search games..."
                                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button className="absolute right-3 top-2.5 text-gray-400 hover:text-white">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        )}
                        <Link
                            href="/GameNews"
                            className="block text-gray-300 hover:text-white transition"
                        >
                            News
                        </Link>
                        <Link
                            href="/upcoming"
                            className="block text-gray-300 hover:text-white transition"
                        >
                            Upcoming
                        </Link>
                        {/* Categories - Only show for logged-in users */}
                        {user && (
                            <div className="py-2">
                                <button className="text-gray-300 hover:text-white transition">
                                    Categories
                                </button>
                                <div className="pl-4 mt-2 space-y-2">
                                    <Link href="#" className="block text-gray-300 hover:text-white transition">
                                        Action
                                    </Link>
                                    <Link href="#" className="block text-gray-300 hover:text-white transition">
                                        Adventure
                                    </Link>
                                    <Link href="#" className="block text-gray-300 hover:text-white transition">
                                        RPG
                                    </Link>
                                    <Link href="#" className="block text-gray-300 hover:text-white transition">
                                        Strategy
                                    </Link>
                                </div>
                            </div>
                        )}
                        {user ? (
                            <>
                                <Link
                                    href={route('dashboard')}
                                    className="block text-gray-300 hover:text-white transition"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    href={route('profile.edit')}
                                    className="block text-gray-300 hover:text-white transition"
                                >
                                    Profile
                                </Link>
                                <Link
                                    href={route('logout')}
                                    method="post"
                                    as="button"
                                    className="block text-gray-300 hover:text-white transition"
                                >
                                    Log Out
                                </Link>
                                {user.is_admin && (
                                    <Link
                                        href={route('admin.dashboard')}
                                        className="block text-orange-500 hover:text-white transition"
                                    >
                                        Admin Dashboard
                                    </Link>
                                )}
                            </>
                        ) : (
                            <div className="space-y-2">
                                <Link
                                    href={route('login')}
                                    className="block text-gray-300 hover:text-white transition"
                                >
                                    Login
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition text-center"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
}