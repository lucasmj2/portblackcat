import React from "react";
import { motion } from "framer-motion";

function GradientText({
  className = "",
  children,
  as: Component = "span",
  ...props
}) {
  const MotionComponent = motion[Component] || motion.span;

  return (
    <MotionComponent
      className={`relative inline-flex overflow-hidden ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 mix-blend-lighten">
        <span className="pointer-events-none absolute -top-1/2 h-[30vw] w-[30vw] animate-gradient-1 bg-purple-600 mix-blend-overlay blur-[1rem]"></span>
        <span className="pointer-events-none absolute right-0 top-0 h-[30vw] w-[30vw] animate-gradient-2 bg-pink-600 mix-blend-overlay blur-[1rem]"></span>
        <span className="pointer-events-none absolute bottom-0 left-0 h-[30vw] w-[30vw] animate-gradient-3 bg-purple-500 mix-blend-overlay blur-[1rem]"></span>
        <span className="pointer-events-none absolute -bottom-1/2 right-0 h-[30vw] w-[30vw] animate-gradient-4 bg-pink-500 mix-blend-overlay blur-[1rem]"></span>
      </span>
    </MotionComponent>
  );
}

export default GradientText;
