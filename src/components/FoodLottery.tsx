import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FoodLottery: React.FC = () => {
  const [selectedFood, setSelectedFood] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  
  const foods = ["🍕", "🍣", "🍔", "🥗", "🍜", "🍖", "🍲", "🍱", "🌮", "🍝"];

  const drawFood = () => {
    setIsSpinning(true);
    let counter = 0;
    const intervalId = setInterval(() => {
      setSelectedFood(foods[Math.floor(Math.random() * foods.length)]);
      counter++;
      if (counter >= 20) {
        clearInterval(intervalId);
        setIsSpinning(false);
      }
    }, 100);
  };

  useEffect(() => {
    if (!isSpinning && selectedFood) {
      const timer = setTimeout(() => {
        setSelectedFood(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSpinning, selectedFood]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 text-white">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">今天吃什么?</h2>
        <div className="mb-8">
          <div className={`text-9xl mb-4 transition-all duration-100 ${isSpinning ? 'animate-spin' : ''}`}>
            {selectedFood || "🍽️"}
          </div>
          <button
            onClick={drawFood}
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            disabled={isSpinning}
          >
            {isSpinning ? "抽签中..." : "开始抽签"}
          </button>
        </div>
        {selectedFood && !isSpinning && (
          <p className="mt-6 text-xl font-semibold text-gray-700 animate-bounce">
            今天就吃 <span className="text-3xl text-indigo-600">{selectedFood}</span> 吧!
          </p>
        )}
        <Link to="/" className="mt-8 text-blue-500 hover:text-blue-600 block">返回首页</Link>
      </div>
    </div>
  );
};

export default FoodLottery;
