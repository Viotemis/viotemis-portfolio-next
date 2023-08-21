import { SocialMedia } from "@/components/SocialMedia";
import { ContactMeButton } from "@/components/ui/Button";
import DefaultLayout from "@/components/layout/DefaultLayout";

export default async function Home() {
  return (
    <DefaultLayout>
      <section className="fcenter">
        <div className="flex flex-col items-center space-y-2 tracking-wider md:space-y-4 md:text-4xl">
          <div className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.2rem]">
            Hello, {"I'm "}
            <span className="font-bold h1-gradient">Bowang Lan</span>
          </div>
          <div className="text-center lg:pt-3 sm:text-xl md:text-2xl lg:text-3xl text-slate-300">
            A full-stack developer, data scientest, and UI/UX designer
          </div>
          <ContactMeButton />
          <div className="pt-4">
            <SocialMedia />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
