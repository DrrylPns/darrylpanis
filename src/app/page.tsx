import { Hero } from "@/components/hero";
import { MyDescription } from "@/components/my-description";
import MyProjectsPage from "@/components/my-projects";
import { StarsBackground } from "@/components/stars-background";
import { Techs } from "@/components/techs";

export default function Home() {
  return (
    <section className="w-full min-h-dvh flex flex-col gap-3 items-center justify-center my-7 px-6">
      <Hero />
      <MyDescription />
      <Techs />
      <MyProjectsPage />
    </section>
  );
}
