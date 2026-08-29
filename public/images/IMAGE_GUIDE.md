# 📸 HƯỚNG DẪN HÌNH ẢNH — KEMDENZ BBQ & BUFFET HẢI SẢN

> **Thư mục chứa ảnh:** `frontend/public/images/`
> **Cách truy xuất trong code:** `src="/images/ten_file.png"`
> **Định dạng:** `.png` (thống nhất toàn bộ dự án)

---

## 🗂 CẤU TRÚC THƯ MỤC

```
frontend/public/images/
├── hero_seafood_bbq.png          ← Banner hero trang chủ
├── restaurant_interior.png       ← Nội thất nhà hàng (hero card dọc)
├── chef_portrait.png             ← Ảnh chân dung Bếp trưởng
├── space_vip_room.png            ← Không gian phòng VIP
├── space_live_tanks.png          ← Bể hải sản sống
├── space_central_buffet.png      ← Quầy buffet trung tâm
├── combo_standard.png            ← Ảnh combo Tiêu Chuẩn 299k
├── combo_premium.png             ← Ảnh combo Premium 449k
├── combo_vip.png                 ← Ảnh combo VIP 649k
├── menu/
│   ├── tom_hum_dut_lo.png        ← Tôm Hùm Mỹ Đút Lò Phô Mai
│   ├── hau_sua_nuong.png         ← Hàu Sữa Nướng Phô Mai
│   ├── suon_heo_bbq.png          ← Sườn Heo BBQ Mỹ
│   ├── bo_my_nuong.png           ← Bò Mỹ Nướng Tảng
│   ├── lau_thai_tomyum.png       ← Lẩu Thái Tomyum
│   ├── kem_signature.png         ← Kem Socola Phô Mai Signature
│   ├── cua_bien_nuong.png        ← Cua Biển Cà Mau Nướng
│   ├── muc_ong_nuong.png         ← Mực Ống Sống Nướng Sa Tế
│   ├── cua_hoang_de.png          ← Cua Hoàng Đế Alaska Hấp Bia
│   ├── tom_hum_baby.png          ← Tôm Hùm Baby Nướng Phô Mai
│   └── tra_dao_cam_sa.png        ← Trà Đào Cam Sả Đặc Biệt
├── testimonials/
│   ├── avatar_hong_nhung.png     ← Avatar khách hàng 1
│   ├── avatar_anh_tuan.png       ← Avatar khách hàng 2
│   └── avatar_minh_hoang.png     ← Avatar khách hàng 3
└── og_cover.png                  ← Ảnh SEO cho Facebook/Zalo share
```

---

## 📐 CHI TIẾT TỪNG HÌNH ẢNH

---

### 1. 🔥 HERO BANNER (Trang chủ — Section đầu tiên)

| Thuộc tính | Chi tiết |
|---|---|
| **Tên file** | `hero_seafood_bbq.png` |
| **Kích thước tối thiểu** | **1920 × 1080 px** (Full HD) |
| **Kích thước lý tưởng** | **2560 × 1440 px** (2K) |
| **Tỉ lệ khung hình** | **16:9** |
| **Nội dung chụp** | Bàn nướng BBQ đang bốc khói với hải sản (tôm hùm, cua, sò điệp) xếp đẹp mắt, ánh lửa ấm vàng cam, nhìn từ trên xuống hoặc góc 45°. Bối cảnh tối (dark/moody lighting) để phù hợp overlay navy. |
| **Lưu ý thiết kế** | Ảnh sẽ bị phủ lớp overlay gradient tối navy `#0D1B2E` phía trên (opacity ~65-80%), nên chủ thể chính nên nằm ở **giữa-phải** để không bị chữ tiêu đề che khuất ở bên trái. Không cần text trên ảnh. |
| **Dung lượng** | Tối đa **800 KB** |
| **Vị trí hiển thị** | Full-screen background, `object-cover` |

---

### 2. 🏠 NỘI THẤT NHÀ HÀNG (Hero Card Dọc)

