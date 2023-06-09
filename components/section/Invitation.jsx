import Image from "next/legacy/image";
import AOSWrapper from "../AOS/AOSWrapper";
import Link from "next/link";

const Invitation = () => {
  return (
    <>
      <AOSWrapper>
        <div
          id="event"
          className="w-full bg-gradient-to-b from-[#FBFBFB]  px-4  flex items-center pt-2 flex-col py-5 justify-evenly relative"
        >
          {/* <div className="w-full bg-invitation absolute -rotate-45 mix-blend-screen left-44 sm:left-60 md:left-96 lg:left-40 top-0">
        <Image
          src="/image/ornamen-profile.png"
          width={50}
          height={25}
          alt=""
          objectFit="contain"
          layout="responsive"
          priority
        />
      </div> */}

          <div className=" bg-[url('/img/bubbles.png')] bg-cover bg-right-bottom relative flex flex-col items-center py-12  justify-center rounded shadow-lg shadow-zinc-300/50">
            <div className="absolute w-full h-full bg-gradient-to-t from-sky-300/70 via-transparent to-white/40 " />
            <div className="flex flex-col items-center justify-center gap-4 w-full">
              <div className="w-[60%] relative rounded-t-full border-8  border-[#ffffff] shadow-zinc-300 shadow-inner  text-center flex flex-col items-center gap-2  p-8 leading-relaxed">
                <h3
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="text-zinc-500 titles text-2xl "
                >
                  Akad Nikah
                </h3>
                <Image
                  data-aos="fade-up"
                  data-aos-duration="1100"
                  src="/img/rings.png"
                  alt=""
                  width={100}
                  height={75}
                  objectFit="contain"
                  priority
                  className="mix-blend-color-dodge -rotate-12 p-4"
                />
                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="font-semibold titles text-zinc-500  "
                >
                  {" "}
                  08.00 WIB s/d Selesai
                </p>
              </div>
              <h2
                data-aos="zoom-out"
                data-aos-duration="1200"
                data-aos-easing="linear"
                className="w-full text-3xl  text-zinc-500 my-4 brush relative  z-40 text-center"
              >
                10 September 2023
              </h2>
              <div className="w-[60%] relative rounded-b-full border-8  border-[#ffffff] shadow-zinc-300  shadow-inner text-center flex flex-col-reverse items-center gap-2  p-8 leading-relaxed">
                <h3
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  className="text-zinc-500 titles text-2xl "
                >
                  Resepsi
                </h3>
                <Image
                  data-aos="fade-down"
                  data-aos-duration="1100"
                  src="/img/glas.png"
                  alt=""
                  width={100}
                  height={75}
                  objectFit="contain"
                  priority
                  className="mix-blend-color-dodge -rotate-12 p-4"
                />
                <p
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  className="font-semibold titles text-zinc-500  "
                >
                  10.00 WIB s/d 14.20 WIB
                </p>
              </div>
            </div>
            <div className="py-4 leading-relaxed text-center relative z-40">
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-zinc-500 mb-2 titles text-xl"
              >
                Lokasi :
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="1100"
                className="text-zinc-500 mb-1 titles font-semibold flex text-xl flex-col tracking-wide items-center gap-3 "
              >
                Villa Bukit Indah <br />
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="1200"
                className="px-3  titles text-zinc-500 leading-relaxed text-sm "
              >
                Jl. Mimpin Tua, Brastagi, Tanah Karo, Sumatera Utara, Berastagi,
                Indonesia
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1300"
              className="w-full px-2 lg:px-8 flex flex-col items-center gap-5 py-3 relative z-40"
            >
              <Link
                href="https://goo.gl/maps/fjJo9C1Xp2uPhv816"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="py-2 text-sm px-5 titles animate-pulse antialiased bg-gradient-to-tr from-[#F8F8F8]/60 via-[#E6E6FA] to-[#F8F8F8]/60 shadow-md shadow-zinc-300/80 text-zinc-700 rounded">
                  {" "}
                  Open Maps
                </button>
              </Link>
            </div>
          </div>
        </div>
      </AOSWrapper>
    </>
  );
};

export default Invitation;
