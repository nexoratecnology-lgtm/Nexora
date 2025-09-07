import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Award } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Misión",
      description: "Transformar ideas innovadoras en soluciones tecnológicas que impulsen el crecimiento empresarial y mejoren la experiencia digital de nuestros clientes."
    },
    {
      icon: Eye,
      title: "Visión",
      description: "Ser el socio tecnológico líder que acompañe a las empresas en su transformación digital, creando valor a través de la innovación y la excelencia."
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Innovación constante, calidad excepcional, compromiso con el cliente y transparencia en cada proyecto que desarrollamos."
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Nos comprometemos a entregar siempre la más alta calidad en cada línea de código, cada diseño y cada interacción con nuestros clientes."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Acerca de <span className="gradient-text">Nexora</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos una empresa tecnológica dedicada a crear soluciones digitales innovadoras. 
            Con más de 5 años de experiencia, hemos ayudado a cientos de empresas a transformar 
            sus procesos y alcanzar sus objetivos digitales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="scroll-reveal border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-amber-500 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">¿Por qué elegir Nexora?</h3>
          <p className="text-xl mb-8 opacity-90">
            Combinamos creatividad, tecnología de vanguardia y un enfoque centrado en el cliente 
            para crear soluciones que realmente marquen la diferencia.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-lg opacity-90">Proyectos Completados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-lg opacity-90">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Clientes Satisfechos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}