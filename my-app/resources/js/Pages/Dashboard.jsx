import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    const games = [
        {
            title: "Far Cry 6",
            year: 2021,
            image: "https://image.api.playstation.com/vulcan/img/rnd/202106/1514/xqoTYwf0S55ro6fwcIIY1KI4.png",
            downloadUrl: "https://example.com/download/farcry6",
        },
        {
            title: "Assassin's Creed Mirage",
            year: 2023,
            image: "https://images.macrumors.com/t/U3uqJWtH5pmWX1CZKjC4Yc3t-Ew=/1600x/article-new/2024/04/Assassins-Creed-Mirage.jpg",
            downloadUrl: "https://example.com/download/assassinscreedmirage",
        },
        {
            title: "Grand Theft Auto V",
            year: 2013,
            image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
            downloadUrl: "https://example.com/download/gtav",
        },
        {
            title: "Starfield",
            year: 2023,
            image: "https://assets-prd.ignimgs.com/2022/01/28/starfield-ign-sq-1643334195275.jpg",
            downloadUrl: "https://example.com/download/starfield",
        },
        {
            title: "Hogwarts Legacy",
            year: 2024,
            image: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_HogwartsLegacy_image1280w.jpg",
            downloadUrl: "https://example.com/download/hogwartslegacy",
        },
        {
            title: "Red Dead Redemption 2",
            year: 2024,
            image: "https://assets1.ignimgs.com/2016/10/18/red-dead-redemption-2-buttonjpg-f9ad35.jpg",
            downloadUrl: "https://example.com/download/reddead2",
        },
        {
            title: "The Last of Us Part II",
            year: 2024,
            image: "https://w0.peakpx.com/wallpaper/700/14/HD-wallpaper-tlou-poster-game-of-the-year-games-goty-playstation-ps4-the-last-of-us-the-last-of-us-part-ii-tloup2.jpg",
            downloadUrl: "https://example.com/download/tlou2",
        },
        {
            title: "Elden Ring",
            year: 2024,
            image: "https://wallpapercat.com/w/full/b/7/7/102867-1920x1080-desktop-1080p-elden-ring-background.jpg",
            downloadUrl: "https://example.com/download/eldenring",
        },
        {
            title: "Deathloop",
            year: 2024,
            image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/09/Deathloop-Review.jpg",
            downloadUrl: "https://example.com/download/deathloop",
        },
        {
            title: "Fallout 4",
            year: 2024,
            image: "https://c4.wallpaperflare.com/wallpaper/602/567/775/fallout-4-fallout-wallpaper-preview.jpg",
            downloadUrl: "https://example.com/download/fallout4",
        },
        {
            title: "Cyberpunk 2077",
            year: 2020,
            image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/0416/6Bo40lnWU0BhgrOUm7Cb6by3.png?w=440",
            downloadUrl: "https://example.com/download/cyberpunk2077",
        },
        {
            title: "Spider-Man: Miles Morales",
            year: 2020,
            image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1423/s9nv5WsKbjbWLKMHnd4UZo1O.png",
            downloadUrl: "https://example.com/download/spiderman",
        },
        {
            title: "Call of Duty: Modern Warfare II",
            year: 2022,
            image: "https://upload.wikimedia.org/wikipedia/en/4/4a/Call_of_Duty_Modern_Warfare_II_Key_Art.jpg",
            downloadUrl: "https://example.com/download/codmw2",
        },
        {
            title: "Battlefield 2042",
            year: 2021,
            image: "https://image.api.playstation.com/vulcan/ap/rnd/202305/2515/0ca4a6fb1b87996a9f8b79fc16a8c99dcd24bcf5b99813e6.png",
            downloadUrl: "https://example.com/download/battlefield2042",
        },
        {
            title: "Resident Evil Village",
            year: 2021,
            image: "https://egy4gamers.com/storage/2023/09/resident-evil-village-gold-edition.jpg",
            downloadUrl: "https://example.com/download/residentevilvillage",
        },
        {
            title: "Halo Infinite",
            year: 2021,
            image: "https://m.media-amazon.com/images/M/MV5BYzFjNzJkNjUtNGE3Ny00MjdkLWFjZGMtNmQwMDQxY2Y1ZWFkXkEyXkFqcGc@._V1_.jpg",
            downloadUrl: "https://example.com/download/haloinfinite",
        },
        {
            title: "The Witcher 3: Wild Hunt",
            year: 2015,
            image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
            downloadUrl: "https://example.com/download/witcher3",
        },
        {
            title: "Final Fantasy XVI",
            year: 2023,
            image: "https://cdn.cdkeys.com/700x700/media/catalog/product/f/i/final_fantasy_xvi_complete_edition.png",
            downloadUrl: "https://example.com/download/finalfantasyxvi",
        },
        {
            title: "Minecraft",
            year: 2009,
            image: "https://image.api.playstation.com/vulcan/ap/rnd/202407/0401/670c294ded3baf4fa11068db2ec6758c63f7daeb266a35a1.png",
            downloadUrl: "https://example.com/download/minecraft",
        },
        {
            title: "Diablo IV",
            year: 2023,
            image: "https://assets.beartai.com/uploads/2022/12/1158428.png",
            downloadUrl: "https://example.com/download/diablo4",
        },
    ];

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />
            <div className="bg-gradient-to-b from-white to-gray-100 text-gray-900 min-h-screen px-6 py-8">
                {/* User Information */}
                <div className="mb-6 text-center">
                    <h1 className="text-4xl font-bold text-orange-600">Welcome, {auth.user.name}!</h1>
                    <p className="text-gray-600 text-lg">Discover and download your favorite games.</p>
                </div>

                {/* Game Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {games.map((game, index) => (
                        <div
                            key={index}
                            className="bg-white border border-yellow-400 rounded-lg shadow-lg p-4 hover:shadow-2xl hover:border-orange-400 transition transform hover:scale-105"
                        >
                            <img
                                src={game.image}
                                alt={game.title}
                                className="w-full h-80 object-cover rounded-md mb-4"
                            />
                            <h2 className="text-lg font-semibold text-orange-600">{game.title}</h2>
                            <p className="text-gray-500 mb-4">{game.year}</p>
                            <a
                                href={game.downloadUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 border border-yellow-400 text-orange-600 font-semibold rounded-full hover:bg-orange-500 hover:text-white hover:border-orange-600 transition"
                            >
                                Download
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}