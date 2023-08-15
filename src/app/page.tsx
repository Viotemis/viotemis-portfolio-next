import { SocialMedia } from "@/components/SocialMedia";
import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import Button from "@/components/ui/Button";

function getProjects(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type == "project"]`
  );
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="grid p-24">
      <section className="fcenter">
        <div className="flex flex-col items-center space-y-2 text-3xl tracking-wider md:text-4xl">
          <span>
            Hello, {"I'm "}
            <span className="font-bold h1-gradient">Bowang Lan</span>
          </span>
          <span className="text-center">
            A full-stack developer, UI designer, and data scientist
          </span>
          <Button>View My Work</Button>
          <div className="pt-4">
            <SocialMedia />
          </div>
        </div>
      </section>
    </main>
  );
}
