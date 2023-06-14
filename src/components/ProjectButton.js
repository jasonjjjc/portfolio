import Link from "next/link";

// ProjectButton component
export default function ProjectButton({ id, title }) {
  return (
    <Link
      style={{
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        padding: "15px 20px",
        margin: "5px auto",
        borderRadius: "4px",
        width: "80%",
        display: "block",
        textAlign: "left",
        background: "#fff",
        textDecoration: "none",
        color: "#000",
      }}
      key={id}
      href={`/projects/${id}`}
    >
      {title}
    </Link>
  );
}
