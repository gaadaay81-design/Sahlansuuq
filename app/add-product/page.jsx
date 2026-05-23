"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase
      .from("products")
      .insert([{ title, description, price, location }]);
    setLoading(false);
    if (!error) setSuccess(true);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <a href="/" className="text-green-600 font-bold text-xl">
            ← SahlanSuuq
          </a>
        </div>
      </header>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Xayeysiis Cusub Geli</h1>
        {success && (
          <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-4">
            ✅ Xayeysiiskaagu waa la keydiyay!
          </div>
        )}
        <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cinwaanka</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Tusaale: iPhone 13" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Faahfaahin</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Qiimaha ($)</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Magaalada</label>
            <select value={location} onChange={(e) => setLocation(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg">
              <option value="">Dooro magaalo</option>
              <option value="Mogadishu">Mogadishu</option>
              <option value="Hargeisa">Hargeisa</option>
              <option value="Kismaayo">Kismaayo</option>
              <option value="Bosaso">Bosaso</option>
              <option value="Garoowe">Garoowe</option>
            </select>
          </div>
          <button onClick={handleSubmit} disabled={loading} className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold">
            {loading ? "Sugid..." : "Xayeysiiska Geli"}
          </button>
        </div>
      </div>
    </main>
  );
}
