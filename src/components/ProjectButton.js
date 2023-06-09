import Link from "next/link";

export default function ProjectButton({ project }) {
  return (
    <Link
      className="border-2 border-gray-400 "
      key={project.id}
      href={`/projects/${project.id}`}
    >
      {project.title}
    </Link>
  );
}
