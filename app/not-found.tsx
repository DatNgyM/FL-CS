import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-extrabold text-gray-200">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mt-4">Trang Không Tồn Tại</h2>
      <p className="text-gray-600 mt-2 max-w-md mx-auto">
        Có vẻ như trang bạn đang tìm kiếm đã bị xóa hoặc đường dẫn không đúng.
      </p>
      <Link 
        href="/" 
        className="mt-8 bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition-colors inline-flex items-center gap-2"
      >
        Về Trang Chủ
      </Link>
    </div>
  );
}
