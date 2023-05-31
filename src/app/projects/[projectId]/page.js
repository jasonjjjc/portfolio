import getProject from "/lib/getProject";

export default async function ProjectPage({ params: { projectId } }) {
  const projectData = await getProject(projectId);


  return (
    <>
      <div>{projectData.name}</div>
    </>
  );
}
