import Image from "next/image";
import { features } from "../constants";
export default function WhyChooseUs() {
  return (
    <div>
      <div className="mb-12 px-6 grid gap-6 sm:gap-8 md:grid-cols-2 text-right">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold">
            ۱
          </div>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold text-gray-900">
              برنامه‌ریزی به سبک رتبه‌های برتر:
            </span>{" "}
            ما در <strong>نُوا</strong> برای هر دانش‌آموز یک مسیر اختصاصی طراحی
            می‌کنیم.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold">
            ۲
          </div>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold text-gray-900">
              کیفیت بی‌نظیر با نخبگان آموزشی:
            </span>{" "}
            تیم رتبه‌برترها تجربه واقعی موفقیت را به شما منتقل می‌کنند.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold">
            ۳
          </div>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold text-gray-900">
              منابع استاندارد و بروز:
            </span>{" "}
            جدیدترین آموزش‌ها و خدمات کاربردی در اختیار شماست.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold">
            ۴
          </div>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold text-gray-900">
              پشتیبانی دائمی و مطمئن:
            </span>{" "}
            تا روز کنکور کنار شماییم — از انگیزه تا حل سوال.
          </p>
        </div>
      </div>

      <section className="relative mx-auto my-12 w-full max-w-[900px] h-[700px] md:h-[600px] lg:h-[700px]">
        {/* دایره بزرگ وسط با تصویر */}
        <div className="absolute top-1/2 left-1/2 w-[300px] md:w-[530px] h-[300px] md:h-[530px] rounded-full overflow-hidden -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/home/about_us/about_us2.jpg"
            alt="دایره مرکز"
            fill
            className="object-cover "
          />
          {/* لایه شفاف برای بهتر دیده شدن متن وسط */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-xs rounded-full"></div>
        </div>

        {/* متن وسط دایره */}
        <div className="absolute top-1/2 left-1/2 w-4/5 -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800">
            چرا ما را انتخاب کنید؟
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-100 leading-7">
            ما بهترین خدمات را با کیفیت بالا ارائه می‌دهیم تا تجربه‌ای بی‌نظیر
            داشته باشید.
          </p>
        </div>

        {/* چهار باکس گوشه‌ها */}
        {/* بالا سمت راست */}
        <div className="absolute top-15 right-0 flex items-center flex-row transition-transform duration-500 hover:scale-110 cursor-pointer">
          <div className="relative w-24 h-24 rounded-full bg-white">
            <Image
              src={features[0].image}
              alt={features[0].title}
              className="absolute top-[15%] left-[12%] w-3/4 h-3/4 object-contain"
              width={96}
              height={96}
            />
          </div>
          <div className="w-36 p-2 text-right">
            <h3 className="text-lg font-semibold text-gray-800">
              {features[0].title}
            </h3>
            <p className="mt-1 text-sm text-gray-500 leading-5">
              {features[0].description}
            </p>
          </div>
        </div>

        {/* بالا سمت چپ */}
        <div className="absolute top-15 -left-10 flex items-center flex-row-reverse transition-transform duration-500 hover:scale-110 cursor-pointer">
          <div className="relative w-24 h-24 rounded-full bg-white">
            <Image
              src={features[1].image}
              alt={features[1].title}
              className="absolute top-[15%] left-[12%] w-3/4 h-3/4 object-contain"
              width={96}
              height={96}
            />
          </div>
          <div className="w-36 p-2 text-left">
            <h3 className="text-lg font-semibold text-gray-800 text-right">
              {features[1].title}
            </h3>
            <p className="mt-1 text-sm text-gray-500 leading-5 text-right">
              {features[1].description}
            </p>
          </div>
        </div>

        {/* پایین سمت راست */}
        <div className="absolute bottom-15 right-0 flex items-center flex-row transition-transform duration-500 hover:scale-110 cursor-pointer">
          <div className="relative w-24 h-24 rounded-full bg-white">
            <Image
              src={features[2].image}
              alt={features[2].title}
              className="absolute top-[15%] left-[12%] w-3/4 h-3/4 object-contain"
              width={96}
              height={96}
            />
          </div>
          <div className="w-36 p-2 text-right">
            <h3 className="text-lg font-semibold text-gray-800">
              {features[2].title}
            </h3>
            <p className="mt-1 text-sm text-gray-500 leading-5">
              {features[2].description}
            </p>
          </div>
        </div>

        {/* پایین سمت چپ */}
        <div className="absolute bottom-15 -left-10 flex items-center flex-row-reverse transition-transform duration-500 hover:scale-110 cursor-pointer">
          <div className="relative w-24 h-24 rounded-full bg-white">
            <Image
              src={features[3].image}
              alt={features[3].title}
              className="absolute top-[15%] left-[12%] w-3/4 h-3/4 object-contain"
              width={96}
              height={96}
            />
          </div>
          <div className="w-36 p-2 text-left">
            <h3 className="text-lg font-semibold text-gray-800 text-right">
              {features[3].title}
            </h3>
            <p className="mt-1 text-sm text-gray-500 leading-5 text-right">
              {features[3].description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
