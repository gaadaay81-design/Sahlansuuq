"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://eilhtjnpvexwwsaocgd.supabase.co",
  );

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("products").insert([
      {
        title,
        description,
        price,
        image,
        location,
      },
    ]);

    if (error) {
      alert("Qalad dhacay");
    } else {
      alert("Waa la daabacay");
      setTitle("");
      setDescription("");
      setPrice("");
      setImage("");
      setLocation("");
    }
  };

  return (
    <div className="min-h-screen p-5 bg-white">
      <h1 className="text-3xl font-bold mb-5">Ku dar xayeysiis</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-3 rounded-xl"
          placeholder="Cinwaan"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full border p-3 rounded-xl"
          placeholder="Faahfaahin"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          className="w-full border p-3 rounded-xl"
          placeholder="Qiimaha"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          className="w-full border p-3 rounded-xl"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <input
          className="w-full border p-3 rounded-xl"
          placeholder="Goobta"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button className="bg-red-600 text-white w-full p-3 rounded-xl">
          Daabac
        </button>
      </form>
    </div>
  );
}
