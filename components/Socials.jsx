"use client";
import React from "react";
import { RiLinkedinFill, RiGithubFill, RiFacebookFill } from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/akosilles",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/akiilles05",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/illesinnovate",
    name: <RiFacebookFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
