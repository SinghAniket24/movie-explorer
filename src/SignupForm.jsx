function SignupForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-purple-300 via-blue-200 to-pink-200 animate-gradient-x p-4">
      <form className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-md w-full border border-white/20">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">Create your account</h2>

        <label className='block mb-2 text-gray-700 font-semibold' htmlFor="name">Full Name</label>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 shadow-sm"
          type="text" id="name" placeholder="John Doe"
        />

        <label className="block mb-2 text-gray-700 font-semibold" htmlFor="email">Email Address</label>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 shadow-sm"
          type="email" id="email" placeholder="john@example.com"
        />

        <label className="block mb-2 text-gray-700 font-semibold" htmlFor="password">Password</label>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6 shadow-sm"
          type="password" id="password" placeholder="********"
        />

        <button
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
