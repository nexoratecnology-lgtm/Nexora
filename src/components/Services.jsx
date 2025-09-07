import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Database, 
  Cloud, 
  Palette,
  ArrowRight,
  Check
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Desarrollo Web Personalizado",
      description: "Sitios web y aplicaciones web a medida, optimizados para rendimiento y experiencia de usuario.",
      features: ["Diseño Responsivo", "SEO Optimizado", "Integración CMS", "Analytics Avanzado"],
      price: "Desde $2,500",
      popular: false
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description: "Apps nativas e híbridas para iOS y Android que conectan con tus usuarios donde están.",
      features: ["iOS & Android", "UI/UX Premium", "Push Notifications", "Integración APIs"],
      price: "Desde $5,000",
      popular: true
    },
    {
      icon: ShoppingCart,
      title: "Plataformas E-commerce",
      description: "Tiendas online completas con gestión de inventario, pagos seguros y analytics de ventas.",
      features: ["Pasarelas de Pago", "Gestión Inventario", "Panel Admin", "Marketing Tools"],
      price: "Desde $3,500",
      popular: false
    },
    {
      icon: Database,
      title: "Sistemas Empresariales",
      description: "CRM, ERP y sistemas de gestión personalizados para optimizar procesos empresariales.",
      features: ["Automatización", "Reportes Avanzados", "Multi-usuario", "Integración APIs"],
      price: "Desde $8,000",
      popular: false
    },
    {
      icon: Cloud,
      title: "Consultoría en la Nube",
      description: "Migración, optimización y gestión de infraestructura cloud para máximo rendimiento.",
      features: ["Migración Cloud", "Optimización Costos", "Monitoreo 24/7", "Backup Automático"],
      price: "Desde $1,500",
      popular: false
    },
    {
      icon: Palette,
      title: "Diseño UI/UX",
      description: "Diseño centrado en el usuario con interfaces intuitivas y experiencias memorables.",
      features: ["Research UX", "Prototipado", "Testing Usuario", "Design System"],
      price: "Desde $2,000",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales para impulsar tu negocio hacia el éxito digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`scroll-reveal relative group hover:shadow-2xl transition-all duration-300 border-0 ${service.popular ? 'ring-2 ring-purple-500 ring-opacity-50' : ''}`}>
              {service.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-amber-500 text-white px-4 py-1">
                  Más Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${service.popular ? 'bg-gradient-to-br from-purple-600 to-amber-500 glow-effect' : 'bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-amber-500'} transition-all duration-300`}>
                  <service.icon className={`w-8 h-8 ${service.popular ? 'text-white' : 'text-gray-600 group-hover:text-white'} transition-colors duration-300`} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <div className="text-2xl font-bold gradient-text mt-2">
                  {service.price}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-gray-600 text-center">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className={`w-full ${service.popular ? 'bg-gradient-to-r from-purple-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 glow-effect' : 'bg-gray-900 hover:bg-gray-800'} text-white rounded-full transition-all duration-300`}>
                  Solicitar Cotización <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Necesitas algo específico?
            </h3>
            <p className="text-gray-600 mb-6">
              Desarrollamos soluciones a medida para cualquier necesidad tecnológica. 
              Contáctanos para una consulta gratuita.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 text-white px-8 py-3 rounded-full font-medium glow-effect">
              Consulta Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}