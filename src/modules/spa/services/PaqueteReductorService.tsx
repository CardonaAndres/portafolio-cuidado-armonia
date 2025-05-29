import { useState, useEffect } from 'react';
import { Zap, Target, Thermometer, Waves, Flame, ArrowRight, CheckCircle, Star, Calendar, Clock } from 'lucide-react';

const treatments = [
{
    name: "Maderoterapia",
    icon: Waves,
    description: "Técnica natural con instrumentos de madera que estimula el drenaje linfático y mejora la circulación",
    benefits: ["Reduce celulitis", "Tonifica músculos", "Mejora circulación"],
    color: "from-amber-400 to-orange-500"
},
{
    name: "Lipoláser",
    icon: Zap,
    description: "Tecnología láser no invasiva que descompone la grasa localizada de forma segura",
    benefits: ["Elimina grasa localizada", "Sin cirugía", "Resultados visibles"],
    color: "from-purple-400 to-pink-500"
},
{
    name: "Cavitador",
    icon: Target,
    description: "Ultrasonido focalizado que rompe las células grasas para su eliminación natural",
    benefits: ["Destruye adipocitos", "Reafirma piel", "Efecto inmediato"],
    color: "from-blue-400 to-cyan-500"
},
{
    name: "Choque Térmico",
    icon: Thermometer,
    description: "Contraste de temperaturas que acelera el metabolismo y potencia la eliminación de toxinas",
    benefits: ["Acelera metabolismo", "Elimina toxinas", "Efecto reafirmante"],
    color: "from-red-400 to-pink-500"
},
{
    name: "Carboxiterapia",
    icon: Flame,
    description: "Inyección de CO2 medicinal que mejora oxigenación y estimula producción de colágeno",
    benefits: ["Oxigena tejidos", "Estimula colágeno", "Mejora elasticidad"],
    color: "from-green-400 to-emerald-500"
},
{
    name: "Quemadores",
    icon: Flame,
    description: "Tratamiento complementario que potencia la quema de grasa y acelera resultados",
    benefits: ["Acelera quema grasa", "Potencia resultados", "Efecto duradero"],
    color: "from-orange-400 to-red-500"
}
];

const sessionInfo = [
    { label: "Duración por sesión", value: "90 minutos", icon: Clock },
    { label: "Número de sesiones", value: "8 sesiones", icon: Calendar },
    { label: "Frecuencia", value: "2 veces por semana", icon: Star }
];

export const PaqueteReductorService = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTreatment, setHoveredTreatment] = useState<null | number>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  return (
    <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-3 overflow-hidden">
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-300 to-rose-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header del servicio */}
        <div className={`text-center space-y-6 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Badge promocional */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full shadow-lg animate-pulse">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-semibold text-sm uppercase tracking-wider">Promo Especial</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-5xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                Paquete
              </span>
              <span className="text-gray-900"> Reductor</span>
            </h2>
            
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 rounded-full mx-auto"></div>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tratamiento integral que combina las mejores tecnologías para la 
            <span className="font-semibold text-purple-600"> reducción de medidas y eliminación de grasa localizada</span>, 
            diseñado para transformar tu figura de manera segura y efectiva.
          </p>
        </div>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Lista de tratamientos */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Tratamientos Incluidos</h3>
            
            <div className="space-y-4">
              {treatments.map((treatment, index) => {
                const Icon = treatment.icon;
                return (
                  <div
                    key={index}
                    className={`group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-purple-200 ${
                      hoveredTreatment === index ? 'scale-105' : ''
                    }`}
                    onMouseEnter={() => setHoveredTreatment(index)}
                    onMouseLeave={() => setHoveredTreatment(null)}
                  >
                    <div className="flex items-start space-x-4">
                      {/* Icono con gradiente */}
                      <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${treatment.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      
                      {/* Contenido */}
                      <div className="flex-1 space-y-3">
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {treatment.name}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {treatment.description}
                        </p>
                        
                        {/* Beneficios */}
                        <div className="flex flex-wrap gap-2">
                          {treatment.benefits.map((benefit, benefitIndex) => (
                            <span
                              key={benefitIndex}
                              className="inline-flex items-center space-x-1 bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full"
                            >
                              <CheckCircle className="w-3 h-3" />
                              <span>{benefit}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Indicador de hover */}
                    <div className={`absolute top-4 right-4 transition-all duration-300 ${hoveredTreatment === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}>
                      <ArrowRight className="w-5 h-5 text-purple-500" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Panel de información y CTA */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            {/* Información de sesiones */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-100">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Detalles del Paquete</h4>
              
              <div className="space-y-6">
                {sessionInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-medium">{info.label}</p>
                        <p className="text-lg font-bold text-gray-900">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Resultados esperados */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white shadow-xl">
              <h4 className="text-2xl font-bold mb-4">Resultados Esperados</h4>
              <div className="space-y-3">
                {[
                  "Reducción de 2-4 tallas",
                  "Eliminación de grasa localizada",
                  "Mejora visible de celulitis",
                  "Piel más firme y tonificada"
                ].map((result, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-white fill-current" />
                    <span className="text-white/90">{result}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
