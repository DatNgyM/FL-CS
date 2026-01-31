import React from 'react';
import { ArrowRight, BookOpen, Monitor, Award, Clock, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Tiếng Anh Mầm Non",
      category: "Tiếng Anh Trẻ Em",
      age: "4-6 tuổi",
      desc: "Làm quen với tiếng Anh qua trò chơi, bài hát và hoạt động vui nhộn.",
      image: "https://images.unsplash.com/photo-1587654780291-39c940483713?w=800&q=80",
      price: "Liên hệ"
    },
    {
      id: 2,
      title: "Tiếng Anh Thiếu Nhi (Starters)",
      category: "Tiếng Anh Trẻ Em",
      age: "6-8 tuổi",
      desc: "Xây dựng nền tảng ngữ pháp và từ vựng cơ bản chuẩn Cambridge.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      price: "Liên hệ"
    },
    {
      id: 3,
      title: "Tiếng Anh Thiếu Niên (KET/PET)",
      category: "Tiếng Anh Thiếu Niên",
      age: "11-15 tuổi",
      desc: "Phát triển toàn diện 4 kỹ năng Nghe - Nói - Đọc - Viết.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
      price: "Liên hệ"
    },
    {
      id: 4,
      title: "Luyện Thi IELTS",
      category: "Luyện Thi Quốc Tế",
      age: "15+ tuổi",
      desc: "Chiến thuật làm bài thi hiệu quả, cam kết đầu ra theo mục tiêu.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      price: "Liên hệ"
    },
    {
      id: 5,
      title: "Tin Học Văn Phòng Cơ Bản",
      category: "Tin Học",
      age: "Mọi lứa tuổi",
      desc: "Thành thạo Word, Excel, PowerPoint phục vụ công việc văn phòng.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      price: "Liên hệ"
    },
    {
      id: 6,
      title: "Luyện Thi Chứng Chỉ MOS",
      category: "Tin Học",
      age: "Mọi lứa tuổi",
      desc: "Luyện thi chứng chỉ tin học văn phòng chuẩn quốc tế Microsoft.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
      price: "Liên hệ"
    }
  ];

  return (
    <div className="flex flex-col gap-12 pb-20">
      {/* Header Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Chương Trình Đào Tạo</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Các khóa học được thiết kế bài bản, phù hợp với mọi độ tuổi và nhu cầu học tập.
          </p>
        </div>
      </section>

      {/* Course Categories */}
      <section className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button className="px-6 py-2 bg-primary text-white rounded-full font-medium shadow-md">Tất Cả</button>
          <button className="px-6 py-2 bg-white text-gray-600 hover:bg-gray-100 rounded-full font-medium border border-gray-200 transition-colors">Tiếng Anh Trẻ Em</button>
          <button className="px-6 py-2 bg-white text-gray-600 hover:bg-gray-100 rounded-full font-medium border border-gray-200 transition-colors">Luyện Thi Quốc Tế</button>
          <button className="px-6 py-2 bg-white text-gray-600 hover:bg-gray-100 rounded-full font-medium border border-gray-200 transition-colors">Tin Học</button>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 group flex flex-col h-full">
              <div className="h-48 overflow-hidden relative">
                <Image 
                  src={course.image} 
                  alt={course.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                  {course.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{course.desc}</p>
                
                <div className="space-y-3 mb-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500 gap-2">
                    <Users size={16} className="text-secondary" />
                    <span>Đối tượng: {course.age}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 gap-2">
                    <Award size={16} className="text-secondary" />
                    <span>Cam kết chuẩn đầu ra</span>
                  </div>
                </div>

                <Link href="/khoa-hoc/tieng-anh-mam-non" className="flex items-center justify-between mt-auto">
                  <span className="text-primary font-bold text-lg">{course.price}</span>
                  <div className="flex items-center gap-1 text-sm font-semibold text-white bg-secondary hover:bg-primary px-4 py-2 rounded-lg transition-colors shadow-sm">
                    Đăng Ký <ArrowRight size={16} />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 mt-8">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Bạn chưa biết chọn khóa học nào?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Đừng lo lắng, hãy để chúng tôi giúp bạn kiểm tra trình độ miễn phí và tư vấn lộ trình học tập phù hợp nhất.</p>
          <button className="bg-accent hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-transform hover:-translate-y-1 shadow-lg shadow-orange-500/20">
            Tư Vấn Miễn Phí Ngay
          </button>
        </div>
      </section>
    </div>
  );
}