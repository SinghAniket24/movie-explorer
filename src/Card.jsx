function Card() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      {/* Changed background to a smooth gradient for a fresher look */}
      
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center w-80 max-w-full
                      transform hover:scale-105 transition-transform duration-300 ease-in-out">
        {/* Added bigger padding, larger rounding, stronger shadow */}
        {/* Added smooth hover zoom effect */}

        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png"
          alt="profile"
          className="mx-auto rounded-full w-28 h-28 mb-6 ring-4 ring-blue-400 shadow-lg object-cover"
        />
        {/* Bigger image (w-28/h-28), added a colored ring around image with shadow */}

        <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-wide">
          Aniket Singh
        </h2>
        {/* Bigger text, bolder font, added letter spacing */}

        <p className="text-indigo-600 font-medium mb-4">
          IT Student & Web Developer
        </p>
        {/* Changed text color to indigo and made font medium weight */}

        <p className="text-gray-700 text-sm mb-6 leading-relaxed">
          Learning React, Tailwind, and building cool stuff!
        </p>
        {/* Slightly darker text with more line height for readability */}

        <button className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow-md
                           hover:bg-indigo-700 active:scale-95 transition transform duration-150">
          Contact Me
        </button>
        {/* Rounded-full button, shadow, color changes on hover, subtle press scale effect */}
      </div>
    </div>
  );
}

export default Card;
