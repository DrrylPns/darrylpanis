import { Hero } from "@/components/hero";
import { StarsBackground } from "@/components/stars-background";
import { Techs } from "@/components/techs";

export default function Home() {
  return (
    <section className="w-full min-h-dvh flex flex-col gap-3 items-center justify-center mt-7">
      <Hero />
      <Techs />
    </section>
  );
}
