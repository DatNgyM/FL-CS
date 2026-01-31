import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  // Demo data
  const article = {
    title: "Lễ Trao Chứng Chỉ Cambridge Đợt 1 Năm 2026",
    date: "25/01/2026",
    author: "Admin",
    readTime: "5 phút đọc",
    category: "Sự Kiện",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=80",
    content: [
      "Ngày 25/01/2026 vừa qua, Trung tâm Ngoại ngữ Hoàng Phúc đã long trọng tổ chức Lễ trao chứng chỉ Cambridge English cho hơn 200 học viên xuất sắc vượt qua kỳ thi Starters, Movers và Flyers.",
      "Buổi lễ diễn ra trong không khí trang trọng nhưng cũng đầy ấm cúng với sự tham gia của Ban Giám đốc trung tâm, quý thầy cô giáo, quý phụ huynh và đặc biệt là các em học viên.",
      "Phát biểu tại buổi lễ, Giám đốc Trung tâm chia sẻ: 'Thành tích ngày hôm nay là kết quả của sự nỗ lực không ngừng nghỉ của các em, sự tận tâm dạy dỗ của các thầy cô và sự đồng hành quý báu của quý phụ huynh. Chứng chỉ Cambridge không chỉ là sự ghi nhận năng lực tiếng Anh mà còn là bước đệm vững chắc cho hành trình hội nhập quốc tế của các em.'",
      "Đặc biệt, trong đợt thi này, tỷ lệ học viên đạt điểm tuyệt đối (15 khiên) lên tới 45%, đây là một con số ấn tượng khẳng định chất lượng đào tạo của Hoàng Phúc.",
      "Xin chúc mừng tất cả các em và hy vọng các em sẽ tiếp tục giữ vững niềm đam mê với việc học ngoại ngữ."
    ]
  };

  return (
    <div className="pb-20 pt-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <Link href="/tin-tuc" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-6 transition-colors font-medium">
             <ArrowLeft size={18} /> Quay lại tin tức
        </Link>
        
        <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
                <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Featured Image */}
                    <div className="h-[400px] w-full relative">
                        <Image 
                          src={article.image} 
                          alt={article.title} 
                          fill
                          className="object-cover"
                          priority
                        />
                    </div>
                    
                    <div className="p-8 md:p-12">
                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
                            <span className="bg-blue-50 text-primary px-3 py-1 rounded-full font-bold">{article.category}</span>
                            <span className="flex items-center gap-2"><Calendar size={16} /> {article.date}</span>
                            <span className="flex items-center gap-2"><User size={16} /> {article.author}</span>
                            <span className="flex items-center gap-2"><Clock size={16} /> {article.readTime}</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                            {article.title}
                        </h1>

                        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                            {article.content.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>

                        {/* Share */}
                        <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                            <div className="font-bold text-gray-800 flex items-center gap-2">
                                <Share2 size={20} /> Chia sẻ bài viết:
                            </div>
                            <div className="flex gap-4">
                                <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                                    <Facebook size={18} />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
                                    <Twitter size={18} />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                                    <Linkedin size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            
            <div className="space-y-8">
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-800 mb-6 border-l-4 border-primary pl-3">Tin Liên Quan</h3>
                    <div className="space-y-6">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="group cursor-pointer">
                                <div className="aspect-video rounded-lg overflow-hidden mb-3 relative h-32">
                                    <Image 
                                        src={`https://images.unsplash.com/photo-${i === 1 ? '1596464716127-f9a82642d91e' : '1456513080510-7bf3a84b82f8'}?w=400&q=80`} 
                                        alt="Related" 
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 1024px) 100vw, 25vw"
                                    />
                                </div>
                                <h4 className="font-bold text-gray-800 group-hover:text-primary transition-colors line-clamp-2">
                                    Thông báo lịch nghỉ lễ và các hoạt động ngoại khóa tháng này
                                </h4>
                                <span className="text-xs text-gray-500 mt-2 block">20/01/2026</span>
                            </div>
                        ))}
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
}