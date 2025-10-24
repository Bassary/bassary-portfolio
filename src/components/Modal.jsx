import { useState } from "react";
// import './style/Modal.scss'
// import { motion } from "framer-motion";

function Modal({ image, title, texteContent, className}) {
  const [modal, setModal] = useState(false)


  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")

  } else {
    document.body.classList.remove("active-modal")

  }

  return (
    <>
      <button onClick={toggleModal} className={className}>
        <span>{title}</span>
        {image}
      </button>
    </>

  )
}

export default Modal