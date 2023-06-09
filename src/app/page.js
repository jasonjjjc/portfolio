"use client";
import { useState } from "react";
import ContactModal from "../components/ContactModal";
import Projects from "@/components/Projects";

export default async function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    {showModal ? <ContactModal /> : <Projects />}
      <div className="flex justify-center bg-green-500">
        <button
          className="border-2 border-gray-400 rounded-md m-3 pt-1 pb-1 pl-10 pr-10"
          type="button"
          onClick={() => {setShowModal(true); console.log("clicked")}}
        >
          Contact
        </button>
      </div>
    </>
  );
}
