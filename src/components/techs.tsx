import Image from "next/image";
import { AnimatedTooltip } from "./animated-tooltip";
import { FollowerPointerCard } from "./following-pointer";
import { techs } from "@/lib/constants";

export const Techs = () => {
  return (
    <div className="flex flex-col items-center px-3 max-w-xl mt-[4rem]">
      <div className="flex flex-col gap-1 mb-4">
        <div className="text-3xl font-semibold">My Technologies</div>
        <p className="text-muted-foreground text-sm">
          Here are the technologies and tools I frequently use when building
          website applications.
        </p>
      </div>
      {/* <div className="flex flex-row items-center justify-center my-5 w-full">
        <AnimatedTooltip items={techs} />
        </div> */}

      <div className="grid grid-cols-2 items-center gap-5 w-full">
        {techs.map((tech, i) => (
          <FollowerPointerCard
            className="bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-500/20 dark:hover:bg-zinc-500/30 p-2 rounded-lg flex flex-row items-center"
            title={tech.name}
            key={i}
          >
            <div className={`${tech.bgColor} p-2 rounded-lg`}>
              <div className="relative w-8 h-8 mb-1">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="pl-3">
              <div className="line-clamp-1">{tech.name}</div>

              <div className="text-sm text-muted-foreground">
                {tech.description}
              </div>
            </div>
          </FollowerPointerCard>
        ))}
      </div>
    </div>
  );
};
