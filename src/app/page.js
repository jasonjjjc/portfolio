"use client"
import React, { useState } from "react";
import ContactModal from "../components/ContactModal";
import Projects from "@/components/Projects";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal ? <ContactModal /> : <Projects />}
      <div className="flex justify-center ">
        <button
          className="border-2 border-gray-400 rounded-md m-3 pt-3 pb-3 pl-14 pr-14 text-xl"
          type="button"
          onClick={() => {
            setShowModal(!showModal);
            console.log("clicked");
          }}
        >
          {showModal ? "Close Contact" : "Contact"}
        </button>
      </div>
    </>
  );
}
