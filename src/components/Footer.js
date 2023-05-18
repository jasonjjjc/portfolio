"use client";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div>
      <div className="userUpdate">
        <button
          className="rounded-full border-2 border-blue-700 object-contain py-1 px-4 transition ease-in-out hover:scale-110 hover:bg-blue-400 hover:bg-opacity-50"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Contact
        </button>
      </div>
      {showModal ? <ContactModal/> : null}
    </div>
  );
}
