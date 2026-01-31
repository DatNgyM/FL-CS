import React from 'react';
import { ShieldCheck, Lock, FileText } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="pb-20">
      <section className="bg-primary text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Chính Sách Bảo Mật</h1>
          <p className="text-lg text-blue-100">Cam kết bảo vệ thông tin cá nhân của khách hàng.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-12 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-600">
            <h3 className="text-gray-900 flex items-center gap-2"><ShieldCheck className="text-primary" /> 1. Mục đích thu thập thông tin</h3>
            <p>
                Trung tâm Ngoại ngữ & Tin học Hoàng Phúc thu thập thông tin cá nhân của học viên nhằm mục đích:
                <br/>- Tư vấn và cung cấp thông tin khóa học.
                <br/>- Xếp lớp và theo dõi quá trình học tập.
                <br/>- Gửi thông báo về lịch học, lịch thi, sự kiện.
            </p>

            <h3 className="text-gray-900 flex items-center gap-2 mt-8"><Lock className="text-primary" /> 2. Phạm vi sử dụng thông tin</h3>
            <p>
                Thông tin cá nhân thu thập được sẽ chỉ được sử dụng trong nội bộ trung tâm. Chúng tôi cam kết không chia sẻ, bán hoặc cho thuê thông tin cá nhân của bạn cho bất kỳ bên thứ ba nào khi chưa có sự đồng ý của bạn, ngoại trừ trường hợp có yêu cầu của cơ quan pháp luật.
            </p>

            <h3 className="text-gray-900 flex items-center gap-2 mt-8"><FileText className="text-primary" /> 3. Thời gian lưu trữ thông tin</h3>
            <p>
                Thông tin cá nhân của học viên sẽ được lưu trữ cho đến khi học viên có yêu cầu hủy bỏ hoặc trung tâm giải thể. Trong mọi trường hợp, thông tin cá nhân học viên sẽ được bảo mật trên máy chủ của trung tâm.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl mt-8 text-sm">
                <p className="font-bold text-primary mb-2">Liên hệ về quyền riêng tư</p>
                <p>Nếu bạn có bất kỳ thắc mắc nào về Chính sách bảo mật, vui lòng liên hệ:</p>
                <p className="mt-2 font-medium">Email: info@ngoainguhoangphuc.edu.vn</p>
                <p className="font-medium">Hotline: 08. 8 863 328</p>
            </div>
        </div>
      </section>
    </div>
  );
}
