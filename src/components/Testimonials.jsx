import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      position: "CEO, InnovateTech",
      company: "InnovateTech Solutions",
      content: "Nexora transformó completamente nuestra presencia digital. Su equipo no solo entregó un sitio web excepcional, sino que también nos guió en toda la estrategia digital. Los resultados han superado nuestras expectativas.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b788?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Carlos Ruiz",
      position: "Director de Marketing",
      company: "Retail Plus",
      content: "La aplicación móvil que desarrollaron para nosotros ha revolucionado la forma en que nuestros clientes interactúan con nuestra marca. El aumento en engagement ha sido increíble.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Ana Martín",
      position: "Fundadora",
      company: "EcoShop",
      content: "El equipo de Nexora entendió perfectamente nuestra visión y la convirtió en una plataforma e-commerce que ha triplicado nuestras ventas online. Su atención al detalle es impresionante.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "David López",
      position: "CTO",
      company: "StartupLab",
      content: "Como startup, necesitábamos un socio tecnológico que entendiera nuestras limitaciones y potencial. Nexora no solo nos entregó una solución técnica excelente, sino que se convirtieron en asesores estratégicos.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Laura Fernández",
      position: "Gerente General",
      company: "HealthCare Pro",
      content: "El sistema de gestión hospitalaria que desarrollaron ha mejorado significativamente nuestra eficiencia operativa. La experiencia del equipo en el sector salud fue clave para el éxito del proyecto.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Roberto Silva",
      position: "Propietario",
      company: "RestaurantePlus",
      content: "La plataforma que crearon integra perfectamente nuestro punto de venta, inventario y delivery. Ha simplificado nuestras operaciones y mejorado la experiencia de nuestros clientes considerablemente.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lo que Dicen Nuestros <span className="gradient-text">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La confianza de nuestros clientes es nuestra mejor carta de presentación. 
            Descubre por qué eligen Nexora para sus proyectos tecnológicos.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="mb-12">
          <Card className="scroll-reveal max-w-4xl mx-auto border-0 shadow-xl bg-white">
            <CardContent className="p-8 md:p-12 text-center">
              <Quote className="w-16 h-16 text-purple-200 mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 leading-relaxed">
                "{testimonials[0].content}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonials[0].avatar} 
                  alt={testimonials[0].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-purple-100"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">{testimonials[0].name}</div>
                  <div className="text-purple-600 font-medium">{testimonials[0].position}</div>
                  <div className="text-gray-500">{testimonials[0].company}</div>
                </div>
              </div>
              <div className="flex justify-center space-x-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Grid of testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(1).map((testimonial, index) => (
            <Card key={index} className="scroll-reveal border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-100 group-hover:border-purple-200 transition-colors duration-300"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-purple-600">{testimonial.position}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="scroll-reveal">
            <div className="text-4xl font-bold gradient-text mb-2">150+</div>
            <div className="text-gray-600">Proyectos Completados</div>
          </div>
          <div className="scroll-reveal">
            <div className="text-4xl font-bold gradient-text mb-2">98%</div>
            <div className="text-gray-600">Satisfacción del Cliente</div>
          </div>
          <div className="scroll-reveal">
            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-gray-600">Soporte Técnico</div>
          </div>
        </div>
      </div>
    </section>
  );
}