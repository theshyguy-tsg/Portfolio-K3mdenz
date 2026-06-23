# 🌌 Interactive Developer Portfolio — K3mdenz Showcase

> **Dự án: Trang Web Portfolio Cá Nhân Tương Tác High-Fidelity & Hiệu Ứng Điện Ảnh**
>
> Ứng dụng portfolio cá nhân 3D, ứng dụng kỹ thuật đồ họa và hoạt ảnh vi mô (micro-interactions) để trình diễn kỹ năng, học vấn, và các dự án công nghệ một cách ấn tượng.

---

## 🚀 Giới Thiệu Dự Án

Trang web portfolio cá nhân của **K3mdenz** được thiết kế nhằm mục đích giới thiệu bản thân, các dự án tiêu biểu (như dự án tốt nghiệp `Mystic Wine Muse` và game tương tác `SpinRanDom`), cũng như bộ kỹ năng lập trình (toolbelt). 

Trang web tập trung vào trải nghiệm thị giác cao cấp (**High-Fidelity UI/UX**), sử dụng triết lý thiết kế Glassmorphism (giao diện kính mờ), kết hợp với hiệu ứng đom đóm phát sáng chuyển động và lưới lưới nơ-ron tương tác để tạo chiều sâu không gian huyền ảo.

---

## 🛠️ Kiến Trúc Hệ Thống & Công Nghệ Sử Dụng

*   **Framework Core:** React 19, Vite, TypeScript.
*   **Routing & State Management:** TanStack Router & TanStack Start (tối ưu hóa luồng tải trang và định tuyến kiểu dữ liệu nghiêm ngặt).
*   **Hoạt ảnh nghệ thuật:** Framer Motion (các hiệu ứng cuộn mượt mà, chuyển động mở rộng phần tử, hiệu ứng xuất hiện tinh tế).
*   **Kỹ thuật Đồ họa (Web Graphics):** Canvas API, CSS Shaders, hiệu ứng hạt lấp lánh đom đóm (`EdgeFireflies`), hiệu ứng lưới biến dạng lưới 3D (`BlobMesh`).
*   **Styling System:** Tailwind CSS v4, Vanilla CSS Custom Properties (biến CSS), phông chữ Google Fonts (Inter, Playfair Display).
*   **Deployment ready:** Tương thích hoàn toàn để deploy lên Cloudflare Pages / Vercel qua tệp cấu hình `wrangler.jsonc`.

---

## ✨ Tính Năng Nổi Bật

### 1. Hiệu Ứng Không Gian Đồ Họa Cao Cấp (Immersive UI)
*   **BlobMesh Scene:** Một quả cầu biến dạng sinh học 3D tương tác chạy bằng canvas hoặc thư viện toán học mô phỏng các kết nối nơ-ron.
*   **EdgeFireflies Effect:** Hiệu ứng các hạt đom đóm phát sáng tự do chuyển động ngẫu nhiên xung quanh các góc màn hình, tạo bầu không khí huyền ảo, ấm cúng.
*   **Camera Lens Intro:** Màn hình chào mừng mô phỏng khẩu độ ống kính máy ảnh mở ra khi người dùng truy cập trang web.

### 2. Các Phân Khu Tương Tác (Interactive Sections)
*   **Hero Section:** Khởi đầu với lời chào nghệ thuật, tích hợp hiệu ứng đổi chữ ngẫu nhiên độc đáo.
*   **About Section:** Giới thiệu ngắn gọn về triết lý làm việc và mục tiêu phát triển phần mềm.
*   **Skills/Toolbelt Section:** Thể hiện trực quan các ngôn ngữ và công nghệ thành thạo dưới dạng thẻ bài sáng bóng (Shiny Cards).
*   **Education Section:** Dòng thời gian học vấn được thiết kế sang trọng với các mốc lịch sử phát triển.
*   **Projects Section:** Nơi trưng bày các dự án cốt lõi (liên kết tới `DatingApp` và `Spin-quizz`) kèm hình ảnh và mô tả chi tiết công việc thực hiện.
*   **Contact Section:** Mẫu liên hệ tích hợp hiệu ứng niêm phong bằng sáp (wax seal) độc đáo để gửi tin nhắn.

---

## 📂 Cấu Trúc Mã Nguồn Chính

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── portfolio/          # Các phân khu chính của Portfolio (Hero, About, Skills...)
│   │   └── ui/                 # Các UI Components dùng chung (nút bấm, panel kính mờ)
│   ├── routes/                 # Quản lý các router bằng TanStack Router
│   ├── styles.css              # Định nghĩa hệ thống màu sắc HSL, hiệu ứng gradient
│   ├── router.tsx              # Khởi tạo định tuyến
│   └── routeTree.gen.ts        # File tự động sinh của TanStack Router
```

---

## 🛠️ Hướng Dẫn Cài Đặt & Chạy Local

1. Di chuyển vào thư mục dự án:
   ```bash
   cd Portfolio
   ```
2. Cài đặt các gói thư viện phụ thuộc:
   ```bash
   npm install
   ```
3. Chạy môi trường phát triển:
   ```bash
   npm run dev
   ```
4. Truy cập trang web cục bộ tại địa chỉ hiển thị trên terminal.
