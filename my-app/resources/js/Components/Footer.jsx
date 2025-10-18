import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">About Gamers_Hub ;</h3>
                        <p className="text-gray-400">
                            Your ultimate destination for gaming news, reviews, and community.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/GameNews" className="text-gray-400 hover:text-white transition">
                                    Game News
                                </Link>
                            </li>
                            <li>
                                <Link href="/upcoming" className="text-gray-400 hover:text-white transition">
                                    Upcoming Games
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard" className="text-gray-400 hover:text-white transition">
                                    Dashboard
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Categories</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition">
                                    Action Games
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition">
                                    Adventure
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition">
                                    RPG
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition">
                                    Strategy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Social Links */}
                <div className="border-t border-gray-800 mt-8 pt-8">
                    <div className="flex justify-between items-center">
                        <p className="text-gray-400">© 2025 Gamers_Hub. All rights reserved.</p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <i className="fab fa-discord"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}