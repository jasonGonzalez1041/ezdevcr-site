"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
    imageUrl: string;
    title: string;
    index: number;
}

const ProjectCard = ({ imageUrl, title, index }: ProjectCardProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 }
                }
            }}
            className="relative group overflow-hidden rounded-lg shadow-lg"
        >
            <div className="aspect-square relative overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <div className="absolute top-4 left-4 bg-primary/80 text-white px-3 py-1 rounded-md text-sm font-medium">
                {title}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                        <h4 className="text-white font-bold text-xl mb-2">{title}</h4>
                        <Button
                            variant="outline"
                            className="text-white border-white hover:bg-white/20"
                            size="sm"
                        >
                            Ver detalles
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function ProjectsSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const projects = [
        {
            imageUrl: "/images/projects/project1.jpg",
            title: "Proyecto 1",
        },
        {
            imageUrl: "/images/projects/project2.jpg",
            title: "Proyecto 2",
        },
        {
            imageUrl: "/images/projects/project3.jpg",
            title: "Proyecto 3",
        },
        {
            imageUrl: "/images/projects/project4.jpg",
            title: "Proyecto 4",
        },
    ];

    return (
        <section ref={sectionRef} className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-start gap-12">
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5 }
                            }
                        }}
                        className="w-full md:w-1/3"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos Destacados</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Nuestra trayectoria habla por sí sola. Hemos desarrollado soluciones digitales exitosas para clientes en diversos sectores, ayudándoles a alcanzar sus objetivos de negocio y superar a la competencia.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { duration: 0.5, delay: 0.2 }
                            }
                        }}
                        className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                imageUrl={project.imageUrl}
                                title={project.title}
                                index={index}
                            />
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { duration: 0.5, delay: 0.5 }
                        }
                    }}
                    className="flex justify-center mt-12"
                >
                    <Button variant="outline" className="mx-auto">Ver Más Proyectos</Button>
                </motion.div>
            </div>
        </section>
    );
}