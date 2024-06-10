import React from "react";
import { motion } from "framer-motion";

function TransitionEffect() {
  return (
    <>
      <motion.div
        className="fixed top-0 b-0 bottom-0 right-full w-screen h-screen z-30 bg-blueGradiate"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </>
  );
}

export default TransitionEffect;
