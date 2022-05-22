import { motion } from "framer-motion";
import "./index.css";
import React from "react";
import Backdrop from "../Backdrop";

const Modal = ({ handleClose }) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={dropIn}
      >
        <h2 className="rules">Rules</h2>
        <div className="rule-container">
          <ol>
            <li>a</li>
            <li>b</li>
            <li>c</li>
          </ol>
        </div>
        <button onClick={handleClose} className="modal-close-btn">
          Ok
        </button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
