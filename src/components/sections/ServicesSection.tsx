"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Code, Globe, ShoppingCart, BarChart, Smartphone, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
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
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="p-6">
        <div className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const services = [
    {
      icon: <Globe size={28} />,
      title: "Diseño Web",
      description: "Creamos sitios web atractivos y funcionales que cautivan a sus visitantes y reflejan la identidad de su marca.",
    },
    {
      icon: <Code size={28} />,
      title: "Desarrollo Web",
      description: "Desarrollamos aplicaciones web a medida con las tecnologías más modernas y eficientes del mercado.",
    },
    {
      icon: <ShoppingCart size={28} />,
      title: "E-Commerce",
      description: "Implementamos soluciones de comercio electrónico que impulsan sus ventas y optimizan la experiencia de compra.",
    },
    {
      icon: <Smartphone size={28} />,
      title: "Aplicaciones Móviles",
      description: "Creamos aplicaciones móviles intuitivas y de alto rendimiento para iOS y Android que conectan con sus clientes.",
    },
    {
      icon: <BarChart size={28} />,
      title: "Marketing Digital",
      description: "Estrategias de marketing digital que incrementan su visibilidad online y generan más leads para su negocio.",
    },
    {
      icon: <Database size={28} />,
      title: "Hosting y Mantenimiento",
      description: "Servicios de alojamiento web y mantenimiento continuo para garantizar el óptimo funcionamiento de su sitio web.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
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
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            ¿Cómo podemos ayudarle?
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.5, delay: 0.2 }
              }
            }}
            className="text-lg text-gray-600"
          >
            Ofrecemos soluciones digitales completas para empresas de todos los tamaños. Desde sitios web corporativos hasta plataformas de comercio electrónico avanzadas, creamos exactamente lo que su negocio necesita para destacar en el mundo digital.
          </motion.p>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.5, delay: 0.3 }
              }
            }}
            className="mt-8"
          >
            <Button size="lg">Programar Reunión</Button>
          </motion.div>
        </div>

        <motion.h2
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.4 }
            }
          }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Nuestros Servicios
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}