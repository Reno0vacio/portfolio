"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: "/work/mexmex.png",
    category: "wordpress",
    name: "Mex&Mex",
    description:
        "Személyszállítás és reptéri transzfer vállalat weboldala amely WordPress motor segítségével készült .",
    link: "https://mexmex.hu/",
    github: "",
  },
  {
    image: "/work/halabalatrans.png",
    category: "react js",
    name: "Halabalatrans",
    description:
      "Egy költöztető cég oldala, ahol az árakat lehet megtekinteni.",
    link: "https://halabalatrans-v2.vercel.app/",
    github: "",
  },
  {
    image: "/work/flowershop.png",
    category: "react js",
    name: "Virágbolt Portfólio oldal",
    description: "Egyszerű egy oldalas weboldal virágüzletek számára",
    link: "https://flowershop-eight.vercel.app/",
    github: "https://github.com/akiilles05/flowershop",
  },
  {
    image: "/work/portfolio-2.png",
    category: "php",
    name: "LA RolePlay Website",
    description:
        "PayPal fizetési mód integráció és játékszerverre való automatikus frissítés",
    link: "https://larphun.hu",
    github: "",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center xl:items-start">
          <h2 className="section-title mb-4">Projektjeim</h2>
          <p className="subtitle mb-8">Utolsó Projekteim</p>
          <Link href="/projects">
            <Button>Összes Projekt</Button>
          </Link>
        </div>

        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px] "
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
