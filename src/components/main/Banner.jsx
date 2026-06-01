"use client";

import Image from "next/image";
import React from "react";
import { Play } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Star } from "lucide-react";
import { Ubuntu } from "next/font/google";
import { Button } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const Banner = () => {
  return (
    <div className={`${ubuntu.className}`}>
      <section className="relative overflow-hidden py-12 md:py-18">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat h-[60vh] rounded-xl">
              <div className="grid place-items-center py-15">
                {/* <div className="absolute inset-0 blur-2xl"></div> */}
                <div className="space-y-8 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-(--primary)/10 rounded-full border border-blue-600/20 ) font-bold text-sm text-(--primary)">
                    <Star className="w-4 h-4 " />
                    <span>Trusted by 10,000+ Students Worldwide</span>
                  </div>

                  <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.2]">
                    Launch Your{" "}
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-blue-800">
                      Ideas.
                    </span>{" "}
                    <br />
                    Build the Future.
                  </h1>

                  <p className="text-xl text-slate-800 leading-relaxed max-w-xl">
                    The ultimate launchpad for student entrepreneurs. Access
                    tools, mentorship, and funding to turn your side projects
                    into scalable startups.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <Link href={"/ideas"}>
                      <Button className="h-14 px-8 text-lg font-bold bg-(--primary) text-white rounded-full shadow-2xl shadow-blue-600/30 group">
                        Explore Ideas
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>

                    <Button
                      className="h-14 px-8 text-lg font-bold rounded-full text-(--primary) group"
                      variant="outline"
                    >
                      <Play className="mr-2 fill-slate-900 group-hover:scale-110 transition-transform" />
                      Watch Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-[url('/images/image-2.jpg')] bg-cover bg-center bg-no-repeat h-[60vh] rounded-xl">
            <div className="absolute inset-0 bg-black/40" />
              <div className="grid place-items-center py-15">
                <div className="space-y-8 text-center">
                  <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.2]">
                    Build Today,{" "}
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-blue-800">
                      Lead Tomorrow.
                    </span>
                    <br />
                    Start with One Idea.
                  </h1>

                  <p className="text-xl leading-relaxed max-w-xl mx-auto text-center">
                    The ultimate launchpad for student entrepreneurs. Access
                    tools, mentorship, and funding to turn your side projects
                    into scalable startups.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <Link href={"/ideas"}>
                      <Button className="h-14 px-8 text-lg font-bold bg-(--primary) text-white rounded-full shadow-2xl shadow-blue-600/30 group">
                        Explore Ideas
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>

                    <Button
                      className="h-14 px-8 text-lg font-bold rounded-full text-(--primary) group"
                      variant="outline"
                    >
                      <Play className="mr-2 fill-slate-900 group-hover:scale-110 transition-transform" />
                      Watch Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-[url('/images/image-3.jpg')] bg-cover bg-center bg-no-repeat h-[60vh] rounded-xl ">
            <div className="absolute inset-0 bg-black/40" />
              <div className="grid place-items-center py-15">
 
                <div className="space-y-8 text-center">
                  <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.2]">
                    Launch Your{" "}
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-blue-800">
                      Startup Journey.
                    </span>
                  </h2>

                  <p className="text-xl text-slate-900 leading-relaxed max-w-xl mx-auto text-center">
                    The ultimate launchpad for student entrepreneurs. Access
                    tools, mentorship, and funding to turn your side projects
                    into scalable startups.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <Link href={"/ideas"}>
                      <Button className="h-14 px-8 text-lg font-bold bg-(--primary) text-white rounded-full shadow-2xl shadow-blue-600/30 group">
                        Explore Ideas
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>

                    <Button
                      className="h-14 px-8 text-lg font-bold rounded-full text-(--primary) group"
                      variant="outline"
                    >
                      <Play className="mr-2 fill-slate-900 group-hover:scale-110 transition-transform" />
                      Watch Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Banner;
