import React from 'react';
import { Calendar, Clock, MapPin, CheckCircle } from 'lucide-react';

export default function SchedulePage() {
  const classes = [
    {
      id: "AV-01",
      name: "Tiếng Anh Mầm Non (3-5 tuổi)",
      startDate: "15/02/2026",
      schedule: "Tối 2-4-6 (17:30 - 19:00)",
      status: "Đang nhận học viên",
      slots: 5
    },
    {
      id: "AV-02",
      name: "Luyện Thi Starters (Cấp tốc)",
      startDate: "20/02/2026",
      schedule: "Sáng T7-CN (08:00 - 10:00)",
      status: "Sắp khai giảng",
      slots: 3
    },
    {
      id: "IELTS-01",
      name: "IELTS Foundation (Mục tiêu 4.5)",
      startDate: "18/02/2026",
      schedule: "Tối 3-5-7 (19:00 - 20:30)",
      status: "Đang nhận học viên",
      slots: 8
    },
    {
      id: "TH-01",
      name: "Tin Học Văn Phòng Cơ Bản",
      startDate: "10/02/2026",
      schedule: "Tối 2-4-6 (18:00 - 19:30)",
      status: "Đã đủ học viên",
      slots: 0
    },
    {
      id: "AV-03",
      name: "Tiếng Anh Giao Tiếp Người Lớn",
      startDate: "25/02/2026",
      schedule: "Tối 3-5 (19:30 - 21:00)",
      status: "Đang nhận học viên",
      slots: 10
    }
  ];

  return (
    <div className="flex flex-col gap-12 pb-20">
       {/* Header Banner */}
       <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Lịch Khai Giảng</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Cập nhật lịch khai giảng các khóa học mới nhất tại Hoàng Phúc.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Calendar className="text-secondary" /> Danh Sách Lớp Sắp Mở
            </h2>
            <div className="flex gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-green-50 text-green-700">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span> Đang nhận
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-yellow-50 text-yellow-700">
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span> Sắp mở
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-gray-400"></span> Đã đủ
                </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 text-gray-600 text-sm uppercase tracking-wider">
                <tr>
                  <th className="p-4 font-semibold border-b border-gray-100">Tên Lớp Học</th>
                  <th className="p-4 font-semibold border-b border-gray-100">Ngày Khai Giảng</th>
                  <th className="p-4 font-semibold border-b border-gray-100">Lịch Học</th>
                  <th className="p-4 font-semibold border-b border-gray-100">Trạng Thái</th>
                  <th className="p-4 font-semibold border-b border-gray-100">Đăng Ký</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {classes.map((item) => (
                  <tr key={item.id} className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-4">
                        <div className="font-bold text-gray-800">{item.name}</div>
                        <div className="text-xs text-gray-500 mt-1">Mã lớp: {item.id}</div>
                    </td>
                    <td className="p-4 text-gray-600 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                             <Calendar size={16} className="text-gray-400" />
                             {item.startDate}
                        </div>
                    </td>
                    <td className="p-4 text-gray-600">
                         <div className="flex items-center gap-2">
                             <Clock size={16} className="text-gray-400" />
                             {item.schedule}
                        </div>
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold
                        ${item.status === 'Đang nhận học viên' ? 'bg-green-100 text-green-700' : 
                          item.status === 'Sắp khai giảng' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-500'}
                      `}>
                        {item.status}
                      </span>
                      {item.slots > 0 && <div className="text-xs text-gray-500 mt-1">Còn {item.slots} chỗ</div>}
                    </td>
                    <td className="p-4">
                      {item.slots > 0 ? (
                         <button className="bg-secondary hover:bg-primary text-white text-sm font-semibold py-1.5 px-4 rounded-lg transition-colors shadow-sm">
                            Ghi Danh
                         </button>
                      ) : (
                         <button disabled className="bg-gray-200 text-gray-400 text-sm font-semibold py-1.5 px-4 rounded-lg cursor-not-allowed">
                            Đã Đủ
                         </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                      <CheckCircle size={20} /> Quy Trình Đăng Ký
                  </h3>
                  <ul className="space-y-4">
                      <li className="flex gap-3">
                          <span className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
                          <span className="text-gray-600">Liên hệ tư vấn hoặc đăng ký trực tuyến.</span>
                      </li>
                      <li className="flex gap-3">
                          <span className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
                          <span className="text-gray-600">Làm bài kiểm tra đầu vào (Placement Test) miễn phí.</span>
                      </li>
                      <li className="flex gap-3">
                          <span className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
                          <span className="text-gray-600">Nhận tư vấn xếp lớp phù hợp với trình độ.</span>
                      </li>
                      <li className="flex gap-3">
                          <span className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">4</span>
                          <span className="text-gray-600">Hoàn tất thủ tục học phí và nhận lịch học chính thức.</span>
                      </li>
                  </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                      <MapPin size={20} /> Địa Điểm Ghi Danh
                  </h3>
                  <p className="text-gray-600 mb-4">
                      Quý phụ huynh và học viên có thể đến trực tiếp văn phòng ghi danh tại:
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg border border-gray-200 mb-4">
                      <p className="font-bold text-gray-800">Cơ sở chính:</p>
                      <p className="text-gray-600">D11 Tổ 4, Lê Thị Riêng, P. Thới An, Q.12, TP.HCM</p>
                  </div>
                  <p className="text-gray-600">
                      <span className="font-bold">Hotline:</span> 08. 8 863 328
                  </p>
                  <p className="text-gray-600">
                      <span className="font-bold">Email:</span> info@ngoainguhoangphuc.edu.vn
                  </p>
              </div>
          </div>
      </section>
    </div>
  );
}
