import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 text-white">
      <div className="text-center mt-16 animate-fade-in-down">
        <h1 className="text-5xl font-bold mb-6 text-white shadow-text">选择困难症解决器</h1>
        <p className="text-2xl mb-6 text-white shadow-text">不知道吃什么?让我们来帮你决定!</p>
      </div>
      
      <div className="flex flex-col items-center mb-16 animate-fade-in-up">
        <div className="text-6xl mb-8">🍽️</div>
        <Link
          to="/foodlottery"
          className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:bg-yellow-300 hover:text-purple-700 shadow-lg"
        >
          开始抽签
        </Link>
      </div>
    </div>
  );
};

export default Home;
