import React, { useState } from "react";

export default function App() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div className={`min-h-screen p-6 transition-colors duration-500`} style={{ backgroundColor: bgColor }}>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Выбери цвет:</h1>

      <div className="space-x-4">
        <button
          className="px-6 py-3 rounded-lg text-white font-semibold shadow-md transition hover:scale-105 bg-red-500 hover:bg-red-600"
          onClick={() => setBgColor("#ef4444")} // Tailwind red-500
        >
          Красный
        </button>

        <button
          className="px-6 py-3 rounded-lg text-white font-semibold shadow-md transition hover:scale-105 bg-green-500 hover:bg-green-600"
          onClick={() => setBgColor("#22c55e")} // Tailwind green-500
        >
          Зелёный
        </button>

        <button
          className="px-6 py-3 rounded-lg text-white font-semibold shadow-md transition hover:scale-105 bg-blue-500 hover:bg-blue-600"
          onClick={() => setBgColor("#3b82f6")} // Tailwind blue-500
        >
          Синий
        </button>
      </div>
    </div>
  );
}
