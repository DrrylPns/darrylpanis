"use client";

import { Projects } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";
import { Card } from "./ui/card";

export function ProjectCards({ project }: { project: Projects }) {
  const [selectedProject, setSelectedProject] = useState<Projects | null>(null);

  return (
    <Card
      key={project.id}
      className="overflow-hidden transition-all duration-300 cursor-pointer h-full flex flex-col hover:shadow-lg hover:scale-[1.02] py-1 px-3 gap-1"
      onClick={() => setSelectedProject(project)}
    >
      <div className="relative w-full pt-2">
        <div className="relative h-32 w-full overflow-hidden rounded-lg">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105 z-50"
          />
        </div>
      </div>
      <h1 className="px-1 text-base font-semibold mt-1">{project.name}</h1>
      <p className="px-1 text-sm text-muted-foreground">
        {project.description}
      </p>
    </Card>
  );
}
