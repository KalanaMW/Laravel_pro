import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Welcome({ auth }) {
    return (
        <GuestLayout>
            <Head title="Welcome" />
            <div className="bg-gray-50 py-16">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-orange-600 mb-6">
                        Welcome to Gamers_Hub ;\
                    </h1>
                    <p className="text-lg text-yellow-500 mb-10">
                        Your ultimate destination for the latest games, news, trailers, and trends in the gaming world!
                    </p>

                    <div className="flex justify-center gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition w-40 text-center"
                            >
                                Go to Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition w-40 text-center"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition w-40 text-center"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </section>

                {/* Featured Sections */}
                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 mb-16">
                    {/* Latest Game News */}
                    <div
                        className="p-6 bg-cover bg-center rounded-lg shadow-lg"
                        style={{ backgroundImage: "url('https://store-images.s-microsoft.com/image/apps.48882.14102787083896651.a35e32b2-8b65-4537-b0d6-366916eac10b.2ff140c6-c708-48a0-87cf-ad68ec717cbd?q=90&w=480&h=270" }}
                    >
                        <h2 className="text-3xl font-bold text-red-600 mb-4">Latest Game News</h2>
                        <p className="mb-4 text-white">
                            Stay updated with breaking news, trailers, and trends in the gaming industry. Explore the latest
                            updates and deep dives into the gaming world.
                        </p>
                        <Link
                            href="/GameNews"
                            className="text-red-600 hover:underline font-medium"
                        >
                            Explore Game News
                        </Link>
                    </div>

                    {/* Upcoming Games */}
                    <div
                        className="p-6 bg-cover bg-center rounded-lg shadow-lg"
                        style={{ backgroundImage: "url('https://i0.wp.com/pubity.com/wp-content/uploads/2024/05/gta-6.jpg?resize=780%2C519&quality=50&ssl=1" }}
                    >
                        <h2 className="text-3xl font-bold text-cyan-200 mb-4">Upcoming Games</h2>
                        <p className="mb-4 text-white">
                            Get a sneak peek at the hottest upcoming games and their trailers. Don't miss out on exclusive
                            previews and release dates.
                        </p>
                        <Link
                            href="/upcoming"
                            className="text-cyan-200 hover:underline font-medium"
                        >
                            View Upcoming Games
                        </Link>
                    </div>

                    {/* Featured Reviews */}
                    <div
                        className="p-6 bg-cover bg-center rounded-lg shadow-lg"
                        style={{ backgroundImage: "url('https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/74USTiZhQ32tERpby3AWMW/a74cc33034f5a814379bbf7cb5f9c27e/ubinews-acshadows-thumbnail-960x540.jpg" }}
                    >
                        <h2 className="text-3xl font-bold text-yellow-400 mb-4">Top Game Reviews</h2>
                        <p className="mb-4 text-white">
                            Discover top-rated games and read in-depth reviews by industry experts. Get insights into the
                            best games to play next.
                        </p>
                        <a
                            href="https://example.com/reviews"
                            target="_blank"
                            className="text-yellow-400 hover:underline font-medium"
                        >
                            Read Reviews
                        </a>
                    </div>
                </section>

                {/* Video Highlights */}
                <section className="mb-16 text-center">
                    <h2 className="text-4xl font-bold text-orange-600 mb-6">Watch Trailers</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
                        <iframe
                            width="100%"
                            height="300"
                            src="https://www.youtube.com/embed/7z7kqwuf0a8"
                            title="Game Trailer 1"
                            className="rounded-lg"
                        ></iframe>
                        <iframe
                            width="100%"
                            height="300"
                            src="https://www.youtube.com/embed/Djtsw5k_DNc"
                            title="Game Trailer 2"
                            className="rounded-lg"
                        ></iframe>
                        <iframe
                            width="100%"
                            height="300"
                            src="https://www.youtube.com/embed/54dabgZJ5YA"
                            title="Game Trailer 3"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="bg-yellow-100 py-16">
                    <h2 className="text-4xl font-bold text-orange-600 text-center mb-8">What Gamers Are Saying</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <p className="italic text-gray-600">
                                "EGaming Hub is my go-to source for all gaming updates. Highly recommend!"
                            </p>
                            <span className="block text-right text-orange-600 font-bold">- Alex G.</span>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <p className="italic text-gray-600">
                                "I love how organized and interactive this platform is. Keep it up!"
                            </p>
                            <span className="block text-right text-orange-600 font-bold">- Jamie L.</span>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <p className="italic text-gray-600">
                                "The best place for gamers. Amazing content and trailers!"
                            </p>
                            <span className="block text-right text-orange-600 font-bold">- Chris P.</span>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center py-16">
                    <h2 className="text-4xl font-bold text-orange-600 mb-6">Join Our Discord Community</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Connect with fellow gamers, share reviews, and be part of an amazing gaming community.
                    </p>
                    <a
                        href="https://discord.com/login"
                        target="_blank"
                        className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition"
                    >
                        Join Now
                    </a>
                </section>
            </div>
        </GuestLayout>
    );
}