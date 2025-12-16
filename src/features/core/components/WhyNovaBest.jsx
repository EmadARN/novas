import Image from "next/image";
import { features } from "../constants";

export default function WhyChooseUs() {
  return (
    <div>
      {/* لیست توضیحات بالا */}
      <div className="mb-12 px-6 grid gap-6 sm:gap-8 md:grid-cols-2 text-right">
        {[
          "برنامه‌ریزی به سبک رتبه‌های برتر: ما در نُوا برای هر دانش‌آموز یک مسیر اختصاصی طراحی می‌کنیم.",
          "کیفیت بی‌نظیر با نخبگان آموزشی: تیم رتبه‌برترها تجربه واقعی موفقیت را به شما منتقل می‌کنند.",
          "منابع استاندارد و بروز: جدیدترین آموزش‌ها و خدمات کاربردی در اختیار شماست.",
          "پشتیبانی دائمی و مطمئن: تا روز کنکور کنار شماییم — از انگیزه تا حل سوال.",
        ].map((text, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold">
              {index + 1}
            </div>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900">
                {text.split(":")[0]}:
              </span>{" "}
              {text.split(":")[1]}
            </p>
          </div>
        ))}
      </div>

      {/* ================= Desktop UI ================= */}
      <section className="relative mx-auto my-12 hidden md:block w-full max-w-[900px] h-[600px] lg:h-[700px]">
        {/* دایره وسط */}
        <div className="absolute top-1/2 left-1/2 w-[530px] h-[530px] rounded-full overflow-hidden -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/home/about_us/about_us2.jpg"
            alt="دایره مرکز"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-xs rounded-full" />
        </div>

        {/* متن وسط */}
        <div className="absolute top-1/2 left-1/2 w-4/5 -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h2 className="text-3xl font-bold text-gray-800">
            چرا ما را انتخاب کنید؟
          </h2>
          <p className="mt-4 text-base text-gray-100 leading-7">
            ما بهترین خدمات را با کیفیت بالا ارائه می‌دهیم تا تجربه‌ای بی‌نظیر
            داشته باشید.
          </p>
        </div>

        {/* باکس‌های اطراف */}
        {features.map((item, index) => {
          const positions = [
            "top-16 right-0",
            "top-16 -left-10 flex-row-reverse",
            "bottom-16 right-0",
            "bottom-16 -left-10 flex-row-reverse",
          ];

          return (
            <div
              key={index}
              className={`absolute ${positions[index]} flex items-center gap-2 transition-transform duration-500 hover:scale-110 cursor-pointer`}
            >
              <div className="relative w-24 h-24 rounded-full bg-white">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-3"
                />
              </div>
              <div className="w-36 p-2 text-right">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500 leading-5">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      {/* ================= Mobile / Tablet UI ================= */}
      <div className="md:hidden px-6 space-y-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-stretch gap-4 rounded-2xl bg-white shadow-sm overflow-hidden"
          >
            {/* تصویر مستطیلی تمام‌قد */}
            <div className="relative w-24 flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* متن */}
            <div className="p-4 text-right">
              <h3 className="text-base font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500 leading-6">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
