"use client";

import { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  if (isInView) {
    controls.start("visible");
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    // Por ahora, solo resetearemos el formulario
    if (formRef.current) {
      formRef.current.reset();
      alert("¡Gracias por su mensaje! Le responderemos a la brevedad.");
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para convertir sus ideas en soluciones digitales exitosas. Contáctenos hoy mismo para comenzar su proyecto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.5, delay: 0.2 }
              }
            }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-xl font-bold mb-6">Envíenos un mensaje</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Su nombre"
                    required/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Su correo electrónico"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Su número de teléfono"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="¿Cómo podemos ayudarle?"
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">Enviar mensaje</Button>
              
              <p className="text-xs text-gray-500 mt-4">
                Los campos marcados con * son obligatorios.
              </p>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.5, delay: 0.3 }
              }
            }}
            className="flex flex-col justify-between"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold mb-6">Información de contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold">Dirección</h4>
                    <p className="text-gray-600">Guápiles, Limón, Costa Rica</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold">Teléfono</h4>
                    <p className="text-gray-600">+506 8888-8888</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold">Correo Electrónico</h4>
                    <p className="text-gray-600">info@ezdel.cr</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white rounded-lg shadow-lg p-0 overflow-hidden h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125759.38028798043!2d-83.85536065759033!3d10.21744576533222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0adf056d48371%3A0xf0ae9e97dc5e651a!2zR3XDoXBpbGVz!5e0!3m2!1ses-419!2scr!4v1695742800782!5m2!1ses-419!2scr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Ezdev CR"
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}