"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

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


const uniqueCategories = [
  "összes projekt",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("összes projekt");

  const filteredProjects = projectData.filter((project) => {
    return category === "összes projekt"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Projektjeim
        </h2>
        {/* tavs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 ">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
