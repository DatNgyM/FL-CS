import React from 'react';
import { Briefcase, CheckCircle, Mail, Phone } from 'lucide-react';

export default function RecruitmentPage() {
  const jobs = [
    {
      id: 1,
      title: "Giáo Viên Tiếng Anh (Full-time/Part-time)",
      salary: "15.000.000 - 25.000.000 VNĐ",
      deadline: "30/03/2026",
      requirements: [
        "Tốt nghiệp Đại học chuyên ngành Sư phạm Anh hoặc Ngôn ngữ Anh.",
        "Có chứng chỉ IELTS 7.0+ hoặc TESOL/CELTA.",
        "Yêu trẻ, kiên nhẫn và có phương pháp sư phạm tốt.",
        "Kinh nghiệm giảng dạy tối thiểu 1 năm."
      ]
    },
    {
      id: 2,
      title: "Nhân Viên Tư Vấn Tuyển Sinh",
      salary: "8.000.000 - 15.000.000 VNĐ + Hoa hồng",
      deadline: "15/03/2026",
      requirements: [
        "Kỹ năng giao tiếp tốt, giọng nói dễ nghe.",
        "Nhanh nhẹn, chủ động trong công việc.",
        "Ưu tiên ứng viên có kinh nghiệm telesales hoặc tư vấn giáo dục.",
        "Sử dụng thành thạo tin học văn phòng."
      ]
    },
    {
      id: 3,
      title: "Trợ Giảng Tiếng Anh (Teaching Assistant)",
      salary: "40.000 - 60.000 VNĐ/giờ",
      deadline: "Liên tục tuyển",
      requirements: [
        "Sinh viên năm 3, 4 chuyên ngành Tiếng Anh.",
        "IELTS 6.0+ hoặc tương đương.",
        "Hỗ trợ giáo viên quản lý lớp học và ôn bài cho học viên.",
        "Năng động, nhiệt tình."
      ]
    }
  ];

  return (
    <div className="pb-20">
      <section className="bg-primary text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Tuyển Dụng Nhân Sự</h1>
          <p className="text-lg text-blue-100">Gia nhập đội ngũ Hoàng Phúc để cùng kiến tạo tương lai.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Job List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-secondary pl-3">Vị Trí Đang Tuyển</h2>
            {jobs.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{job.title}</h3>
                    <p className="text-green-600 font-semibold mt-1">{job.salary}</p>
                  </div>
                  <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
                    Hạn nộp: {job.deadline}
                  </span>
                </div>
                <div className="space-y-2 mb-6">
                  {job.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
                <button className="bg-secondary hover:bg-primary text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors">
                  Ứng Tuyển Ngay
                </button>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Briefcase className="text-primary" /> Tại sao chọn chúng tôi?
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex gap-2"><CheckCircle size={16} className="text-green-500" /> Môi trường làm việc chuyên nghiệp, thân thiện.</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-green-500" /> Chế độ lương thưởng hấp dẫn, rõ ràng.</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-green-500" /> Cơ hội đào tạo và thăng tiến cao.</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-green-500" /> Du lịch hè, team building hàng năm.</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-lg font-bold text-primary mb-4">Liên Hệ Tuyển Dụng</h3>
              <div className="space-y-3 text-sm">
                <p className="flex items-center gap-2 text-gray-700">
                  <Mail size={16} /> hr@ngoainguhoangphuc.edu.vn
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <Phone size={16} /> 08. 8 863 328 (Ms. Thảo)
                </p>
                <p className="text-gray-600 mt-2 text-xs">
                  * Vui lòng gửi CV qua email với tiêu đề: [Vị trí] - [Họ tên]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
