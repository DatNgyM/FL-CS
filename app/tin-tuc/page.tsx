import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: "Lễ Trao Chứng Chỉ Cambridge Đợt 1 Năm 2026",
      summary: "Chúc mừng hơn 200 học viên đã xuất sắc vượt qua kỳ thi Cambridge Starters, Movers, Flyers vừa qua.",
      date: "25/01/2026",
      category: "Sự Kiện",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80"
    },
    {
      id: 2,
      title: "Thông Báo Lịch Nghỉ Tết Nguyên Đán 2026",
      summary: "Trung tâm xin thông báo lịch nghỉ Tết Nguyên Đán tới toàn thể quý phụ huynh và học viên.",
      date: "15/01/2026",
      category: "Thông Báo",
      image: "https://images.unsplash.com/photo-1596464716127-f9a82642d91e?w=800&q=80"
    },
    {
      id: 3,
      title: "Bí Quyết Đạt Điểm Cao Trong Kỳ Thi IELTS",
      summary: "Chia sẻ kinh nghiệm từ các thủ khoa IELTS 8.0+ tại Hoàng Phúc về phương pháp ôn luyện hiệu quả.",
      date: "10/01/2026",
      category: "Góc Học Tập",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80"
    },
    {
      id: 4,
      title: "Khai Trương Cơ Sở Mới Tại Quận 12",
      summary: "Nhằm đáp ứng nhu cầu học tập ngày càng tăng, Hoàng Phúc chính thức khai trương cơ sở mới với trang thiết bị hiện đại.",
      date: "01/01/2026",
      category: "Tin Tức",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    },
    {
      id: 5,
      title: "Hội Thảo Du Học: Hành Trang Ra Biển Lớn",
      summary: "Cơ hội gặp gỡ đại diện các trường đại học danh tiếng từ Mỹ, Úc, Canada ngay tại trung tâm.",
      date: "20/12/2025",
      category: "Sự Kiện",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
    },
    {
      id: 6,
      title: "Tầm Quan Trọng Của Kỹ Năng Tin Học Văn Phòng",
      summary: "Tại sao MOS là chứng chỉ không thể thiếu đối với sinh viên và người đi làm trong kỷ nguyên số?",
      date: "15/12/2025",
      category: "Góc Học Tập",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
    }
  ];

  return (
    <div className="flex flex-col gap-12 pb-20">
      {/* Header Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Tin Tức & Sự Kiện</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Cập nhật những thông tin mới nhất về hoạt động đào tạo, ưu đãi và chia sẻ kiến thức.
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Main Article */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-96 lg:h-auto">
            <Image 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80" 
              alt="Featured News" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
              <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-3 z-10">Nổi Bật</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors z-10">
                Lễ Tổng Kết & Trao Giải Học Viên Xuất Sắc Năm 2025
              </h2>
              <div className="flex items-center text-gray-300 text-sm gap-4 z-10">
                <span className="flex items-center gap-1"><Calendar size={14} /> 30/12/2025</span>
                <span className="flex items-center gap-1"><Clock size={14} /> 5 phút đọc</span>
              </div>
            </div>
          </div>

          {/* Side Articles */}
          <div className="flex flex-col gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="flex gap-4 group cursor-pointer bg-white p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-1/3 overflow-hidden rounded-lg relative h-32">
                  <Image 
                    src={`https://images.unsplash.com/photo-${i === 1 ? '1571260899304-425eee4c7efc' : '1434030216411-0b793f4b4173'}?w=800&q=80`} 
                    alt="News Thumb" 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 33vw, 15vw"
                  />
                </div>
                <div className="w-2/3 flex flex-col justify-center">
                  <span className="text-secondary text-xs font-bold mb-2 uppercase">Hoạt động</span>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {i === 1 ? "Hoạt động ngoại khóa: Summer Camp 2025 - Khám phá thiên nhiên" : "Workshop: Phương pháp học từ vựng siêu tốc cho người mất gốc"}
                  </h3>
                  <div className="flex items-center text-gray-500 text-xs gap-3">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {i === 1 ? "20/06/2025" : "15/06/2025"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-primary pl-4">Tin Tức Mới Nhất</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 flex flex-col h-full group">
              <div className="h-48 overflow-hidden relative">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                  {item.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-gray-500 text-xs gap-3 mb-3">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {item.summary}
                </p>
                <Link href="/tin-tuc/le-trao-chung-chi" className="flex items-center gap-1 text-sm font-semibold text-secondary hover:text-primary mt-auto group/link">
                  Đọc tiếp <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 gap-2">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50">
                &lt;
            </button>
            <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-md">
                1
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
                2
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
                3
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
                &gt;
            </button>
        </div>
      </section>
    </div>
  );
}