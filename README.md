# Dự Án Trung Tâm Ngoại Ngữ Hoàng Phúc

Website giới thiệu và quản lý trung tâm ngoại ngữ Hoàng Phúc, xây dựng bằng Next.js 16 với TypeScript và Tailwind CSS.

## Giới Thiệu Dự Án

Đây là website chính thức của Trung tâm ngoại ngữ Hoàng Phúc, cung cấp thông tin về:

- Các khóa học ngoại ngữ
- Lịch khai giảng
- Tin tức và sự kiện
- Đăng ký thi thử
- Thông tin liên hệ và tuyển dụng

## Công Nghệ Sử Dụng

### Framework và Libraries chính

- **Next.js 16.1.6** - React framework với App Router và Turbopack
- **React 19.2.3** - Thư viện UI
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 3.4.1** - Utility-first CSS framework

### UI và Animation

- **Framer Motion 12.29.2** - Animation library
- **Lucide React 0.563.0** - Icon library
- **clsx 2.1.1** - Conditional className utility
- **tailwind-merge 3.4.0** - Merge Tailwind classes

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## Yêu Cầu Hệ Thống

- Node.js 18.x trở lên
- npm hoặc yarn

## Cài Đặt

### 1. Clone repository

```bash
git clone <repository-url>
cd FL-CS
```

### 2. Cài đặt dependencies

```bash
npm install
```

## Cách Chạy Dự Án

### Chạy development server

```bash
npm run dev
```

Mở trình duyệt và truy cập [http://localhost:3000](http://localhost:3000)

Server sẽ tự động reload khi bạn chỉnh sửa code.

### Build cho production

```bash
npm run build
```

### Chạy production server

```bash
npm run start
```

## Cấu Trúc Thư Mục

```
FL-CS/
├── app/                    # Next.js App Router
│   ├── chinh-sach-bao-mat/ # Trang chính sách bảo mật
│   ├── dang-ky-thi-thu/    # Trang đăng ký thi thử
│   ├── dang-nhap/          # Trang đăng nhập
│   ├── dieu-khoan-su-dung/ # Trang điều khoản sử dụng
│   ├── gioi-thieu/         # Trang giới thiệu
│   ├── hoi-dap/            # Trang hỏi đáp
│   ├── khoa-hoc/           # Trang khóa học
│   ├── lich-khai-giang/    # Trang lịch khai giảng
│   ├── lien-he/            # Trang liên hệ
│   ├── tin-tuc/            # Trang tin tức
│   ├── tuyen-dung/         # Trang tuyển dụng
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Trang chủ
├── components/             # React components
│   ├── Header.tsx          # Component header
│   ├── Footer.tsx          # Component footer
│   └── Hero.tsx            # Component hero section
├── lib/                    # Utility functions
│   └── utils.ts            # Helper functions
├── public/                 # Static files
└── ...config files         # Configuration files
```

## Scripts Có Sẵn

- `npm run dev` - Chạy development server trên port 3000
- `npm run build` - Build ứng dụng cho production
- `npm run start` - Chạy production server

## Xóa Cache

Nếu gặp lỗi sau khi di chuyển folder hoặc cần build lại từ đầu:

```bash
Remove-Item -Recurse -Force .next
npm run build
```

## Lưu Ý

- Port mặc định: 3000
- Dự án sử dụng Next.js App Router (không phải Pages Router)
- TypeScript được bật mặc định
- Tailwind CSS đã được cấu hình sẵn

## CI/CD và Deployment

### Deploy lên Vercel

Dự án đã được cấu hình sẵn để deploy lên Vercel với CI/CD tự động.

#### Bước 1: Kết nối GitHub với Vercel

1. Truy cập [Vercel](https://vercel.com)
2. Đăng nhập bằng tài khoản GitHub
3. Click "Add New Project"
4. Import repository này

#### Bước 2: Cấu hình Project

Vercel sẽ tự động phát hiện Next.js và cấu hình:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

#### Bước 3: Environment Variables (nếu cần)

Trong Vercel Dashboard > Settings > Environment Variables, thêm:
```
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

#### Bước 4: Deploy

Click "Deploy" và đợi vài phút. Vercel sẽ:
- Tự động build project
- Deploy lên production
- Tạo preview cho mỗi pull request
- Auto-deploy khi push lên main branch

### GitHub Actions CI

Mỗi khi push code hoặc tạo pull request, GitHub Actions sẽ tự động:
- Chạy build để kiểm tra lỗi
- Verify dependencies
- Đảm bảo code có thể build thành công

### Preview Deployments

Mỗi pull request sẽ tự động tạo một preview deployment URL để xem trước thay đổi.

### Custom Domain (Optional)

Sau khi deploy, bạn có thể thêm custom domain trong:
Vercel Dashboard > Project > Settings > Domains

## License

Private - Trung tâm Ngoại ngữ Hoàng Phúc
