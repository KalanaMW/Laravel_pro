import GuestLayout from '@/Layouts/GuestLayout';

export default function GameNews() {
    return (
        <GuestLayout>
            <div className="bg-yellow-50 py-10">
                <div className="text-center">
                    <h1 style={{ color: '#FF5722' }} className="text-5xl font-bold mb-8">Game News</h1>
                    <p style={{ color: '#212121' }} className="text-lg mb-10">
                        Dive into the latest updates, trailers, esports highlights, and in-depth reviews in the gaming world.
                    </p>
                </div>

                {/* Section: Trending News */}
                <div className="px-6 mb-16">
                    <h2 style={{ color: '#FF9800' }} className="text-3xl font-bold mb-6">Trending News</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg rounded-md p-6">
                            <img
                                src="https://media.graphassets.com/output=quality:95,strip:true/resize=w:960,h:540,fit:crop/sharpen=amount:1/auto_image/RQXkjAiPS4ySjMvjoTil"
                                alt="New RPG"
                                className="w-full h-300 object-cover rounded-md mb-4"
                            />
                            <h3 style={{ color: '#FF5722' }} className="text-2xl font-semibold mb-3">Breaking: New RPG Announced | The First Berserker: Khazan</h3>
                            <p style={{ color: '#212121' }}>
                            The First Berserker: Khazan gets a new cinematic trailer and a release date reveal at The Game Awards 2024. 
                            Check out the cinematic trailer for The First Berserker: Khazan, an upcoming action RPG set in the DNF universe. As Khazan, 
                            the great general of the Pell Los Empire who overcame death, players will unveil the incidents that led to his downfall and seek
                             vengeance on his enemies. The First Berserker: Khazan will be available on PC Steam, PS5, and Xbox Series X/S on March 27, 2025.
                            </p>
                            <a
                                href="https://www.youtube.com/embed/-9uMGePq3zw"
                                target="_blank"
                                style={{ color: '#FF9800' }}
                                className="hover:underline mt-3 inline-block"
                            >
                                Watch Teaser
                            </a>
                        </div>
                        <div className="bg-white shadow-lg rounded-md p-6">
                            <img
                                src="https://cdn.sanity.io/images/dsfx7636/news/cfb6ebb769e22d1acdd43251129204484bab65ff-1920x1080.jpg"
                                alt="Esports Championship"
                                className="w-full h-300 object-cover rounded-md mb-4"
                            />
                            <h3 style={{ color: '#FF5722' }} className="text-2xl font-semibold mb-3">Valorant | Esports Championship 2025</h3>
                            <p style={{ color: '#212121' }}>
                            _In 2025, the competition will consist of 3 Stages with a new exciting format, each one will have a Swiss Group Stage and 
                            Playoffs with the top 8 teams. A new points system for the teams will be implemented that
                            will determine one spot to qualify for VCT Ascension. Swiss Group Stage: 16 Teams playing in a Swiss format.
                            </p>
                            <iframe
                                width="100%"
                                height="300"
                                src="https://www.youtube.com/embed/GuB2NeKL7NI"
                                className="rounded-md"
                                title="Esports Highlight"
                            ></iframe>
                        </div>
                        <div className="bg-white shadow-lg rounded-md p-6">
                            <img
                                src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2677660/capsule_616x353.jpg?t=1734453950"
                                alt="Top Games of the Month"
                                className="w-full h-300 object-cover rounded-md mb-4"
                            />
                            <h3 style={{ color: '#FF5722' }} className="text-2xl font-semibold mb-3">Top Games of the Month | Indiana Jones and the Great Circle</h3>
                            <p style={{ color: '#212121' }}>
                            It’s been over 30 years since I wore out my VHS copy of Indiana Jones and the Last Crusade.
                             Since then the film franchise has been in a state of escalation. Where do you go after uncovering the 
                             literal Holy Grail? Aliens, then time machines, apparently. Indiana Jones and the Great Circle is the perfect 
                             antidote to all of this; one that uses its own figurative Dial of Destiny to propel us back in time to Indy’s 
                             prime. The result is easily one of the best Indy stories across both the games and the movies, with painstakingly 
                             detailed environments, wonderfully atmospheric tomb raiding and puzzle solving, a pitch-perfect score, and quite possibly 
                             the greatest punch sound effect in the business. While it does stumble occasionally as a stealth-focused sneak ’em up, 
                             The Great Circle is an otherwise grand and gorgeous globe-trotting adventure that left me giddy as a schoolboy. 
                             Yes, it’s true that bringing Indiana Jones back to the big screen (twice) after he literally rode off into the sunset was probably a 
                             poor choice. But having MachineGames craft an Indy experience inspired by all the best games in that development team’s past?
                            Bethesda chose wisely
                            </p>
                            <a
                                href="https://www.ign.com/articles/indiana-jones-and-the-great-circle-review"
                                target="_blank"
                                style={{ color: '#FF9800' }}
                                className="hover:underline mt-3 inline-block"
                            >
                                Explore Now
                            </a>
                        </div>
                    </div>
                </div>

                {/* Section: Featured Article */}
                <div className="px-6 mb-16">
                    <h2 style={{ color: '#FF9800' }} className="text-3xl font-bold mb-6">Featured Article</h2>
                    <div className="bg-white shadow-lg rounded-md p-6">
                        <h3 style={{ color: '#FF5722' }} className="text-2xl font-semibold mb-3">The Best Games of 2024: A Year of Surprises and Excellence | By Darryn Bonthuys  on December 11, 2024 at 4:40AM PST</h3>
                        <img
                            src="https://www.gamespot.com/a/uploads/scale_super/1601/16018044/4395471-best-games-2024-1.jpg"
                            alt="Open World Games"
                            className="w-full h-100 object-cover rounded-md mb-4"
                        />
                        <p style={{ color: '#212121', alignContent: 'center'}}>
                        2024 has been a remarkable year for gaming, offering a diverse range of experiences that captivated players worldwide. Blockbuster hits like Elden Ring: Shadow of the Erdtree and Metaphor ReFantazio earned perfect scores for their masterful storytelling, immersive worlds, and innovative gameplay, setting a high bar for the industry. Beloved franchises made triumphant returns, with Dragon’s Dogma 2 refining its open-world RPG elements, Paper Mario: The Thousand-Year Door receiving a stunning HD remake, and Prince of Persia: The Lost Crown revitalizing the series with its polished 2D metroidvania design. Indie games also shone brightly, with titles like Animal Well and Balatro proving that smaller studios can deliver innovative mechanics and deeply engaging experiences.
                        </p>
                        <p style={{ color: '#212121', alignContent: 'center'}}>
                        Genre innovations defined the year as well, with Hades 2 building on its predecessor’s roguelike excellence and Helldivers 2 transforming its twin-stick roots into a thrilling third-person cooperative adventure. Nostalgia and modernity intertwined in standout remakes like Legacy of Kain: Soul Reaver Remastered, while surprises like Indika and Thank Goodness You’re Here brought fresh perspectives to gaming narratives. From sprawling RPGs and adrenaline-pumping action games to heartfelt indie creations, 2024 has cemented itself as a year where creativity thrived and gaming reached new heights, ensuring something extraordinary for players of all tastes.
                        </p>
                        <a
                            href="https://www.gamespot.com/gallery/best-reviewed-games-2024/2900-5065/#1"
                            target="_blank"
                            style={{ color: '#FF9800' }}
                            className="hover:underline mt-4 inline-block"
                        >
                            Read More
                        </a>
                    </div>
                </div>

                {/* Section: Community Corner */}
                <div className="px-6">
                    <h2 style={{ color: '#FF9800' }} className="text-3xl font-bold mb-6">Community Corner</h2>
                    <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
                        <p style={{ color: '#212121' }} className="text-lg">
                            Join the discussion! Share your thoughts on recent updates, connect with fellow gamers, and stay engaged.
                        </p>
                        <a
                            href="https://discord.com/login"
                            target="_blank"
                            style={{
                                backgroundColor: '#FF5722',
                                color: '#FFFFFF',
                            }}
                            className="px-6 py-3 rounded-lg mt-6 inline-block hover:opacity-90 transition"
                        >
                            Join Community
                        </a>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}