| Thuộc tính | Chi tiết |
|---|---|
| **Tên file** | `restaurant_interior.png` |
| **Kích thước tối thiểu** | **1200 × 1500 px** |
| **Kích thước lý tưởng** | **1400 × 1750 px** |
| **Tỉ lệ khung hình** | **4:5** (dọc / portrait) |
| **Nội dung chụp** | Góc rộng không gian nội thất nhà hàng sang trọng: ánh đèn vàng ấm, bàn ghế gỗ tối, trần cao, trang trí kiểu Á Đông hiện đại. Có thể thấy quầy buffet hoặc bàn nướng BBQ ở xa. |
| **Lưu ý thiết kế** | Dùng cho card ảnh dọc trong Hero Section bên phải. Ảnh dọc portrait vì khung hiển thị là `aspect-[4/5]`. Tông màu tối/ấm để phù hợp overlay navy. |
| **Dung lượng** | Tối đa **600 KB** |
| **Vị trí hiển thị** | Card dọc trong Hero Section |

---

### 3. 👨‍🍳 CHÂN DUNG BẾP TRƯỞNG

| Thuộc tính | Chi tiết |
|---|---|
| **Tên file** | `chef_portrait.png` |
| **Kích thước tối thiểu** | **800 × 1000 px** |
| **Kích thước lý tưởng** | **1000 × 1200 px** |
| **Tỉ lệ khung hình** | **5:6** hoặc **4:5** (dọc) |
| **Chiều cao hiển thị** | `h-[450px]` — khoảng 450px cao |
| **Nội dung chụp** | Đầu bếp mặc đồng phục trắng chef, đang chế biến món ăn hoặc đứng tự tin trước bếp nướng. Bối cảnh nhà bếp chuyên nghiệp hoặc quầy bếp mở. Ánh sáng ấm, nét mặt tập trung và chuyên nghiệp. |
| **Lưu ý thiết kế** | Góc phải dưới ảnh sẽ có floating badge "Executive Chef" nền navy, nên để khoảng trống ở góc đó (không có chi tiết quan trọng). |
| **Dung lượng** | Tối đa **500 KB** |
| **Vị trí hiển thị** | Section "Nghệ Thuật Bếp Trưởng" — card ảnh bo tròn |

---

### 4. 🏢 KHÔNG GIAN NHÀ HÀNG (3 ảnh)

#### 4a. Phòng VIP Riêng Tư

| Thuộc tính | Chi tiết |
|---|---|
| **Tên file** | `space_vip_room.png` |
| **Kích thước** | **800 × 500 px** (tối thiểu) → lý tưởng **1200 × 750 px** |
| **Tỉ lệ khung hình** | **16:10** hoặc tự do (card sẽ crop `h-60` = 240px cao) |
| **Nội dung chụp** | Phòng riêng sang trọng với bàn tròn lớn, ghế bọc da/vải, đèn trần trang trí, tường ốp gỗ hoặc vách kính mờ. Bầu không khí ấm cúng, riêng tư. |
| **Dung lượng** | Tối đa **400 KB** |

#### 4b. Bể Hải Sản Sống

| Thuộc tính | Chi tiết |
|---|---|
| **Tên file** | `space_live_tanks.png` |
| **Kích thước** | **800 × 500 px** → lý tưởng **1200 × 750 px** |
| **Tỉ lệ khung hình** | **16:10** |
| **Nội dung chụp** | Bể kính lớn chứa tôm hùm, cua, cá sống đang bơi. Ánh đèn xanh nước biển hoặc trắng sáng. Có thể kèm nhân viên đang vớt hải sản. |
| **Dung lượng** | Tối đa **400 KB** |

#### 4c. Quầy Buffet Trung Tâm

| Thuộc tính | Chi tiết |
|---|---|
| **Tên file** | `space_central_buffet.png` |
| **Kích thước** | **800 × 500 px** → lý tưởng **1200 × 750 px** |
| **Tỉ lệ khung hình** | **16:10** |
| **Nội dung chụp** | Quầy buffet dài trưng bày nhiều món ăn đầy màu sắc: sushi, salad, trái cây, chè, kem. Ánh sáng trắng/vàng ấm, bàn trưng bày inox sáng bóng. |
| **Dung lượng** | Tối đa **400 KB** |

