import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí normalmente enviarías los datos a tu backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hablemos de tu <span className="gradient-text">Proyecto</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Tienes una idea? Nos encantaría conocerla y ayudarte a convertirla en realidad. 
            Contáctanos para una consulta gratuita.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="scroll-reveal bg-white/5 backdrop-blur-md border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                Solicita tu Cotización Gratuita
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-gray-300">
                    Gracias por contactarnos. Te responderemos en menos de 24 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white">Nombre Completo</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-white">Teléfono</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="+34 600 000 000"
                      />
                    </div>
                    <div>
                      <Label className="text-white">Servicio de Interés</Label>
                      <Select onValueChange={(value) => handleChange('service', value)}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Selecciona un servicio" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web">Desarrollo Web</SelectItem>
                          <SelectItem value="mobile">App Móvil</SelectItem>
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="enterprise">Sistema Empresarial</SelectItem>
                          <SelectItem value="consulting">Consultoría</SelectItem>
                          <SelectItem value="design">Diseño UI/UX</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label className="text-white">Presupuesto Estimado</Label>
                    <Select onValueChange={(value) => handleChange('budget', value)}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Selecciona tu presupuesto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5k">Menos de 5,000€</SelectItem>
                        <SelectItem value="5k-10k">5,000€ - 10,000€</SelectItem>
                        <SelectItem value="10k-25k">10,000€ - 25,000€</SelectItem>
                        <SelectItem value="25k-50k">25,000€ - 50,000€</SelectItem>
                        <SelectItem value="over-50k">Más de 50,000€</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">Cuéntanos sobre tu proyecto</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-32"
                      placeholder="Describe tu idea, objetivos y cualquier detalle que consideres importante..."
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 text-white py-3 rounded-full font-medium text-lg glow-effect">
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Solicitud
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="scroll-reveal space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">
                Información de Contacto
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Estamos aquí para ayudarte a llevar tu negocio al siguiente nivel. 
                Contáctanos a través de cualquiera de estos medios.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-amber-500 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <p className="text-gray-300">info@nexora.tech</p>
                  <p className="text-gray-300">ventas@nexora.tech</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-amber-500 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Teléfono</h4>
                  <p className="text-gray-300">+34 912 345 678</p>
                  <p className="text-gray-300">+34 600 123 456</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-amber-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Oficina</h4>
                  <p className="text-gray-300">Calle Gran Vía, 123</p>
                  <p className="text-gray-300">28013 Madrid, España</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-amber-500 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Horario</h4>
                  <p className="text-gray-300">Lunes - Viernes: 9:00 - 18:00</p>
                  <p className="text-gray-300">Sábados: 10:00 - 14:00</p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <Card className="bg-gradient-to-r from-purple-600 to-amber-500 border-0">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold text-white mb-3">
                  ¿Necesitas una respuesta rápida?
                </h4>
                <p className="text-white/90 mb-4">
                  Llámanos directamente para una consulta inmediata
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                  Llamar Ahora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}