export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">SahlanSuuq</h1>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-gray-600 hover:text-green-600">
              Gal
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
              Iibso
            </button>
          </div>
        </div>
      </header>

      {/* Search */}
      <div className="bg-green-600 py-10 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Wax ka iibso, wax ku iibso
        </h2>
        <div className="max-w-xl mx-auto flex gap-2">
          <input
            type="text"
            placeholder="Maxaad raadinaysaa?"
            className="flex-1 px-4 py-3 rounded-lg text-gray-800"
          />
          <button className="px-6 py-3 bg-white text-green-600 font-bold rounded-lg">
            Raadi
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h3 className="text-xl font-bold mb-4">Qaybaha</h3>
        <div className="grid grid-cols-3 gap-4">
          {["📱 Telefoonada", "🚗 Baabuurta", "🏠 Guriyaha", "👕 Dharka", "💻 Kombiyuutarka", "🛋️ Alaabta Guriga"].map((cat) => (
            <div key={cat} className="bg-white p-4 rounded-lg shadow-sm text-center cursor-pointer hover:shadow-md">
              {cat}
            </div>
          ))}
        </div>
      </div>

      {/* Listings */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h3 className="text-xl font-bold mb-4">Xayeysiisyada Cusub</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: "iPhone 13", price: "$300", location: "Mogadishu" },
            { title: "Toyota Corolla 2019", price: "$15,000", location: "Hargeisa" },
            { title: "Laptop Dell", price: "$500", location: "Kismaayo" },
            { title: "Guri 3 Qol", price: "$50,000", location: "Mogadishu" },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md">
              <div className="bg-gray-200 h-32"></div>
              <div className="p-3">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-green-600 font-bold">{item.price}</p>
                <p className="text-gray-500 text-sm">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