> **Lưu ý chung cho 3 ảnh không gian:** Tất cả hiển thị trong card ngang, crop ở chiều cao `h-60` (240px). Góc trái trên có badge text nhỏ nền navy, nên tránh đặt chi tiết quan trọng ở vị trí đó.

---

### 5. 💰 ẢNH COMBO GIÁ (3 ảnh)

#### 5a. Combo Tiêu Chuẩn (299k)

| Thuộc tính | Chi tiết |
|---|---|
| **Tên file** | `combo_standard.png` |
| **Kích thước** | **800 × 400 px** → lý tưởng **1200 × 600 px** |
| **Tỉ lệ khung hình** | **2:1** (ngang rộng, chiều cao giới hạn `h-48` = 192px) |
| **Nội dung chụp** | Bàn nướng BBQ với các loại thịt heo, gà, bò xếp đẹp đang nướng trên vỉ than. Có thể kèm rau sống, nước chấm bên cạnh. Tông màu ấm, khói nhẹ. |
| **Dung lượng** | Tối đa **350 KB** |

#### 5b. Combo Premium (449k)

| Thuộc tính | Chi tiết |
|---|---|
| **Tên file** | `combo_premium.png` |
| **Kích thước** | **800 × 400 px** → lý tưởng **1200 × 600 px** |
| **Tỉ lệ khung hình** | **2:1** |
| **Nội dung chụp** | Hải sản phong phú hơn: tôm sú, ghẹ, mực ống, bò Mỹ nướng, lẩu thái. Bày biện sang trọng hơn Combo Tiêu Chuẩn. Tông màu vàng cam ấm nóng, hấp dẫn. |
| **Dung lượng** | Tối đa **350 KB** |

#### 5c. Combo VIP Hải Sản (649k)

| Thuộc tính | Chi tiết |
|---|---|
| **Tên file** | `combo_vip.png` |
| **Kích thước** | **800 × 400 px** → lý tưởng **1200 × 600 px** |
| **Tỉ lệ khung hình** | **2:1** |
| **Nội dung chụp** | Tôm hùm Alaska nguyên con, cua hoàng đế, hàu sữa phô mai — bài trí trên đĩa lớn hoặc khay gỗ, kèm bia Heineken lạnh. Cảm giác siêu cao cấp, xa xỉ, "đỉnh nóc". |
| **Dung lượng** | Tối đa **350 KB** |

> **Lưu ý chung cho 3 ảnh combo:** Góc trái trên có badge text nhỏ (ví dụ "TIÊU CHUẨN", "🔥 BÁN CHẠY NHẤT", "SIÊU CẤP VIP"), nên tránh đặt chi tiết quan trọng ở góc trái trên.

---

### 6. 🍽 ẢNH THỰC ĐƠN MÓN ĂN (8 ảnh)

> **Tất cả ảnh menu đặt trong thư mục con:** `images/menu/`
> **Kích thước đồng nhất:** **600 × 600 px** (tối thiểu **500 × 500 px**)
> **Tỉ lệ khung hình:** **1:1** (vuông)
> **Dung lượng mỗi ảnh:** Tối đa **250 KB**
> **Hiển thị:** Card vuông bo tròn, hover zoom-in nhẹ

