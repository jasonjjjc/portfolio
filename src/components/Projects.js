import Card from "./Card";

export default function Projects() {
  const projects = [
    {
      id : 1,
      title: "Project 1",
    },
    { 
      id : 2,
      title: "Project 2",
    },
    {
      id : 3,
      title: "Project 3",
    },
    {
      id : 4,
      title: "Project 4",
    },
    {
      id : 5,
      title: "Project 5",
    },
  ];

  return (
    <div className="flex-col justify-around">
      {projects.map((project) => (
        <Card key={project.id}>{project.title}</Card>
      ))}
    </div>
  );
}
