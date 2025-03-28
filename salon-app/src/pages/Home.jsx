// === File: src/pages/Home.jsx ===
import React from "react";

const Home = () => {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 leading-tight">
        Book your next hairstyle in just a few clicks - for men or women
      </h1>
      <div className="flex justify-center gap-4 mb-8">
        <button className="px-6 py-2 rounded-full bg-[#d8a172] text-white font-medium hover:opacity-90">
          I'm looking for a hairstylist
        </button>
        <button className="px-6 py-2 rounded-full border border-[#d8a172] text-[#d8a172] font-medium hover:bg-[#fdf0e6]">
          I'm a hairstylist
        </button>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-10">
        <img
          src="/images/woman.jpg"
          alt="Woman"
          className="rounded-2xl w-full h-72 object-cover"
        />
        <img
          src="/images/man.jpg"
          alt="Man"
          className="rounded-2xl w-full h-72 object-cover"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Featured Hairstylists</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {[
          {
            name: "Emily Johnson",
            location: "Los Angeles",
            image: "/images/stylist1.jpg",
          },
          {
            name: "Sarah Williams",
            location: "New York",
            image: "/images/stylist2.jpg",
          },
          {
            name: "Michael Smith",
            location: "Chicago",
            image: "/images/stylist3.jpg",
          },
        ].map((stylist, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow-md">
            <img
              src={stylist.image}
              alt={stylist.name}
              className="w-20 h-20 rounded-full mx-auto mb-2"
            />
            <p className="font-bold">{stylist.name}</p>
            <p className="text-sm text-gray-500">{stylist.location}</p>
            <p className="text-yellow-400">★★★★★</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-4">How it works</h2>
      <div className="grid grid-cols-3 gap-6 text-center mb-10">
        <div>
          <p className="text-4xl">🔍</p>
          <p>Find a stylist</p>
        </div>
        <div>
          <p className="text-4xl">📅</p>
          <p>Book appointment</p>
        </div>
        <div>
          <p className="text-4xl">✂️</p>
          <p>Get your hair styled</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-2">
        What our clients are saying
      </h2>
      <blockquote className="italic bg-white p-6 rounded-xl shadow max-w-xl mx-auto">
        “Great experience! My stylist was fantastic and really understood what I
        wanted.”
      </blockquote>
    </div>
  );
};

export default Home;
