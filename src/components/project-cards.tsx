"use client";

import { Projects } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";
import { Card } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

export function ProjectCards({ project }: { project: Projects }) {
  const [selectedProject, setSelectedProject] = useState<Projects | null>(null);

  return (
    <>
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

      <Dialog
        open={selectedProject !== null}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        {selectedProject && (
          <DialogContent className="max-w-2xl overflow-hidden animate-in fade-in-0 zoom-in-95 slide-in-from-top-[2%] duration-300 ease-out data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-top-[2%]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-medium">
                {selectedProject.name}
              </DialogTitle>
              <DialogDescription>
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>

            <div className="relative h-64 w-full my-6 rounded-md overflow-hidden">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              {/* <div>
                <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
              </div> */}

              <div>
                <h3 className="text-sm uppercase tracking-wide font-medium mb-2">
                  Technology Stack
                </h3>
                {/* <p className="text-muted-foreground">{selectedProject.technologies.join(" · ")}</p> */}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild className="gap-2 rounded-full px-6">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="h-4 w-4" />
                    GitHub Repository
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="gap-2 rounded-full px-6"
                >
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
