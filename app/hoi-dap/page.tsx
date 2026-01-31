import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const faqs = [
    {
      q: "Làm sao để biết trình độ tiếng Anh của tôi phù hợp với lớp nào?",
      a: "Bạn sẽ được làm bài kiểm tra đầu vào (Placement Test) miễn phí tại trung tâm gồm 4 kỹ năng Nghe - Nói - Đọc - Viết. Dựa trên kết quả, chuyên viên sẽ tư vấn lộ trình học phù hợp nhất."
    },
    {
      q: "Học phí tại trung tâm là bao nhiêu?",
      a: "Học phí tùy thuộc vào từng khóa học và cấp độ. Trung tâm thường xuyên có các chương trình ưu đãi, học bổng. Vui lòng liên hệ hotline hoặc đến trực tiếp để được báo giá chi tiết."
    },
    {
      q: "Trung tâm có cam kết đầu ra không?",
      a: "Có. Tất cả các khóa luyện thi chứng chỉ quốc tế (IELTS, TOEIC, Cambridge, MOS) đều có cam kết đầu ra bằng văn bản. Nếu không đạt, học viên được học lại miễn phí."
    },
    {
      q: "Nếu bận việc có được bảo lưu khóa học không?",
      a: "Học viên được phép bảo lưu khóa học trong vòng 6 tháng nếu có lý do chính đáng và thông báo trước cho văn phòng ghi danh."
    },
    {
      q: "Lịch học có linh động không?",
      a: "Trung tâm có nhiều ca học: Sáng - Chiều - Tối, bao gồm cả lớp cuối tuần (T7-CN) để học viên dễ dàng sắp xếp thời gian."
    }
  ];

  return (
    <div className="pb-20">
      <section className="bg-primary text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Câu Hỏi Thường Gặp</h1>
          <p className="text-lg text-blue-100">Giải đáp nhanh các thắc mắc của bạn về khóa học và dịch vụ.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-12 max-w-3xl">
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 flex items-start gap-3 mb-3">
                  <HelpCircle className="text-secondary shrink-0 mt-1" size={20} />
                  {item.q}
                </h3>
                <p className="text-gray-600 pl-8 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
