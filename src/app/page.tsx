import { SocialMedia } from "@/components/SocialMedia";
import { ContactMeButton, DownloadResumeButton } from "@/components/ui/Button";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { SectionHeader } from "@/components/ui/Typography";
import { getHomePageData, getTechItems } from "../../sanity/lib/api";
import { SectionContainer } from "@/components/ui/Container";
import { ProjectCardList } from "@/components/ui/Card";
import { ExperienceList } from "@/components/ui/Timeline";
import Link from "next/link";
import Head from "next/head";
import { Quote } from "@/components/ui/Quote";
import { AboutMe } from "@/components/AboutMe";
import { TechSection } from "@/components/TechSection";

export default async function Home() {
  const data = await getHomePageData();
  const techItems = await getTechItems();

  console.log("render home page");
  return (
    <>
      <Head>
        <link rel="icon" href="/static/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1A4DF4" />
        <meta name="title" content="Viotemis | Justin Danner" />
        <meta
          name="description"
          content="I'm an innovative and passionate Frontend Developer with over 7 years of experience in designing and implementing user interfaces using React and Next.js. Proficient in modern JavaScript frameworks like Vue.js and AngularJS. Adept at spearheading the integration of Blockchain technologies, leveraging Web3.js and Ethers.js to DApps."
        />
        <meta
          name="keywords"
          content="Viotemis, Justin Danner, Justin, Danner, Violet, Artemis, web, web developer, web development, frontend, front end, front-end, UI, Oregon, frontend developer, job, freelance, promoting, creative"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Viotemis" />
        <meta property="og:locale" content="en-US" />

        {/* <!-- Primary Meta Tags --> */}
        <title>About Viotemis | Who am I?</title>
        <meta name="title" content="About Viotemis | Who am I?" />
        <meta
          name="description"
          content="I'm an innovative and passionate Frontend Developer with over 7 years of experience in designing and implementing user interfaces using React and Next.js. Proficient in modern JavaScript frameworks like Vue.js and AngularJS. Adept at spearheading the integration of Blockchain technologies, leveraging Web3.js and Ethers.js to DApps."
        />
      </Head>
      <DefaultLayout>
        <section className="h-[var(--h-main)] fcenter">
          <div className="flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4 md:text-4xl">
            <h1 className="text-[2rem] text-center tracking-normal sm:text-[2.5rem] md:text-[3.25rem] lg:text-[3.5rem] 2xl:text-[4rem] sm:tracking-wider">
              Hello, {"I'm "}
              <span className="font-bold primary-gradient">Justin Danner</span>
            </h1>
            <div className="text-base tracking-wide text-center lg:pt-3 sm:text-xl md:text-2xl text-slate-300">
              A Senior Frontend Developer
            </div>
            <div className="text-sm italic font-bold tracking-wide text-center md:text-base lg:text-lg primary-gradient-2">
              Actively looking for full-time positions starting in June 2024!
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

        {/* tech section */}
        <SectionContainer>
          <SectionHeader>Technologies</SectionHeader>
          <div className="flex flex-wrap justify-center">
            <TechSection data={techItems} />
          </div>
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
        {data.quote && (
          <SectionContainer>
            <Quote quote={data.quote} />
          </SectionContainer>
        )}
      </DefaultLayout>
    </>
  );
}
