"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { clientProjects, personalProjects } from "@/lib/constants";
import { ProjectCards } from "./project-cards";
import { Spotlight } from "./spotlight";

const MyProjectsPage = () => {
  return (
    <div className="w-full flex flex-col items-center my-[4rem]">
      <Tabs defaultValue="personal-projects" className="max-w-xl w-full">
        <TabsList className="w-full mb-2">
          <TabsTrigger value="personal-projects">Personal Projects</TabsTrigger>
          <TabsTrigger value="clients">Clients</TabsTrigger>
        </TabsList>
        <TabsContent
          value="personal-projects"
          className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {personalProjects.map((project) => (
            <Spotlight
              spotlightColor="rgb(222, 221, 217, 0.2)"
              className="h-60 w-full"
              key={project.id}
            >
              <ProjectCards project={project} />
            </Spotlight>
          ))}
        </TabsContent>
        <TabsContent
          value="clients"
          className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {clientProjects.map((project) => (
            <Spotlight
              spotlightColor="rgb(222, 221, 217, 0.2)"
              className="h-60 w-full "
              key={project.id}
            >
              <ProjectCards project={project} />
            </Spotlight>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyProjectsPage;
