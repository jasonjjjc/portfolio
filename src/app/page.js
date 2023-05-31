import Link from "next/link";
import getAllProjects  from "/lib/getAllProjects";

export default async function Home() {
  const projectsData = getAllProjects();
  const projectsAll= await projectsData;
  const projects = projectsAll.record;
  console.log(projects.record)

  return (
    <>
      <section className="flex-col justify-center items-center text-xl">
        <h2>Full stack developer based in the UK</h2>
        {projects.map((project) => {
          return (
            <>
              <div key={project.id}>
                <Link href={`/projects/${project.id}`}>{project.title}</Link>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}
