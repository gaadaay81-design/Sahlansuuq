export default function HomePage() {
  const products = [
    {
      title: "iPhone 15 Pro Max",
      price: "$950",
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569",
      location: "Stockholm",
    },
    {
      title: "BMW 2022",
      price: "$22,000",
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
      location: "Göteborg",
    },
    {
      title: "Gaming Laptop",
      price: "$780",
      image:
        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
      location: "Malmö",
    },
    {
      title: "Modern Sofa",
      price: "$320",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      location: "Uppsala",
    },
  ];

  const categories = [
    "Baabuur",
    "Mobiles",
    "Electronics",
    "Guryo",
    "Shaqooyin",
    "Dharka",
    "Furniture",
    "Services",
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          <h1 className="text-3xl font-black text-red-600">
            SahlanSuuq
          </h1>

          <div className="hidden md:flex flex-1 mx-8">
            <input
              type="text"
              placeholder="Raadi alaab, magaalo ama category..."
              className="w-full border border-gray-300 rounded-l-2xl px-5 py-3 outline-none"
            />

            <button className="bg-red-600 text-white px-8 rounded-r-2xl font-semibold">
              Search
            </button>
          </div>

          <a
            href="/add-product"
            className="bg-red-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg"
          >
            Ku dar xayeysiis
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center px-4 py-20">

          <div>
            <h2 className="text-6xl font-black leading-tight mb-6">
              Marketplace-ka
              <br />
              ugu weyn Soomaalida
            </h2>

            <p className="text-gray-600 text-xl mb-10">
              Iibso ama iibi wax kasta — phones, baabuur,
              electronics, guryo iyo adeegyo.
            </p>

            <div className="flex gap-5">
              <a
                href="/add-product"
                className="bg-red-600 text-white px-8 py-4 rounded-2xl font-bold"
              >
                Bilow hadda
              </a>

              <button className="border border-gray-300 px-8 py-4 rounded-2xl font-bold">
                Wax badan baro
              </button>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
            alt="marketplace"
            className="rounded-[40px] shadow-2xl h-[500px] w-full object-cover"
          />

        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 py-14">

        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-black">
            Categories
          </h3>

          <button className="text-red-600 font-bold">
            Dhammaan →
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5">

          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 text-center shadow hover:shadow-2xl transition duration-300 cursor-pointer"
            >
              <div className="text-5xl mb-4">📦</div>

              <p className="font-bold text-gray-700">
                {cat}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 pb-20">

        <div className="flex items-center justify-between mb-10">
          <h3 className="text-4xl font-black">
            Xayeysiisyadii ugu dambeeyay
          </h3>

          <button className="text-red-600 font-bold">
            Dhammaan →
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product, i) => (
            <div
              key={i}
              className="bg-white rounded-[30px] overflow-hidden shadow hover:shadow-2xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <h4 className="font-black text-xl mb-3">
                  {product.title}
                </h4>

                <p className="text-red-600 text-2xl font-black mb-2">
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

      {/* FOOTER */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">

          <div>
            <h2 className="text-3xl font-black text-red-600 mb-2">
              SahlanSuuq
            </h2>

            <p className="text-gray-500">
              Marketplace casri ah oo Soomaali ah.
            </p>
          </div>

          <div className="flex gap-6 mt-6 md:mt-0 text-gray-600 font-semibold">
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>

        </div>
      </footer>

    </div>
  );
}
