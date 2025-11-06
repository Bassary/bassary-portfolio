import { useState } from "react";
import './style/Modal.scss'
import { motion } from "motion/react";
import Button from "./Button";

function Modal({ image, title, buttonTitle, children, className, buttonClassName}) {
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
      <button onClick={toggleModal} className={buttonClassName}>
        <h3>{buttonTitle}</h3>
        {image}
      </button>
      {modal && (
        <motion.div className="modal" initial={{ opacity: 0, }} animate={{ opacity: 1 }} >
          <motion.div onClick={toggleModal} className="overlay"></motion.div>
          <motion.div className={className} initial={{ scale: 0.9 }} animate={{ scale: 1 }}  >
            <h2>{title}</h2>
            {children}
            <button id="button" className="second-button close-modal" onClick={toggleModal}>X</button>
          </motion.div>
        </motion.div>
      )}
    </>

  )
}

export default Modal