import { useState, useEffect } from 'react';
import { Zap, Sparkles, Target, Star } from 'lucide-react';

const features = [
    {
      icon: Zap,
      title: "Estimulación Profunda",
      description: "Activa la circulación sanguínea del cuero cabelludo"
    },
    {
      icon: Target,
      title: "Tratamiento Dirigido",
      description: "Fortalece folículos pilosos desde la raíz"
    },
    {
      icon: Sparkles,
      title: "Resultados Visibles",
      description: "Cabello más fuerte y saludable"
    }
];

const benefits = [
  "Estimula crecimiento capilar",
  "Mejora circulación sanguínea", 
  "Fortalece folículos pilosos",
  "Reduce caída del cabello"
];

export const AltaFrecuenciaCapilarService = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Fondo con gradientes */}
      
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, #E8C4D8 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, #D8B3E8 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, #A8D8E8 0%, transparent 70%)
          `
        }}
      />

      {/* Elementos decorativos flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <Zap className="w-6 h-6 text-orange-400 transform rotate-12" />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Contenido de texto */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full px-6 py-3 shadow-lg border border-orange-200">
                <Zap className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-semibold text-orange-700">Tecnología Avanzada</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent">
                  Alta Frecuencia
                </span>
                <br />
                <span className="text-gray-900 font-light italic">Capilar</span>
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
            </div>

            {/* Descripción */}
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Tratamiento estético que utiliza corrientes eléctricas de alta frecuencia 
                para <span className="font-semibold text-orange-600">estimular el cuero cabelludo</span> 
                y fortalecer los folículos pilosos.
              </p>
              
              <p className="text-gray-600">
                Esta técnica genera un efecto térmico suave que mejora la oxigenación 
                y nutrición del cabello desde la raíz.
              </p>
            </div>

            {/* Beneficios */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>Beneficios Principales</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-orange-100"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Elemento visual interactivo */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            {/* Contenedor principal */}
            <div className="relative w-full max-w-md mx-auto">
              
              {/* Círculo principal con efecto de frecuencia */}
              <div className="relative w-80 h-80 mx-auto">
                
                {/* Ondas de frecuencia */}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full border-2 animate-ping opacity-30"
                    style={{
                      borderColor: `hsl(${20 + i * 10}, 70%, 60%)`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: '3s'
                    }}
                  />
                ))}
                
                {/* Círculo central */}
                <div className="absolute inset-8 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-full shadow-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-inner">
                    <Zap className="w-16 h-16 text-orange-500 animate-pulse" />
                  </div>
                </div>

                {/* Partículas de energía */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={`particle-${i}`}
                    className="absolute w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce opacity-70"
                    style={{
                      left: `${50 + 35 * Math.cos((i * Math.PI * 2) / 8)}%`,
                      top: `${50 + 35 * Math.sin((i * Math.PI * 2) / 8)}%`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: '2s'
                    }}
                  />
                ))}
              </div>

              {/* Características flotantes */}
              <div className="absolute inset-0">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  const angle = (index * 120) * (Math.PI / 180);
                  const radius = 160;
                  const x = 50 + (radius * Math.cos(angle)) / 3.2;
                  const y = 50 + (radius * Math.sin(angle)) / 3.2;
                  
                  return (
                    <div
                      key={index}
                      className={`absolute transition-all duration-500 ${
                        activeFeature === index ? 'scale-110 opacity-100' : 'scale-100 opacity-80'
                      }`}
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className={`
                        bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border-2 
                        ${activeFeature === index ? 'border-orange-300' : 'border-gray-200'}
                        transition-all duration-500 min-w-48
                      `}>
                        <div className="flex items-center space-x-3 mb-2">
                          <div className={`
                            w-10 h-10 rounded-xl flex items-center justify-center
                            ${activeFeature === index 
                              ? 'bg-gradient-to-br from-orange-400 to-red-400' 
                              : 'bg-gray-100'
                            }
                          `}>
                            <Icon className={`w-5 h-5 ${
                              activeFeature === index ? 'text-white' : 'text-gray-600'
                            }`} />
                          </div>
                          <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
