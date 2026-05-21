export default function Login() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        
        {/* Logo */}
        <h1 className="text-3xl font-bold text-green-600 text-center mb-2">
          SahlanSuuq
        </h1>
        <p className="text-gray-500 text-center mb-6">
          Gal akoonkaaga
        </p>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>

          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700">
            Gal
          </button>
        </div>

        {/* Register link */}
        <p className="text-center text-gray-500 mt-6">
          Akoon ma lihid?{" "}
          <a href="/register" className="text-green-600 font-semibold">
            Is diiwaan geli
          </a>
        </p>

      </div>
    </main>
  );
}
