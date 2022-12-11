import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

function RubberBand({ children, className, delay = 0 }: PRubberBand) {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const controls = useAnimationControls();
  const startAnimation = () => {
    controls.start({
      transform: [
        "scale(1,1)",
        "scale(1.4,0.6)",
        "scale(0.8,1.25)",
        "scale(1.25,.85)",
        "scale(0.9,1.1)",
        "scale(1,1)",
      ],
      transition: {
        times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
      },
    });
    setIsAnimating(true);
  };
  useEffect(() => {
    setTimeout(startAnimation, delay * 1000);
  }, []);

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => (isAnimating ? null : startAnimation())}
      onAnimationComplete={() => setIsAnimating(false)}
      className={className + " inline-block"}
    >
      {children === " " ? "\u00a0" : children}
    </motion.span>
  );
}

interface PRubberBand {
  children: string;
  delay?: number;
  className?: string;
}

export { RubberBand };
