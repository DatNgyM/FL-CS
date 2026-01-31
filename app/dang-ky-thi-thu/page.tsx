import React from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function RegisterTrialPage() {
  return (
    <div className="pb-20">
      <section className="bg-primary text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Đăng Ký Thi Thử Miễn Phí</h1>
          <p className="text-lg text-blue-100">Kiểm tra trình độ tiếng Anh chuẩn quốc tế ngay hôm nay.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-12">
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Form Đăng Ký</h2>
                <div className="flex flex-col gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Miễn phí 100% lệ phí thi</div>
                    <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Nhận kết quả ngay sau khi thi</div>
                    <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Tư vấn lộ trình học 1-1 với giáo viên</div>
                </div>
            </div>

            <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Họ và tên học viên *</label>
                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none" placeholder="Nguyễn Văn A" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Năm sinh *</label>
                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none" placeholder="2015" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Số điện thoại *</label>
                        <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none" placeholder="0909..." />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none" placeholder="email@example.com" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Trình độ muốn kiểm tra *</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none bg-white">
                        <option>Tiếng Anh Mầm Non</option>
                        <option>Tiếng Anh Thiếu Nhi (Starters/Movers/Flyers)</option>
                        <option>Tiếng Anh Thiếu Niên (KET/PET)</option>
                        <option>IELTS</option>
                        <option>TOEIC</option>
                        <option>Tin Học Văn Phòng</option>
                    </select>
                </div>

                <button type="button" className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2 mt-4">
                    <Send size={20} /> Đăng Ký Ngay
                </button>
            </form>
        </div>
      </section>
    </div>
  );
}
