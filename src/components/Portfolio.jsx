import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Globe, ShoppingCart } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "TechCorp Enterprise",
      category: "Desarrollo Web",
      description: "Plataforma corporativa completa con panel de administración, gestión de usuarios y analytics en tiempo real.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      icon: Globe,
      featured: true
    },
    {
      title: "ShopFlow E-commerce",
      category: "Tienda Online",
      description: "Plataforma de comercio electrónico con integración de pagos, gestión de inventario y analytics de ventas.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Vue.js", "Stripe", "MongoDB", "Express"],
      icon: ShoppingCart,
      featured: false
    },
    {
      title: "MobileFit App",
      category: "App Móvil",
      description: "Aplicación de fitness con seguimiento de entrenamientos, planes nutricionales y comunidad social.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React Native", "Firebase", "TypeScript", "Redux"],
      icon: Smartphone,
      featured: true
    },
    {
      title: "RestaurantePro",
      category: "Sistema de Gestión",
      description: "Sistema completo para gestión de restaurantes con POS, inventario, reservas y delivery.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Angular", "Python", "MySQL", "Docker"],
      icon: Globe,
      featured: false
    },
    {
      title: "FinanceTracker",
      category: "App Móvil",
      description: "Aplicación para gestión de finanzas personales con categorización automática y reportes avanzados.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Flutter", "Dart", "SQLite", "Charts"],
      icon: Smartphone,
      featured: false
    },
    {
      title: "EduPlatform",
      category: "Plataforma Educativa",
      description: "Plataforma de e-learning con cursos interactivos, evaluaciones y seguimiento de progreso.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Next.js", "GraphQL", "Prisma", "Vercel"],
      icon: Globe,
      featured: true
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestro <span className="gradient-text">Portafolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre algunos de nuestros proyectos más destacados que han transformado 
            negocios y creado experiencias digitales excepcionales.
          </p>
        </div>

        {/* Featured Projects - Larger cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.filter(project => project.featured).slice(0, 2).map((project, index) => (
            <Card key={index} className="scroll-reveal group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-purple-600 to-amber-500 text-white">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button size="sm" className="bg-gradient-to-r from-purple-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Proyecto
                  </Button>
                  <Button size="sm" variant="outline" className="hover:bg-gray-50">
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regular Projects - Smaller grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(project => !project.featured).map((project, index) => (
            <Card key={index} className="scroll-reveal group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <Badge className="bg-gradient-to-r from-purple-600 to-amber-500 text-white text-xs">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button size="sm" variant="outline" className="w-full group-hover:bg-purple-50 group-hover:border-purple-200">
                  Ver Detalles
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button className="bg-gradient-to-r from-purple-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 text-white px-8 py-3 rounded-full font-medium glow-effect">
            Ver Todos los Proyectos
          </Button>
        </div>
      </div>
    </section>
  );
}