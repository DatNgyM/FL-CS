import React from 'react';
import { Target, Heart, Award, Users } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 pb-20">
      {/* Header Banner */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Về Chúng Tôi</h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-100">
            Hơn 10 năm đồng hành cùng học viên trên con đường chinh phục tri thức
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] w-full">
              <Image 
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80" 
                alt="Đội ngũ Hoàng Phúc" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-primary">Câu Chuyện Của Chúng Tôi</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Được thành lập vào năm 2010, Trung tâm Ngoại ngữ & Tin học Hoàng Phúc xuất phát từ niềm đam mê giáo dục và mong muốn mang lại cơ hội học tập chất lượng cao cho cộng đồng tại Quận 12 và các khu vực lân cận.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Trải qua hơn một thập kỷ phát triển, chúng tôi tự hào đã đào tạo hơn 5.000 học viên, giúp họ không chỉ đạt được các chứng chỉ quốc tế mà còn tự tin sử dụng ngôn ngữ và kỹ năng tin học trong công việc và cuộc sống.
            </p>
            <div className="pt-4">
              <div className="flex gap-8">
                <div>
                  <h4 className="text-4xl font-bold text-accent mb-1">10+</h4>
                  <p className="text-gray-500 font-medium">Năm hoạt động</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-accent mb-1">5k+</h4>
                  <p className="text-gray-500 font-medium">Học viên</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-accent mb-1">100%</h4>
                  <p className="text-gray-500 font-medium">Giáo viên đạt chuẩn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Sứ Mệnh</h3>
              <p className="text-gray-600">
                Mang đến môi trường giáo dục chất lượng, thân thiện và hiệu quả, giúp học viên khai phá tiềm năng bản thân.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Tầm Nhìn</h3>
              <p className="text-gray-600">
                Trở thành hệ thống đào tạo Ngoại ngữ và Tin học hàng đầu khu vực, là nơi tin cậy của phụ huynh và học viên.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Giá Trị Cốt Lõi</h3>
              <p className="text-gray-600">
                Tâm huyết - Chất lượng - Sáng tạo - Hiệu quả. Chúng tôi đặt sự tiến bộ của học viên lên hàng đầu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Teachers */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4">Đội Ngũ Giáo Viên</h2>
          <p className="text-gray-600">
            Chúng tôi quy tụ những giáo viên giỏi, giàu kinh nghiệm và đầy nhiệt huyết với nghề giáo.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="group">
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4]">
                <Image 
                  src={`https://images.unsplash.com/photo-${item === 1 ? '1573496359142-b8d87734a5a2' : item === 2 ? '1580894732444-8ecded7900cd' : item === 3 ? '1544717297-fa95b6ee9643' : '1595956554381-01d12fcc0f43'}?w=800&q=80`}
                  alt="Teacher"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-medium">"Teaching is not just a job, it's a passion."</p>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 text-center">Thầy/Cô Giáo {item}</h3>
              <p className="text-sm text-center text-secondary font-medium">Giáo viên Tiếng Anh</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}