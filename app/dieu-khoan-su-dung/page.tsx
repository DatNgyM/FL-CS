import React from 'react';
import { FileText } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="pb-20">
      <section className="bg-primary text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Điều Khoản Sử Dụng</h1>
          <p className="text-lg text-blue-100">Quy định chung khi sử dụng dịch vụ tại Hoàng Phúc.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-12 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-600">
            <p className="lead">
                Chào mừng bạn đến với website của Trung tâm Ngoại ngữ & Tin học Hoàng Phúc. Khi truy cập và sử dụng website này, bạn đồng ý tuân thủ các điều khoản dưới đây.
            </p>

            <h3 className="text-gray-900 mt-8">1. Quyền sở hữu trí tuệ</h3>
            <p>
                Mọi nội dung trên website bao gồm văn bản, hình ảnh, logo, video, tài liệu học tập đều thuộc quyền sở hữu của Hoàng Phúc hoặc được cấp phép sử dụng. Nghiêm cấm sao chép, chỉnh sửa hoặc sử dụng cho mục đích thương mại khi chưa có sự đồng ý bằng văn bản.
            </p>

            <h3 className="text-gray-900 mt-8">2. Trách nhiệm của người sử dụng</h3>
            <p>
                - Cung cấp thông tin chính xác khi đăng ký tài khoản hoặc điền form tư vấn.<br/>
                - Không sử dụng website để phát tán mã độc, spam hoặc các nội dung vi phạm pháp luật.<br/>
                - Tôn trọng cộng đồng và các học viên khác trong các mục bình luận/thảo luận (nếu có).
            </p>

            <h3 className="text-gray-900 mt-8">3. Thay đổi nội dung</h3>
            <p>
                Hoàng Phúc có quyền thay đổi, chỉnh sửa hoặc cập nhật các điều khoản này bất cứ lúc nào mà không cần báo trước. Việc bạn tiếp tục sử dụng website sau khi có thay đổi đồng nghĩa với việc bạn chấp nhận các thay đổi đó.
            </p>

            <h3 className="text-gray-900 mt-8">4. Giới hạn trách nhiệm</h3>
            <p>
                Chúng tôi nỗ lực đảm bảo thông tin trên website là chính xác và cập nhật nhất. Tuy nhiên, chúng tôi không chịu trách nhiệm về bất kỳ thiệt hại nào phát sinh từ việc sử dụng hoặc không thể sử dụng website này.
            </p>
        </div>
      </section>
    </div>
  );
}
