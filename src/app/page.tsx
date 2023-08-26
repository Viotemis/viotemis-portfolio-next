import { SocialMedia } from "@/components/SocialMedia";
import { ContactMeButton, DownloadResumeButton } from "@/components/ui/Button";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { ABOUT_ME_TEXT } from "@/constants";
import { SectionHeader } from "@/components/ui/Typography";
import { getHomePageData } from "../../sanity/lib/api";
import { SectionContainer } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/Card";
import Link from "next/link";

export default async function Home() {
  const data = await getHomePageData();
  // console.log(data);
  return (
    <DefaultLayout>
      <section className="h-[var(--h-main)] fcenter">
        <div className="flex flex-col items-center space-y-2 md:space-y-4 md:text-4xl">
          <h1 className="text-[2rem] text-center tracking-normal sm:text-[2.5rem] md:text-[3.25rem] lg:text-[3.5rem] 2xl:text-[4rem] sm:tracking-wider">
            Hello, {"I'm "}
            <span className="font-bold primary-gradient">Bowang Lan</span>
          </h1>
          <div className="text-base tracking-wide text-center lg:pt-3 sm:text-xl md:text-2xl text-slate-300">
            A full-stack software engineer and data scientist
          </div>
          <div className="text-sm italic font-bold tracking-wide text-center md:text-base lg:text-lg primary-gradient-2">
            Actively looking for full-time SDE positions starting in June 2024!
          </div>
          <div className="flex items-center pt-3 md:gap-4">
            {/* <ContactMeButton /> */}
            <DownloadResumeButton />
          </div>
          <div className="pt-4">
            <SocialMedia />
          </div>
        </div>
      </section>

      <SectionContainer>
        <SectionHeader>About Me</SectionHeader>
        <div className="max-w-[600px] text-center">
          {ABOUT_ME_TEXT.map((t, i) => (
            <p
              key={i}
              className="mb-6 leading-8 tracking-wide"
              dangerouslySetInnerHTML={{ __html: t }}
            ></p>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader>Feature Projects</SectionHeader>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {data.projects.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
        <Link href="/projects" className="mt-6 cursor-pointer md:mt-10">View all projects</Link>
      </SectionContainer>

      {/* <SectionContainer>
        <SectionHeader>Experiences</SectionHeader>
      </SectionContainer> */}
    </DefaultLayout>
  );
}
