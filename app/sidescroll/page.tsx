"use client"
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function SideScroll() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div className="flex items-center justify-center pt-40">
       <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul
        ref={ref}
        className="flex list-none h-[300px] overflow-x-scroll bg-transparent py-5 flex-none w-[600px] m-auto"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <li key={index} className="flex-none w-[200px] bg-black mx-5"></li>
        ))}
      </ul>
    </div>
  );
}
