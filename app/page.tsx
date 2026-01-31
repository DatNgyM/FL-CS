import Hero from "@/components/Hero";
import { Users, Award, BookOpen, Clock, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-20">
      
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="container mx-auto px-4 -mt-10 relative z-30">
        <div className="bg-white rounded-xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border border-gray-100">
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-primary">10+</h3>
            <p className="text-gray-500 font-medium">Năm Kinh Nghiệm</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-primary">5000+</h3>
            <p className="text-gray-500 font-medium">Học Viên Tốt Nghiệp</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-primary">50+</h3>
            <p className="text-gray-500 font-medium">Giáo Viên Giỏi</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-primary">100%</h3>
            <p className="text-gray-500 font-medium">Cam Kết Đầu Ra</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4">Tại Sao Chọn Hoàng Phúc?</h2>
          <p className="text-gray-600">Chúng tôi tự hào mang lại giá trị thực cho học viên thông qua phương pháp giảng dạy hiện đại và tận tâm.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="w-10 h-10 text-secondary" />,
              title: "Giáo Viên Tâm Huyết",
              desc: "Đội ngũ giáo viên giàu kinh nghiệm, nhiệt tình, có chứng chỉ sư phạm quốc tế."
            },
            {
              icon: <BookOpen className="w-10 h-10 text-secondary" />,
              title: "Giáo Trình Chuẩn",
              desc: "Chương trình học được biên soạn công phu, cập nhật liên tục theo chuẩn quốc tế."
            },
            {
              icon: <Award className="w-10 h-10 text-secondary" />,
              title: "Chứng Chỉ Quốc Tế",
              desc: "Đào tạo và tổ chức thi các chứng chỉ Cambridge, TOEIC, IELTS, MOS..."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center group">
              <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">Khóa Học Nổi Bật</h2>
              <p className="text-gray-600">Các chương trình đào tạo được quan tâm nhất</p>
            </div>
            <Link href="/khoa-hoc" className="hidden md:flex items-center text-secondary font-semibold hover:text-primary gap-1">
              Xem tất cả <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Tiếng Anh Thiếu Nhi",
                level: "Starters / Movers / Flyers",
                schedule: "T2-4-6 hoặc T3-5-7",
                price: "Liên hệ",
                image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80"
              },
              {
                title: "Luyện Thi IELTS",
                level: "Mục tiêu 6.5+",
                schedule: "Linh hoạt",
                price: "Liên hệ",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
              },
              {
                title: "Tin Học Văn Phòng",
                level: "Cơ bản - Nâng cao",
                schedule: "Tối 2-4-6",
                price: "Liên hệ",
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
              }
            ].map((course, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group border border-gray-100">
                <div className="h-48 overflow-hidden relative">
                  <Image 
                    src={course.image} 
                    alt={course.title} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    Sắp khai giảng
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Award size={16} className="text-secondary" /> {course.level}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Clock size={16} className="text-secondary" /> {course.schedule}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-primary font-bold">{course.price}</span>
                    <button className="text-sm font-semibold text-secondary hover:text-accent transition-colors">
                      Chi tiết
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
             <Link href="/khoa-hoc" className="inline-flex items-center text-secondary font-semibold hover:text-primary gap-1">
              Xem tất cả khóa học <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="container mx-auto px-4 mb-10">
        <div className="bg-primary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sẵn sàng bắt đầu hành trình chinh phục ngoại ngữ?</h2>
            <p className="text-blue-100 text-lg mb-10">Đăng ký kiểm tra trình độ miễn phí và nhận tư vấn lộ trình học phù hợp nhất với bạn ngay hôm nay.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link href="/dang-ky-thi-thu" className="bg-white text-primary px-8 py-3.5 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg inline-block">
                Đăng Ký Test Đầu Vào
              </Link>
              <Link href="/lien-he" className="bg-transparent border-2 border-white/30 text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-white/10 transition-colors inline-block">
                Liên Hệ Tư Vấn
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}