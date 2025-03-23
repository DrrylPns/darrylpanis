import { Hero } from "@/components/hero";
import { Techs } from "@/components/techs";

export default function Home() {
  return (
    <section className="w-full min-h-dvh">
      <Hero />
      <Techs />
    </section>
  );
}