import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./index.css";
import Modal from "../Modal";
const LandingPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const variants = {
    initial: {
      y: -1000,
    },
    animate: {
      y: 0,
      transition: {
        delay: 1,
        duration: 0.5,
        type: "spring",
      },
    },
  };
  return (
    <>
      <section className="main-container">
        <div className="child-container">
          <div className="left-container">
            <div className="title-container">
              <h1>RH Treasure Hunt 2022</h1>
              <h1>RH Treasure Hunt 2022</h1>
            </div>
            <div className="type-writer">
              <span>
                Unleash Your
                <ul className="dynamic-text">
                  <li>
                    <span>Adventurer</span>
                  </li>
                  <li>
                    <span>Developer</span>
                  </li>
                  <li>
                    <span>Red Hatter</span>
                  </li>
                </ul>
              </span>
            </div>
            <div className="button-container">
              <button className="btn">Play</button>
              <button
                onClick={() => (!modalOpen ? open() : "")}
                className="btn"
              >
                Rules
              </button>
            </div>
          </div>
          <div>
            <motion.img
              src="https://www.pngmart.com/files/15/Casual-Red-Hat-PNG-Transparent-Image.png"
              height="500px"
              width="600px"
              className="image-container"
              initial="initial"
              animate="animate"
              variants={variants}
            ></motion.img>
          </div>
        </div>
        <AnimatePresence initial={false} exitBeforeEnter={true}>
          {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
        </AnimatePresence>
      </section>
    </>
  );
};

export default LandingPage;
