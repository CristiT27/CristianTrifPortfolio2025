import { motion } from "framer-motion";

//variants

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index) => {
  const totalSteps = 7;
  return totalSteps - index - 1;
};
function Stairs() {
  return (
    <>
      {/*render 7 motion divs*/}

      {[...Array(7)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white/20 backdrop-blur-lg rounded-1xl shadow-2xl border border-white/10 relative ring-1 ring-white/30 ring-opacity-50"
          />
        );
      })}
    </>
  );
}

export default Stairs;
