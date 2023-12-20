"use client";
import DevImg from "./DevImg";
import Image from "next/image";

import { Progress } from "flowbite-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Illés Ákos",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+36 20 248 2005",
  },
  {
    icon: <MailIcon size={20} />,
    text: "illes.akos@illesinnovate.hu",
  },
  {
    icon: <Calendar size={20} />,
    text: "Születési év: 2005",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Győr",
  },
];

const tapasztalat = [
  {
    title: "Tapasztalat",
    data: [
      {
        title: "Kezdés",
        year: "2019",
        description:
          "2019 közepén kezdtem el foglalaskodni a weboldal fejlesztéssel. Ebben az évben csak egyszerű nem olyan szép dízájnú oldalakat készítettem el. Ezek csak egy oldalasask voltak",
      },
      {
        title: "Alapok",
        year: "2020",
        description:
          "Ebben az évben videók, leírások és könyvek alapján sajátítottam el a Weboldal fejlesztés alapjait.",
      },
      {
        title: "Weboldalak készítése",
        year: "2020-2021",
        description:
          "Itt már egyre több gyakorlati weboldalt készítettem el vagy néztem egy webodalt és azt megprobáltam lemásolni.",
      },
      {
        title: "CSS Framework",
        year: "2022",
        description:
          "2022-ben hallottam előszőr a CSS Frameworkről. Előszőr a legnépszerűbb framework dokumentációját és gyakorlatban is elkezdtem használni",
      },
      {
        title: "Backend tanulása",
        year: "2022-2023",
        description:
          "Itt kezdtem el értelmezni a komolyabb weboldalakt hogy hogyan is müködik. Előszőr a PHP nyelvet kezdtem el sajátítani, majd JavaScript frameworkot mint például Next.JS és Expert.JS",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
        percent: "95",
      },
      {
        name: "PHP",
        percent: "70",
      },
      {
        name: "JavaScript",
        percent: "60",
      },
      {
        name: "ReactJS",
        percent: "75",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        name: "MySQL",
        percent: "90",
      },
      {
        name: "WordPress",
        percent: "75",
      },
      {
        name: "Figma",
        percent: "80",
      },
      {
        name: "Adobe Csomag",
        percent: "85",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto ">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Rólam
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* iamge */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles=" w-[390px] h-[397px] bg-no-repeat relative profileimg"
              imgSrc="/hero/developer.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Személyes Információk
                </TabsTrigger>
                <TabsTrigger value="tapasztalat">Tapasztalat</TabsTrigger>
                <TabsTrigger value="skills">Készségek</TabsTrigger>
              </TabsList>

              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Illés Ákosnak hívnak és Weboldal Fejlesztő vagyok
                    </h3>
                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                      Évek óta foglalkozom webfejlesztéssel és játék szerver
                      fejlesztéssel, mind a Frontend, mind a Backend területén.
                      Folyamatosan képzem magam, hogy lépést tartson az új
                      technológiákkal és módszerekkel. Meggyőződésem, hogy a
                      kitartó munka mindig eredményre vezet.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* Language skills */}
                    <div className="flex flex-col  gap-y-2">
                      <div className="text-primary">Nyelvi tudás</div>
                      <div className="border-b border-border"></div>
                      <div>English, Hungarian</div>
                    </div>
                  </div>
                </TabsContent>
                {/* tapasztalat, education  */}
                <TabsContent value="tapasztalat">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left flex gap-x-4 items-center text-[22px] text-primary">
                      <Briefcase />
                      Tapasztalat
                    </h3>
                    <div>
                      <div>
                        {/* <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <h4 className="capitalize, font-medium">
                            {getData(tapasztalat, "Tapasztalat").title}
                          </h4>
                        </div> */}
                        {/* list */}
                        <div className="flex flex-col  gap-y-8">
                          {getData(tapasztalat, "Tapasztalat").data.map(
                            (item, index) => {
                              const { title, year, description } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {year}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {title}
                                    </div>
                                    <div className="text--base font-medium">
                                      {description}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Mindennap használt eszközök</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Skills */}
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          Programozási Tudás
                        </h4>
                        <div className="border-b border-border mb-4"></div>
                        {/* Skill list */}
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name, percent } = item;
                            return (
                              <div
                                className="mb-4 text-center xl:text-left"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                                <div className="relative pt-1">
                                  <div className="flex items-center">
                                    <div>
                                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-dark bg-light">
                                        {percent}%
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex h-3 overflow-hidden text-xs rounded bg-gray-300">
                                    <div
                                      style={{ width: `${percent}%` }}
                                      className="flex flex-col whitespace-nowrap text-white justify-center bg-green-500 transition-all duration-300 rounded"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                      {/* Tools */}
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          Kiegészítő tudás
                        </h4>
                        <div className="border-b border-border mb-4"></div>
                        {/* Tool list */}
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { name, percent } = item;
                          return (
                            <div
                              className="mb-4 text-center xl:text-left"
                              key={index}
                            >
                              <div className="font-medium">{name}</div>
                              <div className="relative pt-1">
                                <div className="flex items-center">
                                  <div>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-dark bg-light">
                                      {percent}%
                                    </span>
                                  </div>
                                </div>
                                <div className="flex h-3 overflow-hidden text-xs rounded bg-gray-300">
                                  <div
                                    style={{ width: `${percent}%` }}
                                    className="flex flex-col whitespace-nowrap text-white justify-center bg-green-500 transition-all duration-300 rounded"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
