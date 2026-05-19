// SahlanSuuq Marketplace Demo // Save this file as: app/page.tsx in a Next.js project

export default function SahlanSuuqHomepage() { const products = [ { title: 'iPhone 15 Pro', price: '9,500 kr', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d3fe2?q=80&w=1200&auto=format&fit=crop', }, { title: 'Nike Shoes', price: '850 kr', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop', }, { title: 'Gaming Laptop', price: '6,200 kr', image: 'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop', }, ];

return ( <div className="min-h-screen bg-gray-100 text-gray-900"> <header className="bg-white shadow-sm sticky top-0 z-50"> <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4"> <div className="flex items-center gap-3"> <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-lg shadow-lg"> S </div> <div> <h1 className="text-2xl font-bold"> <span className="text-blue-600">Sahlan</span> <span className="text-green-500">Suuq</span> </h1> <p className="text-xs text-gray-500">Marketplace in Sweden</p> </div> </div>

<nav className="hidden md:flex gap-6 text-sm font-medium">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Categories</a>
        <a href="#" className="hover:text-blue-600">Sell</a>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </nav>

      <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl shadow-md transition-all">
        Post Ad
      </button>
    </div>
  </header>

  <section className="max-w-7xl mx-auto px-6 py-16">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-5xl font-extrabold leading-tight mb-6">
          Buy & Sell Easily with
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
            SahlanSuuq
          </span>
        </h2>

        <p className="text-lg text-gray-600 mb-8">
          The modern Somali marketplace for electronics, fashion, cars,
          and more. Safe, fast, and mobile-friendly.
        </p>

        <div className="flex gap-4 flex-wrap">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-lg text-lg">
            Start Shopping
          </button>

          <button className="bg-white border border-gray-300 hover:border-blue-500 px-6 py-3 rounded-2xl shadow-sm text-lg">
            Sell Product
          </button>
        </div>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop"
          alt="Marketplace"
          className="rounded-3xl shadow-2xl object-cover h-[450px] w-full"
        />
      </div>
    </div>
  </section>

  <section className="max-w-7xl mx-auto px-6 py-10">
    <div className="bg-blue-600 text-white rounded-3xl p-6 shadow-xl text-center">
      <h2 className="text-3xl font-extrabold mb-2">SahlanSuuq Demo</h2>
      <p className="text-lg text-white/90">
        Tijaabo rasmi ah oo marketplace Soomaali ah oo loogu talagalay Muqdisho iyo Soomaaliya.
      </p>
    </div>
  </section>

  <section className="max-w-7xl mx-auto px-6 pb-20">
    <div className="flex items-center justify-between mb-8">
      <h3 className="text-3xl font-bold">Popular Products</h3>

      <input
        type="text"
        placeholder="Search products..."
        className="px-4 py-3 rounded-2xl border border-gray-300 w-72 shadow-sm"
      />
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-64 w-full object-cover"
          />

          <div className="p-6">
            <h4 className="text-2xl font-semibold mb-2">
              {product.title}
            </h4>

            <p className="text-green-600 text-xl font-bold mb-4">
              {product.price}
            </p>

            <button className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-2xl font-semibold shadow-md">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>

        <section className="max-w-7xl mx-auto px-6 pb-20">
    <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-10 text-white shadow-2xl">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-4xl font-extrabold mb-4">
            EVC Plus Payment
          </h3>

          <p className="text-lg text-white/90 mb-6 leading-relaxed">
            Ku iibso oo ku bixi si fudud adigoo isticmaalaya EVC Plus gudaha Muqdisho iyo Soomaaliya oo dhan.
          </p>

          <div className="space-y-3 text-lg">
            <div>✅ Lacag bixin degdeg ah</div>
            <div>✅ Mobile payment ammaan ah</div>
            <div>✅ Seller confirmation</div>
            <div>✅ WhatsApp support</div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 text-gray-900 shadow-xl">
          <h4 className="text-2xl font-bold mb-6">Pay with EVC Plus</h4>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border rounded-2xl"
            />

            <input
              type="text"
              placeholder="Amount"
              className="w-full px-4 py-3 border rounded-2xl"
            />

            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-2xl font-bold text-lg shadow-lg">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer className="bg-black text-white py-10 mt-10">

"bg-black text-white py-10 mt-10"> <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6"> <div> <h4 className="text-2xl font-bold"> <span className="text-blue-500">Sahlan</span> <span className="text-green-400">Suuq</span> </h4> <p className="text-gray-400 mt-2"> Your trusted online marketplace. </p> </div>

<div className="flex gap-6 text-gray-300">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Support</a>
      </div>
    </div>
        <section className="max-w-7xl mx-auto px-6 pb-20">
    <h3 className="text-3xl font-bold mb-8">Categories</h3>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        'Mobiles',
        'Cars',
        'Houses',
        'Fashion',
        'Electronics',
        'Jobs',
        'Furniture',
        'Services',
      ].map((category) => (
        <div
          key={category}
          className="bg-white rounded-3xl p-6 shadow-lg text-center font-semibold hover:scale-105 transition-all"
        >
          {category}
        </div>
      ))}
    </div>
  </section>

  <section className="max-w-4xl mx-auto px-6 pb-20">
    <div className="bg-white rounded-3xl shadow-2xl p-10">
      <h3 className="text-3xl font-bold mb-8 text-center">
        Create Account
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Full Name"
          className="px-4 py-3 border rounded-2xl"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="px-4 py-3 border rounded-2xl"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="px-4 py-3 border rounded-2xl"
        />

        <input
          type="password"
          placeholder="Password"
          className="px-4 py-3 border rounded-2xl"
        />
      </div>

      <button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-green-500 text-white py-4 rounded-2xl text-lg font-bold shadow-lg">
        Register Now
      </button>

      <div className="mt-8 border-t pt-8">
        <h4 className="text-2xl font-bold mb-4">Post New Product</h4>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            className="w-full px-4 py-3 border rounded-2xl"
          />

          <textarea
            placeholder="Product Description"
            className="w-full px-4 py-3 border rounded-2xl h-32"
          />

          <input
            type="text"
            placeholder="Price"
            className="w-full px-4 py-3 border rounded-2xl"
          />

          <button className="w-full bg-black text-white py-4 rounded-2xl font-bold text-lg shadow-lg">
            Upload Product
          </button>
        </div>
      </div>
    </div>
  </section>

  </footer>
</div>

); }
