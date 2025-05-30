"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Stairs from "./Stairs";

function WaveTransition() {
  const pathName = usePathname();
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    setHasNavigated(true);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div key={pathName}>
        <div
          className={`h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex ${
            !hasNavigated ? "initial-state-class" : ""
          }`}
        >
          <Stairs />
        </div>
      </div>
    </AnimatePresence>
  );
}

export default WaveTransition;