| # | Tên file | Món ăn | Gợi ý chụp |
|---|---|---|---|
| 1 | `menu/tom_hum_dut_lo.png` | Tôm Hùm Mỹ Đút Lò Phô Mai | Tôm hùm bổ đôi, phô mai vàng nóng chảy trên mặt, đặt trên đĩa sứ trắng. Góc chụp từ trên xuống 45°. |
| 2 | `menu/hau_sua_nuong.png` | Hàu Sữa Nướng Phô Mai Chén | 6-8 con hàu xếp trên khay đá, phô mai vàng ruộm phía trên, rắc hành phi. |
| 3 | `menu/suon_heo_bbq.png` | Sườn Heo BBQ Mỹ Sốt Tiêu Đỏ | Sườn heo nướng cắt miếng, sốt BBQ bóng mượt, rau mùi xanh trang trí. |
| 4 | `menu/bo_my_nuong.png` | Bò Mỹ Nướng Tảng Vân Mỡ | Miếng bò dày nướng medium-rare, cắt lát thấy vân mỡ đẹp, rưới sốt tiêu đen. |
| 5 | `menu/lau_thai_tomyum.png` | Lẩu Thái Tomyum Chua Cay | Nồi lẩu đang sôi bốc khói, nước dùng đỏ cam, tôm/mực/nấm nổi trên mặt. |
| 6 | `menu/kem_signature.png` | Kem KemDenz Signature Socola Phô Mai | 2-3 viên kem socola và phô mai xếp trong ly/chén thủy tinh đẹp, rưới sốt socola, topping wafer. |
| 7 | `menu/cua_bien_nuong.png` | Cua Biển Cà Mau Nướng Muối Ớt | Cua biển nguyên con nướng vàng ruộm, rắc muối ớt đỏ, đặt trên lá chuối hoặc đĩa gốm. |
| 8 | `menu/muc_ong_nuong.png` | Mực Ống Sống Nướng Sa Tế Cay | Mực ống cắt khoanh nướng vàng giòn, phết sa tế đỏ cam, kèm rau sống bên cạnh. |
| 9 | `menu/cua_hoang_de.png` | Cua Hoàng Đế Alaska Hấp Bia | Cua hoàng đế nguyên con đỏ rực bày trên khay gỗ/đĩa gốm đen sang trọng, kèm lát chanh tươi và rau thơm. |
| 10 | `menu/tom_hum_baby.png` | Tôm Hùm Baby Nướng Phô Mai | Tôm hùm baby nướng bơ tỏi và sốt phô mai nóng chảy vàng ruộm trên đĩa đá đen sang trọng. |
| 11 | `menu/tra_dao_cam_sa.png` | Trà Đào Cam Sả Đặc Biệt | Ly nước trà đào sả đá cao cấp, có các lát đào, lát cam tươi mọng, nhánh sả cắm xiên, đặt trên quầy gỗ ấm áp. |

---

### 7. 👤 AVATAR KHÁCH HÀNG ĐÁNH GIÁ (3 ảnh)

> **Tất cả avatar đặt trong thư mục con:** `images/testimonials/`
> **Kích thước đồng nhất:** **200 × 200 px** (tối thiểu **150 × 150 px**)
> **Tỉ lệ khung hình:** **1:1** (vuông — sẽ crop tròn bởi CSS)
> **Dung lượng mỗi ảnh:** Tối đa **80 KB**
> **Hiển thị:** Hình tròn nhỏ `w-12 h-12` (48px) với viền vàng gold

| # | Tên file | Tên khách hàng | Gợi ý |
|---|---|---|---|
| 1 | `testimonials/avatar_hong_nhung.png` | Nguyễn Thị Hồng Nhung | Nữ ~30-35 tuổi, nụ cười tươi, tóc dài, trang phục lịch sự. |
| 2 | `testimonials/avatar_anh_tuan.png` | Phan Anh Tuấn | Nam ~35-40 tuổi, vest/áo sơ mi, phong cách công sở chuyên nghiệp. |
| 3 | `testimonials/avatar_minh_hoang.png` | Lê Minh Hoàng | Nam ~28-33 tuổi, phong cách trẻ trung năng động, áo polo/casual. |

---

### 8. 🌐 ẢNH SEO / SOCIAL SHARE (Open Graph)

| Thuộc tính | Chi tiết |
|---|---|
| **Tên file** | `og_cover.png` |
| **Kích thước chính xác** | **1200 × 630 px** (chuẩn Facebook/Zalo) |
| **Tỉ lệ khung hình** | **1.91:1** |
| **Nội dung** | Ảnh đại diện thương hiệu khi share link lên Facebook/Zalo. Nên có: logo KemDenz lục giác chữ K + tên thương hiệu + hình nền hải sản/BBQ mờ phía sau + dòng text "Buffet Hải Sản & BBQ Cao Cấp". |
| **Dung lượng** | Tối đa **300 KB** |

