import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { FaGithub } from "react-icons/fa";

export function GithubLink({ url }: { url: string }) {
  return (
    <a href={url} target="_blank">
      <FaGithub className="w-4 h-4 cursor-pointer sm:w-5 sm:h-5" />
    </a>
  );
}

export function WebsiteLink({ url }: { url: string }) {
  return (
    <a href={url} target="_blank">
      <ArrowTopRightOnSquareIcon className="w-4 h-4 cursor-pointer sm:w-5 sm:h-5" />
    </a>
  );
}
