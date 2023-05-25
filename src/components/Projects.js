import ProjectButton from "./ProjectButton";


export default function Projects() {
  
  const projects = [
    {
      id : 1,
      title: "Project 1",
      pageTitle: "project1", 
      planning:"Project 1 Planning goes here"
      
    },
    { 
      id : 2,
      title: "Project 2",
      pageTitle: "project2",
      planning:"Project 2 Planning goes here"
    },
    {
      id : 3,
      title: "Project 3",
      pageTitle: "project3",
      planning:"Project 3 Planning goes here"
    },
    {
      id : 4,
      title: "Project 4",
      pageTitle: "project4", 
      planning:"Project 4 Planning goes here"
    },
    {
      id : 5,
      title: "Project 5",
      pageTitle: "project5", 
      planning:"Project 5 Planning goes here"
    },
  ];

  // function handleClick(e){
  //   //creating a function that takes us to the project page
  //   console.log(e)
  // }

  return (
    <div className="flex-col justify-around">
      {projects.map((project) => (
        console.log(project.id),
        <ProjectButton url={project.url} title={project.title}/>
      ))}
    </div>
  );
}
