import React from "react";
import Image from "next/legacy/image";
import AOSWrapper from "../AOS/AOSWrapper";

import Link from "next/link";
import { SlSocialInstagram } from "react-icons/sl";

import "animate.css";

const Profile = () => {
  return (
    <>
      <AOSWrapper>
        <div
          className="w-full min-h-screen bg-[#fff]  flex flex-col items-center justify-center py-10 lg:justify-between relative "
          id="profile"
        >
          {/* {showQrCode && <GetQrCode setShowQrCode={setShowQrCode} />} */}

          <div className="bg-[#fefefe]  shadow-lg shadow-black/10 w-[93%] md:w-[80%] py-12 relative  flex flex-col items-center justify-center  h-full  z-30">
            <div className="flex shadow-inner overflow-hidden w-fit bg-[#f1f8ff] py-10 sm:py-10 px-20 sm:px-14 shadow-black/20 flex-col justify-center gap-0 items-center relative mx-auto">
              <div className="animated-element absolute -bottom-8 -left-12 w-full">
                <Image
                  src="/img/bunga.png"
                  width={150}
                  height={150}
                  priority
                  alt=""
                  className="bg-goyang"
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="800"
                className="relative overflow-hidden"
              >
                <div className="absolute left-0 right-0 w-full h-full z-10 bg-gradient-to-t from-zinc-800/80 via-black/10 to-transparent rounded-t-full  " />
                <Image
                  src="/img/gallery/man.png"
                  alt=""
                  width={160}
                  height={200}
                  className="rounded-t-full"
                  objectFit="cover"
                  objectPosition="top"
                  priority
                />
              </div>

              <div className="animated-element flex flex-col gap-2 items-center justify-center px-4">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="titles mt-3 text-2xl text-[#333] capitalize "
                >
                  Tio Nanda
                </h2>
                <Link
                  href="https://instagram.com/rahmadi.irawansyah"
                  target="_blank"
                  passHref
                  prefetch={false}
                >
                  <SlSocialInstagram
                    size={22}
                    className="text-zinc-400 mb-2 animate-spin hover:animate-none"
                  />
                </Link>
                <div className="text-center text-[#919090] ">
                  <p
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="alex  text-lg"
                  >
                    Putra dari :
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className="titles text-xl"
                  >
                    Bpk. Irawan Yusmiatna{" "}
                  </p>
                  <p
                    className="text-zinc-500"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    &
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    className="titles text-xl"
                  >
                    Ibu Rosmini
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="brush text-6xl my-8 text-[#3b3b3b]  "
            >
              &
            </div>
            <div className="relative  overflow-hidden shadow-inner bg-[#f1f8ff]  py-10 sm:py-10 px-20 sm:px-14  w-fit shadow-black/20  flex flex-col items-center justify-center gap-0">
              <div className="absolute -bottom-8 -right-14 ">
                <Image
                  src="/img/bunga.png"
                  width={150}
                  height={150}
                  priority
                  alt=""
                  className="bg-goyang "
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="800"
                className="relative overflow-hidden"
              >
                <div className="absolute  left-0 right-0 w-full h-full z-10 bg-gradient-to-t from-zinc-800/80 via-black/10 to-transparent rounded-t-full to-black/20  " />
                <Image
                  src="/img/gallery/girl.png"
                  alt=""
                  width={160}
                  height={200}
                  objectFit="cover"
                  objectPosition="top"
                  className="rounded-t-full"
                  priority
                />
              </div>

              <div className="flex flex-col gap-2 items-center justify-center px-4">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="titles mt-3 text-2xl text-[#333] capitalize "
                >
                  Elva Aldiva
                </h2>
                <Link
                  href="https://instagram.com/dindanovitas"
                  target="_blank"
                  passHref
                  prefetch={false}
                >
                  <SlSocialInstagram
                    className="text-zinc-400 mb-2  animate-spin hover:animate-none"
                    size={22}
                  />
                </Link>
                <div className="text-center text-[#919090]">
                  <p
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="alex text-lg"
                  >
                    Putra dari :
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className="titles  text-xl"
                  >
                    Bpk. Irawan Yusmiatna{" "}
                  </p>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    &
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    className="titles text-xl"
                  >
                    Ibu Rosmini
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AOSWrapper>
    </>
  );
};

export default Profile;
