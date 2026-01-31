import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Youtube, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-12 pb-20">
      {/* Header Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Liên Hệ</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-secondary pl-4">Thông Tin Liên Hệ</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Đừng ngần ngại liên hệ với chúng tôi để được tư vấn về khóa học, lịch khai giảng hoặc bất kỳ thông tin nào bạn cần. Đội ngũ tư vấn viên của Hoàng Phúc luôn sẵn lòng hỗ trợ.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Địa Chỉ</h3>
                <p className="text-gray-600 text-sm">D11 Tổ 4, Lê Thị Riêng, P. Thới An, Q.12, TP.HCM</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Phone size={24} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Điện Thoại</h3>
                <p className="text-gray-600 text-sm font-semibold">08. 8 863 328</p>
                <p className="text-gray-500 text-xs">Hỗ trợ 24/7</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
                <div className="w-12 h-12 bg-orange-50 text-accent rounded-full flex items-center justify-center mb-4">
                  <Mail size={24} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600 text-sm">info@ngoainguhoangphuc.edu.vn</p>
                <p className="text-gray-600 text-sm">contact@ngoainguhoangphuc.edu.vn</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Giờ Làm Việc</h3>
                <p className="text-gray-600 text-sm">Thứ 2 - Thứ 7: 08:00 - 21:00</p>
                <p className="text-gray-600 text-sm">Chủ Nhật: 08:00 - 17:00</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-4">Mạng Xã Hội</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  <Youtube size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Gửi Tin Nhắn</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Họ và tên <span className="text-red-500">*</span></label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Nhập họ tên của bạn" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Số điện thoại <span className="text-red-500">*</span></label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Nhập số điện thoại" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Nhập địa chỉ email" />
              </div>

              <div className="space-y-2">
                <label htmlFor="content" className="text-sm font-medium text-gray-700">Nội dung cần tư vấn</label>
                <textarea id="content" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="Bạn quan tâm đến khóa học nào?"></textarea>
              </div>

              <button type="button" className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2">
                <Send size={20} /> Gửi Tin Nhắn Ngay
              </button>
              
              <p className="text-xs text-center text-gray-500">
                Bằng cách gửi tin nhắn, bạn đồng ý để chúng tôi liên hệ tư vấn qua số điện thoại hoặc email.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] w-full bg-gray-200 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4206639947846!2d106.64335831526078!3d10.855574760696956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529a676f62957%3A0x6e2f1b0a5a67923e!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4Ft!5e0!3m2!1svi!2s!4v1652784562547!5m2!1svi!2s" 
          width="100%" 
          height="100%" 
          style={{border:0}} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </section>
    </div>
  );
}
