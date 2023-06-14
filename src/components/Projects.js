import getAllProjects from "/lib/getAllProjects";
import ProjectButton from "./ProjectButton";

export default async function Projects(data) {
  const projectsData = getAllProjects();
  const projectsAll = await projectsData;
  const projects = projectsAll.record;

  return (
    <>
      <main className="flex flex-col flex-1 overflow-y-auto text-xl">
        <div className="flex flex-col">
          {projects.map((project) => (
            <ProjectButton
              key={project.id}
              id={project.id}
              title={project.title}
            />
          ))}
        </div>
      </main>
    </>
  );
}
