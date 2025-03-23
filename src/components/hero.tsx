import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { buttonVariants } from "./ui/button";

export const Hero = () => {
    return (
        <div className="flex flex-col gap-3 justify-center items-center min-h-dvh">
            <div className="font-semibold uppercase text-xs flex flex-row items-center gap-1">
                Based in the Philippines
                <div className="relative w-8 h-8">
                    <Image
                        className="object-contain"
                        src="/assets/philippines.svg"
                        alt="The Philippine flag"
                        fill
                    />
                </div>
            </div>

            <div className="text-3xl">
                Hey, I&apos;m Darryl Panis
            </div>

            <div className="text-sm text-muted-foreground">
                A Full Stack Web Developer
            </div>

            <Link
                href="https://github.com/DrrylPns"
                className={cn("text-muted-foreground", buttonVariants({
                    variant: "ghost",
                }))}
                target="_"
            >
                <FaGithub />
                GitHub
            </Link>

            <Avatar className="w-[50px] h-[50px]">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>DP</AvatarFallback>
            </Avatar>

        </div>
    )
}