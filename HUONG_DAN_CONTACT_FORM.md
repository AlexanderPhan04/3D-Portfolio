# 📧 Hướng dẫn Setup Form Liên hệ - TIẾNG VIỆT

## ❓ Câu hỏi của bạn:

> "Khi người dùng điền form trên portfolio, tôi nhận thông tin ở đâu?"

## ✅ Trả lời:

**Bạn sẽ nhận email tại:** `quannnd2004@gmail.com`

---

## 🎯 Cách hoạt động đơn giản:

```
1. Khách hàng vào portfolio của bạn
2. Điền form liên hệ (Tên, Email, Tin nhắn)
3. Nhấn "Submit"
4. Website tự động GỬI EMAIL cho bạn
5. Bạn nhận email trong Gmail
```

**KHÔNG phải Socket.IO** - Đây là form gửi email thông thường!

---

## 🚀 Setup trong 5 phút:

### **Bước 1: Đăng ký Resend (MIỄN PHÍ)**

1. Vào: https://resend.com
2. Nhấn "Sign Up"
3. Đăng ký (có thể dùng GitHub)
4. Xác nhận email

**Miễn phí:** 100 email/ngày - Đủ cho portfolio!

---

### **Bước 2: Lấy API Key**

1. Đăng nhập Resend
2. Vào: https://resend.com/api-keys
3. Nhấn "Create API Key"
4. Đặt tên: "Portfolio"
5. **COPY mã API key** (dạng: `re_xxxxxxx`)
   - ⚠️ Chỉ hiện 1 lần, nhớ copy ngay!

---

### **Bước 3: Dán API Key vào code**

Mở file: `.env.local` trong thư mục dự án

Thay dòng này:

```bash
RESEND_API_KEY=re_123456789_YourAPIKeyHere
```

Thành:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
```

(Thay bằng mã bạn vừa copy)

---

### **Bước 4: Restart Server**

Tắt terminal đang chạy (Ctrl + C)

Chạy lại:

```bash
npm run dev
```

---

### **Bước 5: Test thử**

1. Mở: http://localhost:3000
2. Tìm trang Contact (hoặc form liên hệ)
3. Điền thông tin test:
   - Tên: "Test"
   - Email: "test@example.com"
   - Tin nhắn: "Đây là test"
4. Nhấn Submit
5. **Kiểm tra Gmail:** quannnd2004@gmail.com
   - Xem cả folder **Spam** nếu không thấy!

---

## 📧 Email bạn nhận được:

```
Từ: Portfolio <onboarding@resend.dev>
Đến: quannnd2004@gmail.com
Tiêu đề: Contact me from portfolio

--------------------------
from: Test

test@example.com sent you a message

Đây là test
--------------------------
```

---

## 🎨 Muốn đổi email nhận?

Mở file: `src/data/config.ts`

Tìm dòng:

```typescript
email: "quannnd2004@gmail.com",
```

Đổi thành email khác nếu muốn!

---

## ⚠️ Lỗi thường gặp:

### **"Something went wrong"**

- ✅ Kiểm tra đã dán đúng API key chưa
- ✅ Nhớ **Restart server** sau khi thêm API key
- ✅ Xem lỗi trong Terminal

### **Không nhận được email**

- ✅ Kiểm tra folder **Spam** trong Gmail
- ✅ Vào https://resend.com/emails xem email có gửi không
- ✅ Kiểm tra email trong `config.ts` đúng chưa

### **Email bị vào Spam**

- Bình thường! Vì gửi từ `onboarding@resend.dev`
- Nếu muốn khắc phục: Verify domain riêng (cần domain name)

---

## 💡 So sánh với Socket.IO:

| Tính năng        | Contact Form         | Socket.IO                  |
| ---------------- | -------------------- | -------------------------- |
| Mục đích         | Gửi email liên hệ    | Chat realtime, xem con trỏ |
| Cần setup server | ❌ Không             | ✅ Cần server riêng        |
| Độ phức tạp      | Dễ                   | Khó                        |
| Khuyến nghị      | ✅ CẦN cho portfolio | ❌ Không cần thiết         |

**Kết luận:** Contact Form QUAN TRỌNG hơn Socket.IO nhiều!

---

## 🎯 Deploy lên Internet (Vercel):

Khi deploy portfolio lên Vercel:

1. Vào Vercel Dashboard
2. Chọn project
3. Settings → Environment Variables
4. Thêm:
   - Name: `RESEND_API_KEY`
   - Value: `re_xxxxxxxxx` (API key của bạn)
5. Redeploy

Done! Form sẽ hoạt động trên production!

---

## 📞 Cần giúp?

Nếu gặp lỗi, gửi screenshot cho tôi xem:

1. Terminal (nơi chạy `npm run dev`)
2. Browser Console (F12 → Console)
3. Trang Resend Dashboard

**Chúc bạn thành công! 🚀**
