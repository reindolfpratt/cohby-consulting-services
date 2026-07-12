import { ReactNode } from "react";
import { motion, useReducedMotion, Variants } from "motion/react";
import { EASE_OUT, DUR, STAGGER } from "@/lib/motionTokens";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

/** Fades + lifts an element into place when it scrolls into view. Fires once. */
export const Reveal = ({ children, className, delay = 0, y = 28 }: RevealProps) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: DUR.slow, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
};

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  /** Extra delay before the first child starts (s). */
  delay?: number;
}

const groupVariants: Variants = {
  hidden: {},
  visible: (delay: number = 0) => ({
    transition: { staggerChildren: STAGGER, delayChildren: delay },
  }),
};

/** Container that staggers its <RevealItem> children as they enter the viewport. */
export const RevealGroup = ({ children, className, delay = 0 }: RevealGroupProps) => (
  <motion.div
    className={className}
    custom={delay}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "0px 0px -80px 0px" }}
    variants={groupVariants}
  >
    {children}
  </motion.div>
);

export const RevealItem = ({
  children,
  className,
  id,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  y?: number;
}) => {
  const reduce = useReducedMotion();
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DUR.slow, ease: EASE_OUT },
    },
  };
  return (
    <motion.div className={className} id={id} variants={itemVariants}>
      {children}
    </motion.div>
  );
};

/** Reveals a heading word by word, each rising out of a clipped line. */
export const WordsReveal = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.035 } } }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} aria-hidden="true">
          <span className="inline-block overflow-hidden align-bottom">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: reduce ? 0 : "110%", opacity: reduce ? 0 : 1 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.6, ease: EASE_OUT },
                },
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </motion.span>
  );
};
