"use client";

import MapSection from "@/features/core/components/aboutPage/MapSection";
import { Mail, Phone, MapPin, Send, Clock, Instagram } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="w-full overflow-auto bg-gradient-to-b from-[#f8f9ff] to-white rounded-b-2xl">
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(to bottom, #EBEAED, var(--primary)",
        }}
        className="text-white py-20 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">ارتباط با ما</h1>
          <p className="text-xl opacity-90">
            ما همیشه آماده پاسخگویی به شما هستیم
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="max-w-6xl mx-auto px-6 -mt-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email */}
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
              <Mail />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              ایمیل
            </h3>
            <p className="text-gray-600 text-center mb-4" dir="ltr">
              info@novawise.com
            </p>
            <a
              href="mailto:info@novawise.com"
              className="block w-full text-center py-3 px-6 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-white rounded-xl font-medium hover:opacity-90 transition"
            >
              ارسال ایمیل
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
              <Phone />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              تلفن
            </h3>
            <p className="text-gray-600 text-center mb-4">۰۲۱-۱۲۳۴۵۶۷۸</p>
            <a
              href="tel:02112345678"
              className="block w-full text-center py-3 px-6 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-white rounded-xl font-medium hover:opacity-90 transition"
            >
              تماس تلفنی
            </a>
          </div>

          {/* Address */}
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
              <MapPin />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              آدرس
            </h3>
            <p className="text-gray-600 text-center mb-4">
              تهران، خیابان ولیعصر
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("map-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="block w-full text-center py-3 px-6 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-white rounded-xl font-medium hover:opacity-90 transition"
            >
              مشاهده نقشه
            </button>
          </div>
        </div>
      </div>

      {/* Social */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          راه‌های ارتباطی
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Telegram */}
          <a
            href="https://t.me/novawise"
            target="_blank"
            className="bg-white rounded-2xl p-8 shadow-lg card-hover flex flex-col items-center"
          >
            <div className="w-10 h-10 md:w-15 md:h-15 rounded-full flex items-center justify-center mb-4 text-white bg-[#0088cc]">
              {<Send />}
            </div>
            <h3 className="social-title">تلگرام</h3>
            <p className="social-text">پاسخگویی سریع و آنی</p>
            <span className="text-blue-600 font-medium">پیام در تلگرام</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/989123456789"
            target="_blank"
            className="bg-white rounded-2xl p-8 shadow-lg card-hover flex flex-col items-center"
          >
            <div className="w-10 h-10 md:w-15 md:h-15 rounded-full flex items-center justify-center mb-4 text-white bg-[#25D366]">
              <Phone />
            </div>
            <h3 className="social-title">واتساپ</h3>
            <p className="social-text">چت آنلاین با پشتیبانی</p>
            <span className="text-green-600 font-medium">شروع گفتگو</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/novawise"
            target="_blank"
            className="bg-white rounded-2xl p-8 shadow-lg card-hover flex flex-col items-center"
          >
            <div className="w-10 h-10 md:w-15 md:h-15 rounded-full flex items-center justify-center mb-4 text-white bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
              <Instagram size={20} />
            </div>
            <h3 className="social-title">اینستاگرام</h3>
            <p className="social-text">آخرین اخبار و به‌روزرسانی‌ها</p>
            <span className="text-purple-600 font-medium">دنبال کنید</span>
          </a>
        </div>
      </div>

      {/* Map */}
      <div id="map-section" className=" md:max-w-6xl mx-auto  mb-16">
        <MapSection />
      </div>

      {/* Footer */}
      <div className="gradient-bg text-white py-8 text-center">
        © ۱۴۰۳ Novawise - تمامی حقوق محفوظ است
      </div>
    </div>
  );
};

export default ContactUs;
