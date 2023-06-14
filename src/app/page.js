"use client";
import { useState } from "react";
import ContactModal from "../components/ContactModal";
import Projects from "@/components/Projects";

export default async function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <h2 className="text-center p-6">Full stack developer based in the UK</h2>
      {showModal ? <ContactModal /> : <Projects />}
      <div className="flex justify-center ">
        <button
          className="border-2 border-gray-400 rounded-md m-3 pt-3 pb-3 pl-14 pr-14 text-xl"
          type="button"
          onClick={() => {
            setShowModal(true);
            console.log("clicked");
          }}
        >
          Contact
        </button>
      </div>
    </>
  );
}
