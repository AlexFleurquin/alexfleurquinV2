'use client';

import { useEffect } from 'react';
import Image from 'next/image';

import Client01 from '@/public/images/cajoo.svg';
import Client02 from '@/public/images/OB.svg';
import Client03 from '@/public/images/nalo.svg';
import Client04 from '@/public/images/BME.svg';
import Client05 from '@/public/images/AXA.svg';
import Client06 from '@/public/images/CDC.svg';

// Import Swiper
import Swiper, { Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
Swiper.use([Autoplay]);

export default function Clients() {
  useEffect(() => {
    const carousel = new Swiper('.clients-carousel', {
      slidesPerView: 'auto',
      spaceBetween: 64,
      centeredSlides: true,
      loop: true,
      speed: 5000,
      noSwiping: true,
      noSwipingClass: 'swiper-slide',
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
    });
  }, []);

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-30">
        <div className="py-12 md:py-16">
          <div className="overflow-hidden">
            {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
            {/* * Custom styles in src/css/additional-styles/theme.scss */}
            <div className="clients-carousel swiper-container relative ">
              <div className="swiper-wrapper !ease-linear select-none items-center">
                {/* Carousel items */}
                <div className="swiper-slide !w-auto">
                  <Image
                    className="dark:invert"
                    src={Client01}
                    alt="Client 01"
                    width={70}
                    height={30}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    src={Client02}
                    alt="Client 02"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    className="dark:invert"
                    src={Client03}
                    alt="Client 03"
                    width={80}
                    height={33}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    className="dark:invert"
                    src={Client04}
                    alt="Client 04"
                    width={85}
                    height={36}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    className="dark:invert"
                    src={Client05}
                    alt="Client 05"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    className="dark:invert"
                    src={Client06}
                    alt="Client 06"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
