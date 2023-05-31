import { useEffect } from "react";
import ProjectButton from "./ProjectButton";


export default function Projects(data) {
  console.log(data)


  return (
    <div className="flex-col justify-around">
      {/* {data.map(({}) => (
        <ProjectButton onClick={toggleProjectSelected} href={href} title={title} />
      ))} */}
    </div>
  );
}
