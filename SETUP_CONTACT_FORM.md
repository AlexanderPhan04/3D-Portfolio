# 📧 Setup Contact Form với Resend

## Hiện trạng:

- ✅ Contact form đã được code sẵn
- ✅ Email nhận: `quannnd2004@gmail.com` (trong `src/data/config.ts`)
- ❌ Thiếu API key của Resend

## Cách hoạt động:

```
Người dùng điền form (Tên, Email, Message)
              ↓
        Nhấn "Submit"
              ↓
  POST /api/send (Next.js API route)
              ↓
     Resend gửi email
              ↓
  Bạn nhận email tại Gmail
```

---

## 🚀 Hướng dẫn Setup (5 phút):

### **Bước 1: Tạo tài khoản Resend (MIỄN PHÍ)**

1. Truy cập: https://resend.com
2. Click **"Sign Up"**
3. Đăng ký bằng email hoặc GitHub
4. Verify email

**Free Plan:**

- ✅ 100 emails/ngày
- ✅ 3,000 emails/tháng
- ✅ Đủ cho portfolio cá nhân

---

### **Bước 2: Lấy API Key**

1. Đăng nhập Resend
2. Vào: https://resend.com/api-keys
3. Click **"Create API Key"**
4. Đặt tên: `Portfolio Contact Form`
5. Click **"Add"**
6. **Copy API key** (CHỈ hiển thị 1 lần!)
   - Dạng: `re_xxxxxxxxxxxxxxxxxxxxx`

---

### **Bước 3: Thêm API Key vào `.env.local`**

Mở file `.env.local` và thay thế:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
```

Thay `re_xxxxxxxxxxxxxxxxxxxxx` bằng API key bạn vừa copy.

---

### **Bước 4: Verify Domain (Optional - để email đẹp hơn)**

**Nếu KHÔNG verify domain:**

- Email gửi từ: `onboarding@resend.dev`
- ⚠️ Có thể vào spam
- ✅ Vẫn hoạt động bình thường

**Nếu verify domain (có domain riêng):**

1. Vào: https://resend.com/domains
2. Click **"Add Domain"**
3. Nhập domain của bạn (vd: `alexanderphan.site`)
4. Thêm DNS records vào domain provider
5. Chờ verify (5-10 phút)
6. Sửa trong `src/app/api/send/route.ts`:
   ```typescript
   from: "Alexander <noreply@yourdomain.com>",
   ```

---

### **Bước 5: Test Contact Form**

1. **Restart dev server:**

   ```bash
   npm run dev
   ```

2. **Mở trình duyệt:**

   ```
   http://localhost:3000
   ```

3. **Tìm contact form** (có thể ở trang Contact hoặc homepage)

4. **Điền thông tin:**

   - Full Name: `Test User`
   - Email: `test@example.com`
   - Message: `This is a test message from my portfolio!`

5. **Nhấn Submit**

6. **Kiểm tra email:** `quannnd2004@gmail.com`
   - Có thể ở **Inbox** hoặc **Spam**
   - Subject: `Contact me from portfolio`

---

## 📧 Email Template

Email bạn nhận sẽ có dạng:

```
From: Portfolio <onboarding@resend.dev>
To: quannnd2004@gmail.com
Subject: Contact me from portfolio

----------------------------------
from: Test User

test@example.com sent you a message

This is a test message from my portfolio!
----------------------------------
```

---

## 🎨 Tùy chỉnh Email Template

Muốn email đẹp hơn? Sửa file: `src/components/email-template.tsx`

**Ví dụ:**

```tsx
export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
    <h1 style={{ color: "#333" }}>📩 New Contact Form Submission</h1>

    <div
      style={{
        backgroundColor: "#f5f5f5",
        padding: "15px",
        borderRadius: "8px",
        marginTop: "20px",
      }}
    >
      <p>
        <strong>From:</strong> {fullName}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <hr />
      <p>
        <strong>Message:</strong>
      </p>
      <blockquote
        style={{
          borderLeft: "4px solid #007bff",
          paddingLeft: "15px",
          fontStyle: "italic",
        }}
      >
        {message}
      </blockquote>
    </div>

    <p style={{ marginTop: "20px", color: "#666" }}>
      Sent from your portfolio website
    </p>
  </div>
);
```

---

## ⚠️ Troubleshooting

### **Lỗi: "Something went wrong"**

- ✅ Kiểm tra `RESEND_API_KEY` trong `.env.local`
- ✅ Restart dev server sau khi thêm env
- ✅ Kiểm tra console log trong terminal

### **Không nhận được email:**

- ✅ Kiểm tra folder **Spam**
- ✅ Verify email trong config.ts: `quannnd2004@gmail.com`
- ✅ Kiểm tra Dashboard Resend: https://resend.com/emails

### **Email vào Spam:**

- ⚠️ Do gửi từ `onboarding@resend.dev`
- 💡 Giải pháp: Verify domain riêng (xem Bước 4)

---

## 📊 Alternative: Dùng dịch vụ khác

Nếu không muốn dùng Resend, có thể thay bằng:

### **1. EmailJS (Dễ nhất - không cần backend)**

- https://www.emailjs.com
- Free: 200 emails/tháng
- Setup trong 2 phút

### **2. SendGrid**

- https://sendgrid.com
- Free: 100 emails/ngày

### **3. Gmail SMTP (Phức tạp hơn)**

- Dùng NodeMailer + Gmail App Password
- Không khuyến khích cho production

---

## ✅ Checklist

- [ ] Tạo tài khoản Resend
- [ ] Lấy API key
- [ ] Thêm vào `.env.local`
- [ ] Restart dev server
- [ ] Test gửi form
- [ ] Kiểm tra email (inbox/spam)
- [ ] (Optional) Verify domain
- [ ] (Optional) Tùy chỉnh email template

---

## 🎯 Sau khi setup xong:

Khi deploy lên Vercel/Netlify, nhớ thêm environment variable:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
```

**Happy Coding! 🚀**
