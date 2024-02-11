import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { FaGithub } from "react-icons/fa";

export function GithubLink({ url, name }: { url: string; name: string }) {
  return (
    <a href={url} target="_blank" aria-label={name + "github link"} className="z-10">
      <FaGithub className="w-4 h-4 cursor-pointer sm:w-5 sm:h-5" />
    </a>
  );
}

export function WebsiteLink({ url, name }: { url: string; name: string }) {
  return (
    <a href={url} target="_blank" aria-label={name + "github link"} className="z-10">
      <ArrowTopRightOnSquareIcon className="w-4 h-4 cursor-pointer sm:w-5 sm:h-5" />
    </a>
  );
}
