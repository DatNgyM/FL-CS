'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, User, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Trang Chủ', href: '/' },
    { name: 'Giới Thiệu', href: '/gioi-thieu' },
    { name: 'Khóa Học', href: '/khoa-hoc' },
    { name: 'Lịch Khai Giảng', href: '/lich-khai-giang' },
    { name: 'Tin Tức', href: '/tin-tuc' },
    { name: 'Liên Hệ', href: '/lien-he' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <div className="w-full font-sans">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>08. 8 863 328</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>contact@ngoainguhoangphuc.edu.vn</span>
            </div>
          </div>
          <div className="flex gap-4">
            <Link href="/dang-nhap" className="flex items-center gap-1 hover:text-accent transition-colors">
              <User size={14} /> Đăng nhập
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 text-primary">
              <GraduationCap size={40} />
              <div className="leading-tight">
                <h1 className="text-xl font-bold uppercase tracking-wide">Hoàng Phúc</h1>
                <p className="text-xs text-gray-500 font-medium">Tin Học & Ngoại Ngữ</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8 font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors py-2",
                    isActive(item.href)
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-600 hover:text-primary"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link 
                href="/lien-he" 
                className="bg-accent hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold transition-transform hover:-translate-y-0.5 shadow-sm"
              >
                Đăng Ký Ngay
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-medium",
                    isActive(item.href)
                      ? "text-primary"
                      : "text-gray-600 hover:text-primary"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <hr className="border-gray-100" />
              <Link 
                href="/lien-he" 
                className="text-center bg-accent text-white py-2 rounded-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Đăng Ký Ngay
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