---

## 📋 BẢNG TỔNG HỢP NHANH

| # | Tên file | Kích thước (px) | Tỉ lệ | Dung lượng tối đa | Section |
|---|---|---|---|---|---|
| 1 | `hero_seafood_bbq.png` | 2560×1440 | 16:9 | 800 KB | Hero Banner |
| 2 | `restaurant_interior.png` | 1400×1750 | 4:5 | 600 KB | Hero Card |
| 3 | `chef_portrait.png` | 1000×1200 | 5:6 | 500 KB | Bếp Trưởng |
| 4 | `space_vip_room.png` | 1200×750 | 16:10 | 400 KB | Không Gian |
| 5 | `space_live_tanks.png` | 1200×750 | 16:10 | 400 KB | Không Gian |
| 6 | `space_central_buffet.png` | 1200×750 | 16:10 | 400 KB | Không Gian |
| 7 | `combo_standard.png` | 1200×600 | 2:1 | 350 KB | Combo Giá |
| 8 | `combo_premium.png` | 1200×600 | 2:1 | 350 KB | Combo Giá |
| 9 | `combo_vip.png` | 1200×600 | 2:1 | 350 KB | Combo Giá |
| 10 | `menu/tom_hum_dut_lo.png` | 600×600 | 1:1 | 250 KB | Thực Đơn |
| 11 | `menu/hau_sua_nuong.png` | 600×600 | 1:1 | 250 KB | Thực Đơn |
| 12 | `menu/suon_heo_bbq.png` | 600×600 | 1:1 | 250 KB | Thực Đơn |
| 13 | `menu/bo_my_nuong.png` | 600×600 | 1:1 | 250 KB | Thực Đơn |
| 14 | `menu/lau_thai_tomyum.png` | 600×600 | 1:1 | 250 KB | Thực Đơn |
| 15 | `menu/kem_signature.png` | 600×600 | 1:1 | 250 KB | Thực Đơn |
| 16 | `menu/cua_bien_nuong.png` | 600×600 | 1:1 | 250 KB | Thực Đơn |
| 17 | `menu/muc_ong_nuong.png` | 600×600 | 1:1 | 250 KB | Thực Đơn |
| 18 | `menu/cua_hoang_de.png` | 600×600 | 1:1 | 250 KB | Thực Đơn |
| 19 | `menu/tom_hum_baby.png` | 600×600 | 1:1 | 250 KB | Thực Đơn |
| 20 | `menu/tra_dao_cam_sa.png` | 600×600 | 1:1 | 250 KB | Thực Đơn |
| 21 | `testimonials/avatar_hong_nhung.png` | 200×200 | 1:1 | 80 KB | Đánh Giá |
| 22 | `testimonials/avatar_anh_tuan.png` | 200×200 | 1:1 | 80 KB | Đánh Giá |
| 23 | `testimonials/avatar_minh_hoang.png` | 200×200 | 1:1 | 80 KB | Đánh Giá |
| 24 | `og_cover.png` | 1200×630 | 1.91:1 | 300 KB | SEO Share |

**Tổng cộng: 24 hình ảnh** cần chuẩn bị (tất cả đuôi `.png`).

---

## ⚙️ LƯU Ý KỸ THUẬT

1. **Đặt tên file ĐÚNG Y CHANG** như bảng trên — code đã được cấu hình sẵn để đọc đúng tên này.
2. **Tất cả dùng đuôi `.png`** — thống nhất toàn dự án, khớp với code.
3. **Nén ảnh:** Sử dụng [tinypng.com](https://tinypng.com) hoặc [squoosh.app](https://squoosh.app) để nén trước khi đặt vào thư mục.
4. **Tạo thư mục con trước:** Tạo `images/menu/` và `images/testimonials/` trước khi đặt ảnh vào.
5. **Sau khi hoàn thành:** Code đã được cập nhật sẵn trỏ tới các file ảnh local. Chỉ cần đặt ảnh vào đúng thư mục là tự hiển thị.
