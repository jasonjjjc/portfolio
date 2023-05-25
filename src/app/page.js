import Image from "next/image";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex-col justify-center items-center text-xl">
        <p>Full stack developer based in the UK</p>
        <Link href='project1'>Project 1 sample</Link>
        <Projects />
      </div>
    </>
  );
}
