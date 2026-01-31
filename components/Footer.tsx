import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 border-b-2 border-accent inline-block pb-2">Về Hoàng Phúc</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Trung tâm Tin học & Ngoại ngữ Hoàng Phúc cam kết mang đến chất lượng đào tạo hàng đầu, môi trường học tập hiện đại và thân thiện cho mọi lứa tuổi.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="bg-slate-700 hover:bg-blue-600 p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="bg-slate-700 hover:bg-red-600 p-2 rounded-full transition-colors">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 border-b-2 border-accent inline-block pb-2">Liên Kết Nhanh</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-white hover:pl-1 transition-all">Trang chủ</Link></li>
              <li><Link href="/gioi-thieu" className="hover:text-white hover:pl-1 transition-all">Giới thiệu</Link></li>
              <li><Link href="/khoa-hoc" className="hover:text-white hover:pl-1 transition-all">Khóa học tiếng Anh</Link></li>
              <li><Link href="/khoa-hoc" className="hover:text-white hover:pl-1 transition-all">Khóa học Tin học</Link></li>
              <li><Link href="/tuyen-dung" className="hover:text-white hover:pl-1 transition-all">Tuyển dụng</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 border-b-2 border-accent inline-block pb-2">Hỗ Trợ</h3>
            <ul className="space-y-3">
              <li><Link href="/hoi-dap" className="hover:text-white hover:pl-1 transition-all">Hỏi đáp thường gặp</Link></li>
              <li><Link href="/dang-ky-thi-thu" className="hover:text-white hover:pl-1 transition-all">Đăng ký thi thử</Link></li>
              <li><Link href="/chinh-sach-bao-mat" className="hover:text-white hover:pl-1 transition-all">Chính sách bảo mật</Link></li>
              <li><Link href="/dieu-khoan-su-dung" className="hover:text-white hover:pl-1 transition-all">Điều khoản sử dụng</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 border-b-2 border-accent inline-block pb-2">Liên Hệ</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin className="text-accent shrink-0 mt-1" size={18} />
                <span>D11 Tổ 4, Lê Thị Riêng, P. Thới An, Q.12, TP.HCM</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="text-accent shrink-0" size={18} />
                <span>08. 8 863 328</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="text-accent shrink-0" size={18} />
                <span>info@ngoainguhoangphuc.edu.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Trung tâm Tin học & Ngoại ngữ Hoàng Phúc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}