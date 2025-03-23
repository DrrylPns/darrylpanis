import { techs } from "@/lib/types";
import Image from "next/image";

export const Techs = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-dvh">
            <div className="text-3xl font-semibold w-full mb-2 flex justify-center">My Technologies</div>

            <div className="grid grid-cols-3 items-center gap-5">
                {techs.map((tech, i) => (
                    <div className="bg-muted p-2 rounded-lg flex flex-col items-center justify-center" key={i}>
                        <div className="relative w-12 h-12 mb-1">
                            <Image
                                src={tech.image}
                                alt={tech.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="text-sm text-muted-foreground">
                            {tech.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}