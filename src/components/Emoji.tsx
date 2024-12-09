// Import statements
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Emoji = () => {
  useEffect(() => {
  
      AOS.init({duration:800});  // Initialize AOS only if the environment variable is true
    }
 , []);

  return (
    <>
      <div  className="text-pink bg-black pt-8 " id="reviews">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="mb-10 space-y-4 px-6 md:px-0">
            <h2 className="text-center text-2xl font-bold text-pink-400 md:text-4xl">
              We have some fans.
            </h2>
          </div>

          <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
            {/* First user review */}
            <div
              className="aspect-auto p-8 py-7 border border-pink-400 rounded-3xl text-pink-400  shadow-pink-400 dark:shadow-none"
              data-aos="fade-right"
            >
              <div className="flex gap-4">
                <Image
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  alt="user avatar"
                  width={400}
                  height={400}
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-pink-400 dark:text-white">Daniella Doe</h6>
                  <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                </div>
              </div>
              <p className="mt-8">
             Ramesha work with HTML and CSS is fantastic. She creates clean, responsive websites that look great on any device. Her attention to detail and focus on accessibility and SEO make her stand out. I always trust her with web projects!
              </p>
            </div>

            {/* Second user review */}
            <div
              className="aspect-auto p-8   py-7 border border-pink-400 rounded-3xl text-pink-400  shadow-pink-400 dark:shadow-none"
              data-aos="fade-right"
            >
              <div className="flex gap-4">
                <Image
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/14.jpg"
                  alt="user avatar"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-pink-400 dark:text-white">Jane Doe</h6>
                  <p className="text-sm text-gray-500 dark:text-gray-300">Developer</p>
                </div>
              </div>
              <p className="mt-8">
              Ramesha is a Next.js expert. She builds fast, SEO-friendly sites with great performance. Her skills with SSR and static sites have really made a difference in our projects. Highly recommend working with her!
              </p>
            </div>

            {/* Third user review */}
            <div
              className="aspect-auto p-8 py-7 border border-pink-400 rounded-3xl text-pink-400  shadow-pink-400 dark:shadow-none"
              data-aos="fade-right"
            >
              <div className="flex gap-4">
                <Image
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/18.jpg"
                  alt="user avatar"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-pink-400 dark:text-white">Yanick Doe</h6>
                  <p className="text-sm text-gray-500 dark:text-gray-300">Developer</p>
                </div>
              </div>
              <p className="mt-8">
          Ramesha makes great use of Tailwind CSS. She creates beautiful, responsive designs quickly and efficiently. Her ability to prototype and customize layouts is impressive. A true pro when it comes to Tailwind!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Emoji;






