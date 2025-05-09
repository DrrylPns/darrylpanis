import { cn } from "@/lib/utils";
import { Contacts } from "./contacts";
import { StarsBackground } from "./stars-background";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const Hero = () => {
  return (
    <>
      <div className="max-w-xl w-full">
        <StarsBackground />
        <div className="relative">
          <Avatar className="w-[50px] h-[50px] mb-3 absolute z-50 bottom-[130px] left-5">
            <AvatarImage src="/assets/my-pic.svg" />
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
          <div
            className={cn(
              "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
              // Base background image styles
              "bg-[url(https://xnp6i843pr.ufs.sh/f/0VXm2UCFbuqyz8WAye5DLm56lEiATztb0UFoeOdsCcrVSXW7)] bg-cover bg-center",
              // Preload hover image using before pseudo-element, ensure it covers and centers
              "before:bg-[url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXUydWd5aG1nNXBtNGVjcDBmMHEzaHV6bngxNDkyZ2FjYzc5YWM1cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VbnUQpnihPSIgIXuZv/giphy.gif)] before:absolute before:inset-0 before:opacity-0 before:z-[-1] before:bg-cover before:bg-center",
              // Hover state background image styles, ensure it covers and centers
              "hover:bg-[url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXUydWd5aG1nNXBtNGVjcDBmMHEzaHV6bngxNDkyZ2FjYzc5YWM1cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VbnUQpnihPSIgIXuZv/giphy.gif)] hover:bg-cover hover:bg-center",
              // Overlay on hover
              "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
              // Transition for smooth effect
              "transition-all duration-500"
            )}
          >
            <div className="text relative z-50">
              <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                Darryl Panis
              </h1>
              <p className="font-normal text-base text-gray-300/80 relative my-4">
                A Full Stack Web Developer, Based in the Philippines with one
                year experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contacts />
    </>
    // <div className="flex flex-col gap-3 items-center min-h-dvh mt-7">
    //   <HeroCard />
    // </div>
    // <div className="flex flex-col gap-3 justify-center items-center min-h-dvh">
    //   <div className="font-semibold uppercase text-xs flex flex-row items-center gap-1">
    //     Based in the Philippines
    //     <div className="relative w-8 h-8">
    //       <Image
    //         className="object-contain"
    //         src="/assets/philippines.svg"
    //         alt="The Philippine flag"
    //         fill
    //       />
    //     </div>
    //   </div>

    //   <div className="text-3xl">Hey, I&apos;m Darryl Panis</div>

    //   <div className="text-sm text-muted-foreground">
    //     A Full Stack Web Developer
    //   </div>

    // <Link
    //   href="https://github.com/DrrylPns"
    //   className={cn(
    //     "text-muted-foreground",
    //     buttonVariants({
    //       variant: "ghost",
    //     })
    //   )}
    //   target="_"
    // >
    //   <FaGithub />
    //   GitHub
    // </Link>

    //   <Avatar className="w-[70px] h-[70px]">
    //     <AvatarImage src="/assets/my-pic.svg" />
    //     <AvatarFallback>DP</AvatarFallback>
    //   </Avatar>
    // </div>
  );
};
