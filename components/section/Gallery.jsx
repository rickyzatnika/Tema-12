/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import AOSWrapper from "../AOS/AOSWrapper";
import ShowProtocol from "../ShowProkes";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const LightGallery = dynamic(() => import("lightgallery/react"), {
  ssr: false,
});

const Gallery = () => {
  return (
    <>
      <AOSWrapper>
        <div
          id="gallery"
          className="w-full bg-[#ffffff] px-3 min-h-3xl py-14 p-0 md:p-14  relative"
        >
          <div className="text-center  w-full py-4 leading-relaxed">
            <div className="flex items-center justify-center py-2 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600  bg-clip-text text-transparent text-xl sm:text-2xl">
              <span
                data-aos="fade-left"
                data-aos-duration="1000"
                className="p-1 text-3xl alex border-b border-zinc-50 "
              >
                Happiness
              </span>{" "}
              <span
                data-aos="fade-right"
                data-aos-duration="1000"
                className="alex text-5xl"
              >
                {" "}
                Moments
              </span>
            </div>
          </div>
          <LightGallery
            mode="lg-fade"
            speed={300}
            addClass={true}
            closeOnTap={true}
            isMobile
            elementClassNames="w-full columns-3 px-1 gap-0 py-4 group "
          >
            <Link href="/img/gallery/3.jpg">
              <img
                data-aos="zoom-in-up"
                data-aos-duration="1200"
                className="img-responsive border-2 border-zinc-400/50 shadow-inner shadow-black"
                src="/img/gallery/3.jpg"
                alt=""
              />
            </Link>

            <Link href="/img/gallery/5.jpg">
              <img
                data-aos="zoom-in-up"
                data-aos-duration="1400"
                className="img-responsive border-2 border-zinc-400/50 shadow-inner shadow-black"
                src="/img/gallery/5.jpg"
                alt=""
              />
            </Link>
            <Link href="/img/gallery/6.jpg">
              <img
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                className="img-responsive border-2 border-zinc-400/50 shadow-inner shadow-black"
                src="/img/gallery/6.jpg"
                alt=""
              />
            </Link>
            <Link href="/img/gallery/4.jpg">
              <img
                data-aos="zoom-in-up"
                data-aos-duration="1300"
                className="img-responsive border-2 border-zinc-400/50 shadow-inner shadow-black"
                src="/img/gallery/4.jpg"
                alt=""
              />
            </Link>
            <Link href="/img/gallery/1.jpg">
              <img
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                className="img-responsive border-2 border-zinc-400/50 shadow-inner shadow-black"
                src="/img/gallery/1.jpg"
                alt=""
              />
            </Link>
            <Link href="/img/gallery/2.jpg">
              <img
                data-aos="zoom-in-up"
                data-aos-duration="1100"
                className="img-responsive border-2 border-zinc-400/50 shadow-inner shadow-black"
                src="/img/gallery/2.jpg"
                alt=""
              />
            </Link>
            <Link href="/img/gallery/7.jpg">
              <img
                data-aos="zoom-in-up"
                data-aos-duration="1600"
                className="img-responsive border-2 border-zinc-400/50 shadow-inner shadow-black"
                src="/img/gallery/7.jpg"
                alt=""
              />
            </Link>

            <Link href="/img/gallery/8.jpg">
              <img
                data-aos="zoom-in-up"
                data-aos-duration="1700"
                className="img-responsive border-2 border-zinc-400/50 shadow-inner shadow-black"
                src="/img/gallery/8.jpg"
                alt=""
              />
            </Link>
            <Link href="/img/gallery/9.jpg">
              <img
                data-aos="zoom-in-up"
                data-aos-duration="1800"
                className="img-responsive border-2 border-zinc-400/50 shadow-inner shadow-black"
                src="/img/gallery/9.jpg"
                alt=""
              />
            </Link>

            <Link href="/img/gallery/10.jpg">
              <img
                data-aos="zoom-in-up"
                data-aos-duration="1900"
                className="img-responsive border-2 border-zinc-400/50 shadow-inner shadow-black"
                src="/img/gallery/10.jpg"
                alt=""
              />
            </Link>
          </LightGallery>
        </div>
      </AOSWrapper>

      <ShowProtocol />
    </>
  );
};

export default Gallery;
