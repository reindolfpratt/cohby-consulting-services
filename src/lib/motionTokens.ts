/* Shared motion vocabulary — one easing language across the whole site. */

/* Strong ease-out: snappy start, elegant settle. Built-in CSS easings are too weak. */
export const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

/* For elements moving while already on screen. */
export const EASE_IN_OUT: [number, number, number, number] = [0.77, 0, 0.175, 1];

/* Durations (s) */
export const DUR = {
  fast: 0.2,
  base: 0.45,
  slow: 0.7,
} as const;

/* Stagger interval between sibling reveals (s) */
export const STAGGER = 0.07;
