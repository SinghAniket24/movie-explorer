import { motion } from 'framer-motion';

function Pokemon() {
  // Helper to pad numbers to 3 digits
  const pad = (num) => num.toString().padStart(3, '0');

  // Ash's team with working images
  const ashTeam = [
    {
      name: 'Pikachu',
      id: 25,
      role: 'Partner Pokémon',
      moves: ['10,000,000 Volt Thunderbolt', 'Iron Tail', 'Quick Attack'],
    },
    {
      name: 'Lucario',
      id: 448,
      role: 'Aura Guardian',
      moves: ['Aura Sphere', 'Bullet Punch', 'Mega Evolution'],
    },
    {
      name: 'Greninja',
      id: 658,
      role: 'Bond Phenomenon',
      moves: ['Water Shuriken', 'Cut', 'Aerial Ace'],
    },
    {
      name: 'Dragonite',
      id: 149,
      role: 'Dragon Master',
      moves: ['Dragon Claw', 'Draco Meteor', 'Hurricane'],
    },
    {
      name: 'Gengar',
      id: 94,
      role: 'Shadow Trickster',
      moves: ['Shadow Ball', 'Sludge Bomb', 'Gigantamax'],
    },
    {
      name: 'Sirfetch’d',
      id: 865,
      role: 'Gallant Fighter',
      moves: ['Meteor Assault', 'Brave Bird', 'Leaf Blade'],
    },
  ];

  // Key victories with working images
  const victories = [
    {
      title: "World Coronation Series Champion",
      series: "Journeys (2022)",
      img: "025", // Pikachu
      description: "Ash defeats Leon and becomes the Monarch, the strongest trainer in the world.",
      highlights: [
        "Pikachu defeats Leon's Charizard in the final clash",
        "Mega Lucario, Gengar (Gigantamax), and Dragonite shine in key battles",
      ],
    },
    {
      title: "Alola League Champion",
      series: "Sun & Moon (2019)",
      img: "745", // Lycanroc (Midday Form)
      description: "Ash wins his first regional league in Alola, defeating Gladion in the final.",
      highlights: [
        "Lycanroc lands the finishing blow",
        "Naganadel and Melmetal play pivotal roles",
      ],
    },
    {
      title: "Kalos League Runner-up",
      series: "XYZ (2016)",
      img: "658", // Greninja
      description: "Ash reaches the finals with Ash-Greninja and battles Alain's Mega Charizard X.",
      highlights: [
        "Ash-Greninja's Bond Phenomenon debuts",
        "Epic 6v6 full battle with Alain",
      ],
    },
  ];

  return (
    <div className="font-sans bg-gradient-to-br from-red-50 via-blue-50 to-yellow-50 text-gray-800 relative overflow-x-hidden">
      {/* Navbar */}
      <header className="bg-white/80 backdrop-blur-lg shadow-lg fixed top-0 left-0 w-full z-50 border-b border-red-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-500 to-yellow-400 tracking-wide">
            Ash Ketchum
          </h1>
          <nav className="space-x-8 text-sm font-semibold flex items-center">
            {['Home', 'Victories', 'Team', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-700 hover:text-red-600 transition-colors duration-300 px-1 py-0.5"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                {item}
                <motion.span
                  className="block h-0.5 bg-gradient-to-r from-red-500 via-blue-500 to-yellow-400 absolute left-0 bottom-0 rounded-full"
                />
              </motion.a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-red-500 via-blue-500 to-yellow-400 text-white pt-32 pb-40 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-yellow-100 bg-clip-text text-transparent animate-gradient-x"
            initial={{ letterSpacing: '0.03em' }}
            animate={{ letterSpacing: ['0.03em', '0.15em', '0.03em'] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Pokémon World Champion <span className="inline-block animate-wave">🏆</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Winner of the World Coronation Series | Alola Champion | Kalos League Finalist
          </motion.p>
        </motion.div>
      </section>

      {/* Victories Section */}
      <section id="victories" className="py-24 bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50 relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center text-red-600 mb-16">Ash's Greatest Victories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {victories.map((v, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white/90 p-8 rounded-2xl shadow-xl border border-blue-100 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pad(v.img)}.png`}
                  alt={v.title}
                  className="w-36 h-36 object-contain mb-4"
                />
                <h3 className="text-xl font-bold text-blue-600 mb-2 text-center">{v.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{v.series}</p>
                <p className="text-gray-700 mb-4 text-center">{v.description}</p>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  {v.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-16">Ash's World Champion Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {ashTeam.map((pokemon, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white/90 backdrop-blur-lg border border-red-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pad(pokemon.id)}.png`}
                  alt={pokemon.name}
                  className="w-40 h-40 object-contain mb-4"
                />
                <h3 className="text-2xl font-bold text-red-600 text-center mb-2">{pokemon.name}</h3>
                <p className="text-center text-blue-600 font-medium mb-3">{pokemon.role}</p>
                <div className="space-y-2 w-full">
                  {pokemon.moves.map((move, i) => (
                    <div key={i} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm text-center">
                      {move}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="max-w-xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-red-600 mb-8">Challenge the Champion</h2>
          <motion.form
            className="space-y-4 text-left bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <input type="text" placeholder="Trainer Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 bg-white/90" />
            <input type="email" placeholder="PokéMail Address" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 bg-white/90" />
            <textarea 
              placeholder="Your Challenge Terms (Include your strongest Pokémon!)" 
              rows="4" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 bg-white/90"
            />
            <motion.button
              type="submit"
              className="bg-gradient-to-r from-red-600 to-blue-600 text-white py-3 px-6 rounded-lg hover:from-red-700 hover:to-blue-700 transition w-full font-bold shadow-lg"
              whileTap={{ scale: 0.97 }}
            >
              Send Battle Request
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-600 via-blue-600 to-yellow-500 text-white py-6 text-center">
        <p className="text-sm">
          © 2025 Pokémon World Champion |{' '}
          <a href="mailto:ash.champion@example.com" className="underline hover:text-yellow-200 transition">
            ash.champion@example.com
          </a>
        </p>
        <p className="mt-2 text-xs opacity-80">Officially recognized by the Pokémon League Committee</p>
      </footer>

      {/* Custom Animations */}
      <style>
        {`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-wave { display: inline-block; animation: wave 2s infinite; }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease-in-out infinite;
        }
        `}
      </style>
    </div>
  );
}

export default Pokemon
