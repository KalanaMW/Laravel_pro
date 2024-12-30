import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div
            className="min-h-screen bg-cover bg-center text-white"
            style={{ backgroundImage: "url('/images/movie-background.jpg')" }}
        >
            <header className="bg-black bg-opacity-75 text-white p-4">
                <nav className="flex justify-between items-center">
                    <div>
                        <Link href="/" className="text-2xl font-bold hover:underline">
                            Gamers_Hub ;\
                        </Link>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="/GameNews" className="hover:underline">
                            Game News
                        </Link>
                        <Link href="/upcoming" className="hover:underline">
                            Upcoming
                        </Link>
                        <Link href="/login" className="hover:underline">
                            Login
                        </Link>
                        <Link href="/register" className="hover:underline">
                            Register
                        </Link>
                    </div>
                </nav>
            </header>
            <main className="container mx-auto py-8">{children}</main>
        </div>
    );
}
