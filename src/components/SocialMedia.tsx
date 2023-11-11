"use client";

import va from "@vercel/analytics";
import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from "@/constants";
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { IconType } from "react-icons/lib";

const SizeMap = {
  container: {
    sm: 40,
    md: 54,
  },
  icon: {
    sm: 18,
    md: 22,
  },
};

const socialMediaData = [
  {
    icon: FaLinkedinIn,
    url: LINKEDIN_URL,
    name: "LinkedIn",
  },
  {
    icon: FaGithub,
    url: GITHUB_URL,
    name: "Github",
  },
  {
    icon: AiFillMail,
    url: EMAIL_URL,
    name: "Email",
  },
];

function SocialMediaItem({
  icon: CustomIcon,
  url,
  name,
  size = "md",
}: {
  icon: IconType;
  url: string;
  name: string;
  size?: "sm" | "md";
}) {
  return (
    <a
      className={`rounded-lg hover:scale-95 bg-gray-100/20 hover:bg-[var(--primary)] fcenter relative cursor-pointer trans group overflow-hidden`}
      target="_blank"
      style={{
        width: SizeMap.container[size],
        height: SizeMap.container[size],
      }}
      href={url}
      aria-label={name + " Link"}
    >
      <div className="absolute top-[50%] group-hover:translate-y-[-250%] translate-y-[-50%] trans">
        <CustomIcon
          style={{
            width: SizeMap.icon[size],
            height: SizeMap.icon[size],
          }}
        />
      </div>
      <div className="absolute top-[50%] group-hover:translate-y-[-50%] translate-y-[250%] trans">
        <CustomIcon
          style={{
            width: SizeMap.icon[size],
            height: SizeMap.icon[size],
          }}
        />
      </div>
    </a>
  );
}

export function SocialMedia({ size = "md" }: { size?: "sm" | "md" }) {
  return (
    <ul className="flex items-center gap-6">
      {socialMediaData.map((item) => (
        <li key={item.name}>
          <SocialMediaItem
            icon={item.icon}
            url={item.url}
            name={item.name}
            size={size}
          />
        </li>
      ))}
      {/* <SocialMediaItem icon={< />} url={GITHUB_URL} /> */}
    </ul>
  );
}
