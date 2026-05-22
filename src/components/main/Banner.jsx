import Image from "next/image";
import React from "react";
import { Play } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Star } from "lucide-react";
import { Ubuntu } from "next/font/google";
import { Button } from "@heroui/react";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const Banner = () => {
  return (
    <div className={`${ubuntu.className}`}>
      <section className="relative overflow-hidden py-12 md:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat h-auto rounded-xl">
          <div className="grid place-items-center py-15">
            {/* <div className="absolute inset-0 blur-2xl"></div> */}
            <div className="space-y-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-(--primary)/10 rounded-full border border-blue-600/20 ) font-bold text-sm text-(--primary)">
                <Star className="w-4 h-4 " />
                <span>Trusted by 10,000+ Students Worldwide</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.2]">
                Launch Your{" "}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-blue-800">
                  Ideas.
                </span>{" "}
                <br />
                Build the Future.
              </h1>

              <p className="text-xl text-slate-800 leading-relaxed max-w-xl">
                The ultimate launchpad for student entrepreneurs. Access tools, mentorship, and funding to turn your side projects into scalable startups.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button
                  href="/courses"
                  className="h-14 px-8 text-lg font-bold bg-(--primary) text-white rounded-full shadow-2xl shadow-blue-600/30 group"
                >
                  Explore Ideas
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  className="h-14 px-8 text-lg font-bold rounded-full text-(--primary) group"
                  variant="outline"
                >
                  
                  <Play className="mr-2 fill-slate-900 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </div>
               <div className="absolute -bottom-12 left-8 right-8 bg-white/50 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-2xl">
                      <div className="flex items-center justify-center gap-6">
                        <div className="flex -space-x-3">
                          {[1, 2, 3, 4].map((i) => (
                            <Image
                              key={i}
                              src={`https://i.pravatar.cc/100?img=${i + 10}`}
                              width={40}
                              height={40}
                              className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                              alt="avatar"
                            />
                          ))}
                        </div>

                        <div>
                          <p className="font-bold text-sm">
                            Join the community
                          </p>

                          <p className="text-xs text-slate-500">
                            500+ new enrollments today
                          </p>
                        </div>
                      </div>
                    </div>
            </div>

            {/* Right Image
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

                  <div className="relative bg-white p-2 rounded-[2.5rem] shadow-2xl overflow-hidden aspect-video lg:aspect-square">
                    <Image
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                      alt="Learning"
                      fill
                      className="rounded-4xl object-cover transform transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute bottom-8 left-8 right-8 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-2xl">
                      <div className="flex items-center gap-4">
                        <div className="flex -space-x-3">
                          {[1, 2, 3, 4].map((i) => (
                            <Image
                              key={i}
                              src={`https://i.pravatar.cc/100?img=${i + 10}`}
                              width={40}
                              height={40}
                              className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                              alt="avatar"
                            />
                          ))}
                        </div>

                        <div>
                          <p className="font-bold text-sm">
                            Join the community
                          </p>

                          <p className="text-xs text-slate-500">
                            500+ new enrollments today
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
