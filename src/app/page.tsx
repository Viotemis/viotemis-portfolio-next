import { SocialMedia } from "@/components/SocialMedia";
import { ContactMeButton } from "@/components/ui/Button";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { ABOUT_ME_TEXT } from "@/constants";

export default async function Home() {
  return (
    <DefaultLayout>
      <section className="h-[var(--h-main)] fcenter">
        <div className="flex flex-col items-center space-y-2 tracking-wider md:space-y-4 md:text-4xl">
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.2rem]">
            Hello, {"I'm "}
            <span className="font-bold primary-gradient">Bowang Lan</span>
          </h1>
          <div className="text-center lg:pt-3 sm:text-xl md:text-2xl text-slate-300">
            A full-stack developer, and data scientist
          </div>
          <div className="text-base italic font-bold text-center lg:text-lg primary-gradient-2">
            Actively looking for full-time SDE positions starting in June 2023!
          </div>
          <ContactMeButton />
          <div className="pt-4">
            <SocialMedia />
          </div>
        </div>
      </section>
      <section className="py-8 fcenter">
        <h2 className="py-10 text-4xl font-medium text-blue-200">About Me</h2>
        <div className="max-w-[600px] text-center">
          {ABOUT_ME_TEXT.map((t, i) => (
            <p key={i} className="mb-6 leading-8">
              {t}
            </p>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
