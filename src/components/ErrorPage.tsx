import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

interface RouteError {
  statusText?: string;
  message?: string;
}

const ErrorPage: React.FC = () => {
  const error = useRouteError() as RouteError | null;

  const errorMessage = error
    ? error.statusText || error.message || "未知错误"
    : "抱歉,发生了未知错误";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">4😵4</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">哎呀!出错了</h2>
        <p className="text-xl text-gray-600 mb-6">
          {errorMessage}
        </p>
        <div className="mb-8">
          <span className="text-5xl animate-bounce inline-block">🍽️</span>
        </div>
        <p className="text-lg text-gray-600 mb-6">
          看来我们的食物抽签器也找不到这个页面呢!不如我们回到首页再试试?
        </p>
        <Link
          to="/"
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 inline-block"
        >
          返回首页
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
