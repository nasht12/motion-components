"use client"
import { motion, useScroll, useSpring } from "framer-motion";
import "./globals.css";
import { LoremIpsum } from "@/components/loremipsum";


export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello
    </main>
  );
}
