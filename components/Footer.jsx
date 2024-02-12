import Socials from "./Socials";
import Link from "next/link";
import React from "react";

const Footer = ({linkStyles}) => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between text-muted-foreground">
          <div className={'flex flex-auto text-muted-foreground justify-between'}>
            <Link
                href={"/impresszum"}
                className={`capitalize ${linkStyles} mr-2 mb-2`}
            >
              Impresszum
            </Link>
            <Link
                href={"/adatvedelem"}
                className={`capitalize ${linkStyles} mr-2 mb-2`}
            >
              Adatvédelmi Tájékoztató
            </Link>
          </div>

          {/* socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transitation-all"
          />

          {/* copyright */}
          <div className="text-muted-foreground">
            Copyright &copy; Illés Ákos. Minden jog fenntartva!
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
