import React from 'react';
import { ArrowLeft, CheckCircle, Calendar, Clock, BookOpen, Users, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  // Demo data - in a real app, fetch based on slug
  const course = {
    title: "Tiếng Anh Mầm Non (Kindy)",
    description: "Chương trình được thiết kế đặc biệt cho trẻ từ 4-6 tuổi, giúp các bé làm quen với tiếng Anh một cách tự nhiên thông qua các hoạt động vui chơi, bài hát và câu chuyện.",
    image: "https://images.unsplash.com/photo-1587654780291-39c940483713?w=1200&q=80",
    features: [
      "Phương pháp học mà chơi, chơi mà học",
      "Giáo viên bản ngữ trực tiếp giảng dạy",
      "Phát triển kỹ năng giao tiếp phản xạ",
      "Giáo trình chuẩn Cambridge (Pre-Starters)"
    ],
    curriculum: [
      { week: "Tuần 1-4", content: "Làm quen bảng chữ cái & số đếm" },
      { week: "Tuần 5-8", content: "Chủ đề Gia đình & Bạn bè" },
      { week: "Tuần 9-12", content: "Chủ đề Màu sắc & Động vật" },
      { week: "Tuần 13-16", content: "Ôn tập & Kiểm tra cuối khóa" }
    ],
    schedule: "Tối thứ 2-4-6 hoặc 3-5-7 (17:30 - 19:00)",
    tuition: "Liên hệ để nhận ưu đãi",
    duration: "3 tháng / khóa"
  };

  return (
    <div className="pb-20">
      {/* Hero Banner */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
            <Image 
              src={course.image} 
              alt={course.title} 
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center text-white">
            <Link href="/khoa-hoc" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
                <ArrowLeft size={20} /> Quay lại danh sách
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl text-gray-200 max-w-2xl">{course.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
                {/* Intro */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Giới Thiệu Khóa Học</h2>
                    <div className="prose max-w-none text-gray-600">
                        <p className="mb-4">
                            Khóa học {course.title} tại Hoàng Phúc English Center tập trung vào việc xây dựng nền tảng vững chắc cho học viên. Chúng tôi cam kết mang lại môi trường học tập năng động, sáng tạo.
                        </p>
                        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-4">Điểm Nổi Bật</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {course.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Curriculum */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Lộ Trình Học Tập</h2>
                    <div className="space-y-4">
                        {course.curriculum.map((item, idx) => (
                            <div key={idx} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <div className="font-bold text-primary whitespace-nowrap">{item.week}</div>
                                <div className="text-gray-700">{item.content}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
                    <div className="text-3xl font-bold text-primary mb-6 text-center">{course.tuition}</div>
                    
                    <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3 text-gray-600 border-b border-gray-100 pb-3">
                            <Clock className="text-secondary" size={20} />
                            <span>Thời lượng: {course.duration}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600 border-b border-gray-100 pb-3">
                            <Calendar className="text-secondary" size={20} />
                            <span>Lịch học: {course.schedule}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600 border-b border-gray-100 pb-3">
                            <Users className="text-secondary" size={20} />
                            <span>Sĩ số: 10-15 học viên</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                            <BookOpen className="text-secondary" size={20} />
                            <span>Giáo trình: Cambridge</span>
                        </div>
                    </div>

                    <Link href="/lien-he" className="block w-full bg-accent hover:bg-orange-600 text-white text-center font-bold py-3 rounded-xl transition-colors shadow-md mb-3">
                        Đăng Ký Tư Vấn Ngay
                    </Link>
                    <p className="text-xs text-center text-gray-500">
                        * Ưu đãi đặc biệt khi đăng ký nhóm
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}