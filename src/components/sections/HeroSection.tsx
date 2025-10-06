"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const titles = useMemo(() => [
    "Sitios Web que Convierten Visitantes en Clientes Reales",
    "Diseño Web Profesional que Hace Crecer tu Presencia Digital",
    "Tu Sitio Web Trabajando 24/7 para Atraer Más Clientes"
  ], []);

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  // Tecnologías por categoría
  const techCategories = useMemo(() => [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "Angular", "Vue.js", "TailwindCSS"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", ".NET", "C#", "PHP", "Python", "Java"]
    },
    {
      category: "Database",
      technologies: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB", "Firebase"]
    }
  ], []);

  // Estados para cada categoría (Frontend, Backend, Database)
  const [frontendIndex, setFrontendIndex] = useState(0);
  const [frontendText, setFrontendText] = useState("");
  const [frontendDeleting, setFrontendDeleting] = useState(false);

  const [backendIndex, setBackendIndex] = useState(0);
  const [backendText, setBackendText] = useState("");
  const [backendDeleting, setBackendDeleting] = useState(false);

  const [databaseIndex, setDatabaseIndex] = useState(0);
  const [databaseText, setDatabaseText] = useState("");
  const [databaseDeleting, setDatabaseDeleting] = useState(false);

  const [techCursorVisible, setTechCursorVisible] = useState(true);

  // Configuración inicial y efecto de visibilidad
  useEffect(() => {
    setIsVisible(true);

    // Efecto de parpadeo para el cursor del título
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    // Efecto de parpadeo para el cursor de la tecnología
    const techCursorInterval = setInterval(() => {
      setTechCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(cursorInterval);
      clearInterval(techCursorInterval);
    };
  }, []);

  // Title typing effect
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    const typeEffect = () => {
      if (isDeleting) {
        if (title.length > 0) {
          setTitle(prev => prev.slice(0, -1));
          setSpeed(50);
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          setSpeed(500);
        }
      } else {
        if (title.length < currentTitle.length) {
          setTitle(prev => currentTitle.slice(0, prev.length + 1));
          setSpeed(100);
        } else {
          setIsDeleting(true);
          setSpeed(1000);
        }
      }
    };

    const timer = setTimeout(typeEffect, speed);
    return () => clearTimeout(timer);
  }, [title, isDeleting, currentTitleIndex, titles, speed]);

  // Frontend typing effect
  useEffect(() => {
    const currentTech = techCategories[0].technologies[frontendIndex];

    const typeEffect = () => {
      if (frontendDeleting) {
        if (frontendText.length > 0) {
          setFrontendText(prev => prev.slice(0, -1));
        } else {
          setFrontendDeleting(false);
          setFrontendIndex((prev) => (prev + 1) % techCategories[0].technologies.length);
        }
      } else {
        if (frontendText.length < currentTech.length) {
          setFrontendText(prev => currentTech.slice(0, prev.length + 1));
        } else {
          setTimeout(() => setFrontendDeleting(true), 2000);
        }
      }
    };

    const timer = setTimeout(typeEffect, frontendDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [frontendText, frontendDeleting, frontendIndex, techCategories]);

  // Backend typing effect (con delay inicial)
  useEffect(() => {
    const currentTech = techCategories[1].technologies[backendIndex];

    const typeEffect = () => {
      if (backendDeleting) {
        if (backendText.length > 0) {
          setBackendText(prev => prev.slice(0, -1));
        } else {
          setBackendDeleting(false);
          setBackendIndex((prev) => (prev + 1) % techCategories[1].technologies.length);
        }
      } else {
        if (backendText.length < currentTech.length) {
          setBackendText(prev => currentTech.slice(0, prev.length + 1));
        } else {
          setTimeout(() => setBackendDeleting(true), 2000);
        }
      }
    };

    const timer = setTimeout(typeEffect, backendDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [backendText, backendDeleting, backendIndex, techCategories]);

  // Database typing effect (con delay inicial)
  useEffect(() => {
    const currentTech = techCategories[2].technologies[databaseIndex];

    const typeEffect = () => {
      if (databaseDeleting) {
        if (databaseText.length > 0) {
          setDatabaseText(prev => prev.slice(0, -1));
        } else {
          setDatabaseDeleting(false);
          setDatabaseIndex((prev) => (prev + 1) % techCategories[2].technologies.length);
        }
      } else {
        if (databaseText.length < currentTech.length) {
          setDatabaseText(prev => currentTech.slice(0, prev.length + 1));
        } else {
          setTimeout(() => setDatabaseDeleting(true), 2000);
        }
      }
    };

    const timer = setTimeout(typeEffect, databaseDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [databaseText, databaseDeleting, databaseIndex, techCategories]);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden pt-20">
      {/* YouTube Video Background with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/Hgg7M3kSqyE?controls=0&autoplay=1&mute=1&loop=1&playlist=Hgg7M3kSqyE&playsinline=1&rel=0&enablejsapi=1&disablekb=1&modestbranding=1&showinfo=0"
            title="Background video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute w-[120%] h-[120%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
            style={{
              pointerEvents: 'none'
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-indigo-900/60 z-[1]"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-[2]">
        <div className="absolute -right-40 -top-40 w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -left-20 bottom-0 w-[600px] h-[600px] rounded-full bg-indigo-200/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white/80 text-sm font-medium uppercase tracking-wider">
              Enfocado en soluciones digitales profesionales que impulsan negocios
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mt-3 mb-6 min-h-[3em]">
              {title}
              <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-lg">
              Transformamos sus ideas en experiencias digitales excepcionales. Nuestras soluciones web están diseñadas para destacar su marca, aumentar conversiones y brindar resultados tangibles para su negocio.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" variant="default" className="text-base">
                Solicitar Consulta
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                Ver Proyectos
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative bg-black/30 backdrop-blur-sm shadow-2xl rounded-2xl p-4 lg:p-6 aspect-video w-full overflow-hidden border border-white/10">
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col">
                  <div className="bg-gray-800 p-3 text-xs text-gray-300 font-mono">
                    <span className="text-white/80">ezdev.cr</span> ~ Technologies
                  </div>
                  <div className="p-4 flex-1 text-green-500 font-mono text-sm overflow-hidden space-y-2">
                    {/* Frontend */}
                    <div className="flex items-center">
                      <span className="text-blue-400">const</span>
                      <span className="text-yellow-400 mx-2">Frontend</span>
                      <span className="text-white"> = </span>
                      <span className="text-green-300 ml-2 min-w-[120px]">
                        {frontendText}
                        <span className={`ml-1 ${techCursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>
                      </span>
                    </div>

                    {/* Backend */}
                    <div className="flex items-center">
                      <span className="text-blue-400">const</span>
                      <span className="text-yellow-400 mx-2">Backend</span>
                      <span className="text-white"> = </span>
                      <span className="text-green-300 ml-2 min-w-[120px]">
                        {backendText}
                        <span className={`ml-1 ${techCursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>
                      </span>
                    </div>

                    {/* Database */}
                    <div className="flex items-center">
                      <span className="text-blue-400">const</span>
                      <span className="text-yellow-400 mx-2">Database</span>
                      <span className="text-white"> = </span>
                      <span className="text-green-300 ml-2 min-w-[120px]">
                        {databaseText}
                        <span className={`ml-1 ${techCursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/30 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}