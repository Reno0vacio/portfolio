import { Code, Paintbrush2, Gem, Image, Aperture, Cpu } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <Code size={72} strokeWidth={0.8} />,
    title: "Weboldal Fejlesztés",
    desription:
      "Weboldalak készítését vállalom, és nincsenek korlátok azokban az elképzelésekben, amelyeket a kliens megvalósítani szeretne. Bármilyen specifikáció alapján készen állok a projektre.",
  },
  {
    icon: <Paintbrush2 size={72} strokeWidth={0.8} />,
    title: "Weboldal Design készítés",
    desription:
      "Weboldalak tervezésekor mindig az első lépés a koncepció kidolgozása, hogy meghatározzam, milyen kinézetet és struktúrákat szeretnék elérni.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "WordPress oldal készítés",
    desription:
      "Weboldal fejlesztés során a WordPress segítségével történik. Továbbá ha karbantartást veszi igényben akkor a pluginokat és egyéb funkciókat vizsgálom meg és ha szükséges javítok rajta",
  },
  {
    icon: <Image size={72} strokeWidth={0.8} />,
    title: "Fénykép Szerkesztés",
    desription:
      "A szolgáltatásom a fénykép szerkesztésre fókuszál, hogy az általad készített képek még hatásosabbak és vonzóbbak legyenek.",
  },
  {
    icon: <Aperture size={72} strokeWidth={0.8} />,
    title: "Videó Vágás",
    desription:
      "Az általam kínált videó szerkesztési szolgáltatás segítségével az általad rögzített videók még látványosabbá és hatásosabbá válhatnak.",
  },
  {
    icon: <Cpu size={72} strokeWidth={0.8} />,
    title: "Számítógép Szervizelés",
    desription: "Számítógép telepítés és alkatrészcsere.",
  },
];
const Service = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          Szolgáltatások
        </h2>

        {/* grid item */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.desription}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
