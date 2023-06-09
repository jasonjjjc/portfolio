import Link from "next/link";
import getAllProjects from "/lib/getAllProjects";

// ProjectButton component
const ProjectButton = ({ id, title }) => {
  return (
    <Link
      style={{
        border: "2px solid",
        padding: "10px",
        margin: "2px",
        borderRadius: "4px",
      }}
      href={`/projects/${id}`}
    >
      {title}
    </Link>
  );
};

export default async function Projects(data) {
  const projectsData = getAllProjects();
  const projectsAll = await projectsData;
  const projects = projectsAll.record;

  return (
    <section className="flex flex-col flex-1 overflow-y-auto bg-green-500 text-xl">
      <div>
        <h2 className="p-6">Full stack developer based in the UK</h2>
        <div className="flex flex-col">
          {projects.map((project) => (
            <ProjectButton
              key={project.id}
              id={project.id}
              title={project.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
