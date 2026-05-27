export default function HomePage() {
  const products = [
    {
      title: "iPhone 15 Pro Max",
      price: "$950",
      location: "Stockholm",
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569",
    },
    {
      title: "Toyota Corolla 2020",
      price: "$12,000",
      location: "Göteborg",
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
    },
    {
      title: "Modern Sofa",
      price: "$320",
      location: "Malmö",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    {
      title: "Gaming Laptop",
      price: "$700",
      location: "Uppsala",
      image:
        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
    },
  ];

  const categories = [
    "Baabuur",
    "Electronics",
    "Guryo",
    "Dharka",
    "Jobs",
    "Mobiles",
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-red-600">
            SahlanSuuq
          </h1>

          <div className="hidden md:flex flex-1 mx-8">
            <input
              type="text"
              placeholder="Raadi alaab, category ama magaalo..."
              className="w-full border rounded-l-xl px-4 py-3 outline-none"
            />
            <button className="bg-red-600 text-white px-6 rounded-r-xl font-semibold">
              Search
            </button>
          </div>
<a
  href="/add-product"
  className="bg-red-600 text-white px-5 py-3 rounded-2xl"
>
  Ku dar xayeysiis
  </a>        
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 py-16">
          <div>
            <h2 className="text-5xl font-bold leading-tight mb-6">
              Hel waxaad raadineyso.
              <br />
              Ama iibso waxaad u baahnayn.
            </h2>

            <p className="text-gray-600 text-lg mb-8">
              SahlanSuuq waa marketplace casri ah oo aad ku iibsan
              karto ama ku iibin karto wax kasta.
            </p>

            <div className="flex gap-4">
              <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold">
                Bilow Hadda
              </button>

              <button className="border px-6 py-3 rounded-xl font-semibold">
                Akhri wax badan
              </button>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            alt="hero"
            className="rounded-3xl shadow-xl h-[400px] w-full object-cover"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <div
              key={cat}
              className="bg-white rounded-2xl p-6 text-center shadow hover:shadow-lg transition cursor-pointer"
            >
              <div className="text-4xl mb-3">📦</div>
              <p className="font-semibold">{cat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-bold">
            Xayeysiisyadii ugu dambeeyay
          </h3>

          <button className="border px-4 py-2 rounded-xl">
            Latest
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h4 className="font-bold text-lg mb-2">
                  {product.title}
                </h4>

                <p className="text-red-600 font-bold text-xl mb-2">
                  {product.price}
                </p>

                <p className="text-gray-500">
                  📍 {product.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-10 text-center text-gray-500">
          © 2026 SahlanSuuq — Marketplace Soomaaliya
        </div>
      </footer>
    </div>
  );
}
