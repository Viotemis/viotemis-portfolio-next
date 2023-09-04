import { SocialMedia } from "@/components/SocialMedia";
import { ContactMeButton, DownloadResumeButton } from "@/components/ui/Button";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { SectionHeader } from "@/components/ui/Typography";
import { getHomePageData } from "../../sanity/lib/api";
import { SectionContainer } from "@/components/ui/Container";
import { ProjectCardList } from "@/components/ui/Card";
import { ExperienceList } from "@/components/ui/Timeline";
import Link from "next/link";
import { Qoute } from "@/components/ui/Qoute";
import { AboutMe } from "@/components/AboutMe";

export default async function Home() {
  const data = await getHomePageData();
  // console.log(data);
  return (
    <DefaultLayout>
      <section className="h-[var(--h-main)] fcenter">
        <div className="flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4 md:text-4xl">
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
        <AboutMe />
      </SectionContainer>

      <SectionContainer className="z-10">
        <SectionHeader>Feature Projects</SectionHeader>
        <ProjectCardList
          projects={data.projects}
          className="grid-cols-1 lg:grid-cols-2 sm:max-w-[600px] md:max-w-[700px] lg:max-w-none"
        />
        <Link href="/projects" className="mt-6 cursor-pointer md:mt-10">
          View all projects
        </Link>
      </SectionContainer>

      {/* experience section */}
      <SectionContainer>
        <SectionHeader>Experiences</SectionHeader>
        <ExperienceList experiences={data.experiences} />
      </SectionContainer>

      {/* quote */}
      {data.qoute && (
        <SectionContainer>
          <Qoute qoute={data.qoute} />
        </SectionContainer>
      )}
    </DefaultLayout>
  );
}
