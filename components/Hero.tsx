'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1950&q=80"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary/90 to-primary/60"></div>

      <div className="container mx-auto px-4 relative z-20 text-white">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm mb-6 inline-block">
              🎓 Trung tâm uy tín hàng đầu Q.12
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Khơi Nguồn Tri Thức <br/>
              <span className="text-accent">Vươn Tới Tương Lai</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed opacity-90">
              Môi trường học tập hiện đại, giáo trình chuẩn quốc tế cùng đội ngũ giáo viên tâm huyết. Cam kết đầu ra và hỗ trợ học viên trọn đời.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/lien-he" 
                className="bg-accent hover:bg-orange-600 text-white px-8 py-3.5 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2"
              >
                Đăng Ký Tư Vấn <ArrowRight size={20} />
              </Link>
              <Link 
                href="/khoa-hoc" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3.5 rounded-full font-bold text-lg transition-all flex items-center justify-center"
              >
                Xem Khóa Học
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}