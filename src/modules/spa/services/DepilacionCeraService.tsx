import { useState, useEffect } from 'react';
import { Droplets, Sparkles, Heart, CheckCircle, Clock, Star } from 'lucide-react';

const servicios = [
{ name: 'CEJAS', icon: '👁️', description: 'Diseño y definición perfecta' },
{ name: 'BIGOTE', icon: '👄', description: 'Suavidad y precisión delicada' },
{ name: 'AXILAS', icon: '💪', description: 'Comodidad y frescura duradera' },
{ name: 'BIKINI', icon: '👙', description: 'Cuidado íntimo profesional' },
{ name: 'MEDIA PIERNA', icon: '🦵', description: 'Suavidad desde rodilla a tobillo' },
{ name: 'PIERNA COMPLETA', icon: '✨', description: 'Tratamiento completo y duradero' }
];

export const DepilacionCeraService = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<null | number>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const waxDrops = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.5,
    duration: 2 + (i % 3),
    left: 10 + (i * 12) + (i % 2 * 5),
  }));

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50 overflow-hidden">
      
      {/* Fondo decorativo con gotas de cera */}
      <div className="absolute inset-0 opacity-20">
        {waxDrops.map((drop) => (
          <div
            key={drop.id}
            className="absolute animate-bounce"
            style={{
              left: `${drop.left}%`,
              top: `${20 + (drop.id % 4) * 20}%`,
              animationDelay: `${drop.delay}s`,
              animationDuration: `${drop.duration}s`,
            }}
          >
            <Droplets className="w-6 h-6 text-amber-300" />
          </div>
        ))}
      </div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-yellow-200 to-amber-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Badge superior */}
          <div className="inline-flex items-center space-x-2 bg-amber-100/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-amber-200 mb-6">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span className="text-sm font-semibold text-amber-800">Técnica Profesional</span>
          </div>

          {/* Título principal con efecto cera derretida */}
          <div className="relative">
            <h2 className="text-6xl lg:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Depilación
              </span>
            </h2>
            <h3 className="text-4xl lg:text-5xl font-light text-gray-700 mb-6">
              con <span className="italic font-semibold text-amber-600">Cera</span>
            </h3>
            
            {/* Línea decorativa que simula cera derretida */}
            <div className="relative mx-auto w-64 h-2 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-8 leading-relaxed">
            Experimenta la suavidad perfecta con nuestra técnica especializada en depilación con cera. 
            <span className="font-semibold text-amber-700"> Resultados duraderos y piel sedosa</span>
          </p>
        </div>

        {/* Sección de beneficios */}
        <div className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { 
              icon: Heart, 
              title: 'Cuidado Suave', 
              desc: 'Cera tibia que respeta tu piel',
              color: 'from-pink-400 to-rose-400'
            },
            { 
              icon: Clock, 
              title: 'Duración Extendida', 
              desc: 'Resultados que perduran semanas',
              color: 'from-amber-400 to-yellow-400'
            },
            { 
              icon: Star, 
              title: 'Técnica Profesional', 
              desc: 'Especialistas certificadas',
              color: 'from-purple-400 to-pink-400'
            }
          ].map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/50"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Grid de servicios */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Nuestros Servicios</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-amber-100 cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                
                {/* Efecto de brillo al hacer hover */}
                <div className={`absolute inset-0 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 opacity-0 transition-opacity duration-500 ${hoveredService === index ? 'opacity-20' : ''}`}></div>
                
                <div className="relative z-10">
                  {/* Emoji e icono */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{servicio.icon}</span>
                    <CheckCircle className={`w-6 h-6 transition-all duration-300 ${hoveredService === index ? 'text-green-500 scale-110' : 'text-gray-300'}`} />
                  </div>

                  {/* Nombre del servicio */}
                  <h4 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-amber-700 transition-colors">
                    {servicio.name}
                  </h4>

                  {/* Descripción */}
                  <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors">
                    {servicio.description}
                  </p>

                  {/* Línea decorativa */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent group-hover:via-amber-400 transition-colors"></div>
                </div>

                {/* Elemento decorativo que simula gota de cera */}
                <div className={`absolute -top-2 -right-2 w-8 h-12 bg-gradient-to-b from-amber-300 to-amber-400 transform rotate-12 transition-all duration-500 ${hoveredService === index ? 'scale-110 rotate-6' : ''}`} 
                     style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};