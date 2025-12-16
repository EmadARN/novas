"use client";

import { features } from "../constants";

const SkewedInfiniteScroll = () => {
  const items = features.map((item, index) => ({
    id: String(index + 1),
    title: item.title,
    text: item.description,
  }));

  return (
    <div className="w-full py-10">
      <div className="flex items-center justify-center">
        <div className="fog-wrapper relative w-full overflow-hidden px-4">
          <div className="fog-top" />
          <div className="fog-bottom" />

          <div className="skew-scroll mx-auto grid h-[220px] w-full max-w-[320px] grid-cols-1 gap-4 sm:h-[400px] sm:max-w-[600px] sm:grid-cols-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex cursor-pointer items-start gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.03] hover:shadow-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1 h-6 w-6 flex-none text-indigo-500"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>

                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-800">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*  CSS امن برای Next + styled-jsx */}
      <style jsx>{`
        .skew-scroll {
          animation: skew-scroll 20s linear infinite;
          will-change: transform;
          transform: translateZ(0);
        }

        @keyframes skew-scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        /* فقط برای دسکتاپ افکت سنگین */
        @media (min-width: 640px) {
          @keyframes skew-scroll {
            0% {
              transform: rotateX(20deg) rotateZ(-20deg) skewX(20deg)
                translateY(50%);
            }
            100% {
              transform: rotateX(20deg) rotateZ(-20deg) skewX(20deg)
                translateY(-100%);
            }
          }
        }5

        .fog-top,
        .fog-bottom {
          pointer-events: none;
          position: absolute;
          left: 0;
          right: 0;
          height: 60px;
          z-index: 10;
        }

        .fog-top {
          top: 0;
          background: linear-gradient(
            to bottom,
            rgba(235, 234, 237, 1),
            rgba(235, 234, 237, 0)
          );
        }

        .fog-bottom {
          bottom: 0;
          background: linear-gradient(
            to top,
            rgba(235, 234, 237, 1),
            rgba(235, 234, 237, 0)
          );
        }
      `}</style>
    </div>
  );
};

export default SkewedInfiniteScroll;
