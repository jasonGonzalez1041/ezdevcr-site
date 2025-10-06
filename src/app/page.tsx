"use client";

import { useEffect, useRef } from "react";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomePage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create the fade transition between Hero and Services sections
    gsap.fromTo(
      heroRef.current,
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%", // Start fading when the top of Services reaches 80% down the viewport
          end: "top 20%",   // Complete fade when Services reaches 20% down the viewport
          scrub: true,      // Smooth scrubbing effect tied to scroll
        }
      }
    );

    // Animate the Services section entrance
    gsap.fromTo(
      servicesRef.current,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        }
      }
    );

    // Clean up animations on component unmount
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ScrollTrigger.getAll().forEach((trigger: { kill: () => any; }) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <div ref={servicesRef}>
        <ServicesSection />
      </div>
      <ProjectsSection />
      <ContactSection />
    </>
  );
}