import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Rocket } from "lucide-react";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="scroll-reveal">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transformamos
            <span className="gradient-text block">Ideas en Tecnología</span>
          </h1>
        </div>

        <div className="scroll-reveal">
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Desarrollamos soluciones tecnológicas innovadoras que impulsan el crecimiento de tu negocio hacia el futuro digital.
          </p>
        </div>

        <div className="scroll-reveal flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button className="bg-gradient-to-r from-purple-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 glow-effect">
            Comenzar Proyecto <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300">
            Ver Portafolio
          </Button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="scroll-reveal bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Desarrollo Rápido</h3>
            <p className="text-gray-300">Metodologías ágiles para entregas eficientes y de calidad.</p>
          </div>

          <div className="scroll-reveal bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Seguridad Avanzada</h3>
            <p className="text-gray-300">Protección integral con las mejores prácticas de seguridad.</p>
          </div>

          <div className="scroll-reveal bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Escalabilidad</h3>
            <p className="text-gray-300">Soluciones que crecen junto con tu negocio.</p>
          </div>
        </div>
      </div>
    </section>
  );
}