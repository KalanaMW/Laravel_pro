import GuestLayout from '@/Layouts/GuestLayout';

export default function Upcoming() {
    return (
        <GuestLayout>
            <div className="bg-yellow-50 py-10">
                <div className="text-center">
                    <h1 style={{ color: '#FF5722' }} className="text-5xl font-bold mb-8">Upcoming Games</h1>
                    <p style={{ color: '#212121' }} className="text-lg mb-10">
                        Get a sneak peek into the hottest games releasing soon. Don’t miss out on the action!
                    </p>
                </div>

                {/* Section: Upcoming Highlights */}
                <div className="px-6 mb-16">
                    <h2 style={{ color: '#FF9800' }} className="text-3xl font-bold mb-6">Upcoming Highlights</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 shadow-lg rounded-md">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9ecAs1uWzPYgO3R3PVTPxKdTzsMaoPyKKQ&s"
                                alt="Sci-Fi Game"
                                className="w-full h-300 object-cover rounded-md mb-4"
                            />
                            <h3 style={{ color: '#FF5722' }} className="text-2xl font-semibold mb-3">Borderlands 4: Everything we know so far</h3>
                            <p style={{ color: '#212121' }}>
                                By Josh WestContributions from Emma-Jane Betts last updated 13 December 2024.
                                The latest Borderlands 4 news reveals a new planet, a fresh trailer, and a 2025 release window.
                            </p>
                        </div>
                        <div className="bg-white p-6 shadow-lg rounded-md">
                            <img
                                src="https://i.ytimg.com/vi/19rovfE3RaA/maxresdefault.jpg"
                                alt="Fantasy Game"
                                className="w-full h-300 object-cover rounded-md mb-4"
                            />
                            <h3 style={{ color: '#FF5722' }} className="text-2xl font-semibold mb-3">Mafia: The Old Country - Everything we know so far about the new game</h3>
                            <p style={{ color: '#212121' }}>
                                By Hirun CryerContributions from Jasmine Gould-Wilson, Josh West last updated 13 December 2024.
                                It looks like Mafia: The Old Country's release window has been confirmed in a new trailer from The Game Awards.
                            </p>
                        </div>
                        <div className="bg-white p-6 shadow-lg rounded-md">
                            <iframe
                                width="100%"
                                height="300"
                                src="https://www.youtube.com/embed/-YqHkVtbcyo"
                                title="Upcoming Game Trailer"
                                className="rounded-md"
                            ></iframe>
                            <h3 style={{ color: '#FF5722' }} className="text-2xl font-semibold mt-3">Teaser of the Month :Dying Light: The Beast - Official 'Meet The Baron' Trailer | The Game Awards 2024</h3>
                        </div>
                    </div>
                </div>

                {/* Section: Pre-Order Now */}
                <div className="px-6">
                    <h2 style={{ color: '#FF9800' }} className="text-3xl font-bold mb-6">Pre-Order Now</h2>
                    <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
                        <p style={{ color: '#212121' }} className="text-lg">
                            Secure your copy today and enjoy exclusive bonuses like in-game skins and early access!
                        </p>
                        <a
                            href="https://www.fanatical.com/en/upcoming-games"
                            target="_blank"
                            style={{
                                backgroundColor: '#FF5722',
                                color: '#FFFFFF',
                            }}
                            className="px-6 py-3 rounded-lg mt-6 inline-block hover:opacity-90 transition"
                        >
                            Pre-Order Here
                        </a>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}