import React, { useState, useEffect } from 'react';
import { Sparkles, Droplets, Zap, Sun, Heart, CheckCircle, Users, Star } from 'lucide-react';

const tratamientos = [
  { 
    icon: Sparkles, 
    title: "Higienización", 
    description: "Limpieza profunda y purificación de la piel",
    color: "from-purple-400 to-purple-600",
    dotColor: "bg-purple-500"
  },
  { 
    icon: Droplets, 
    title: "Exfoliación", 
    description: "Eliminación de células muertas y renovación celular",
    color: "from-blue-400 to-blue-600",
    dotColor: "bg-blue-500"
  },
  { 
    icon: Droplets, 
    title: "Vapor", 
    description: "Apertura de poros para limpieza profunda",
    color: "from-cyan-400 to-cyan-600",
    dotColor: "bg-cyan-500"
  },
  { 
    icon: CheckCircle, 
    title: "Extracción de Comedones", 
    description: "Eliminación profesional de puntos negros",
    color: "from-pink-400 to-pink-600",
    dotColor: "bg-pink-500"
  },
  { 
    icon: Zap, 
    title: "Peeling Ultrasónico", 
    description: "Exfoliación avanzada con tecnología ultrasónica",
    color: "from-violet-400 to-violet-600",
    dotColor: "bg-violet-500"
  },
  { 
    icon: Zap, 
    title: "Alta Frecuencia", 
    description: "Tratamiento antibacteriano y cicatrizante",
    color: "from-indigo-400 to-indigo-600",
    dotColor: "bg-indigo-500"
  },
  { 
    icon: Heart, 
    title: "Mascarilla Hidratante", 
    description: "Nutrición e hidratación profunda de la piel",
    color: "from-rose-400 to-rose-600",
    dotColor: "bg-rose-500"
  },
  { 
    icon: Sun, 
    title: "Pantalla Solar", 
    description: "Protección UV para cuidado post-tratamiento",
    color: "from-orange-400 to-orange-600",
    dotColor: "bg-orange-500"
  }
];

export const LimpiezaFacialService = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 8);
    }, 3000);
    return () => clearInterval(stepTimer);
  }, []);


  return (
    <div className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Elementos decorativos de fondo - más sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-purple-200 to-transparent rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-pink-200 to-transparent rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 left-20 w-12 h-12 bg-gradient-to-br from-blue-200 to-transparent rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header del servicio - más compacto */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg border border-purple-100 mb-4">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-gray-700">Tratamiento de Belleza</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Limpieza Facial
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-4">
            Experimenta una transformación completa con nuestro tratamiento facial profesional. 
            Ocho pasos especializados para revelar la belleza natural de tu piel.
          </p>

          {/* Info para dos personas */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2 shadow-md border border-purple-200">
            <Users className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Servicio para 2 personas</span>
          </div>
        </div>

        {/* Grid principal - más compacto */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Panel izquierdo - Visualización del tratamiento */}
          <div className={`transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Círculo principal con pasos del tratamiento - más pequeño */}
            <div className="relative w-80 h-80 mx-auto mb-6">
              
              {/* Círculo exterior rotativo */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-purple-200 animate-spin" style={{ animationDuration: '30s' }}></div>
              
              {/* Círculo central */}
              <div className="absolute inset-6 bg-gradient-to-br from-white via-purple-50 to-pink-50 rounded-full shadow-2xl border border-purple-100">
                <div className="absolute inset-4 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center shadow-lg transition-all duration-500 bg-gradient-to-br ${tratamientos[activeStep].color}`}>
                      {React.createElement(tratamientos[activeStep].icon, { 
                        className: "w-6 h-6 text-white" 
                      })}
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      {tratamientos[activeStep].title}
                    </h3>
                    <p className="text-xs text-gray-600 px-3 leading-relaxed">
                      {tratamientos[activeStep].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Indicadores de paso alrededor del círculo - colores dinámicos */}
              {tratamientos.map((tratamiento, index) => {
                const angle = (index * 360) / tratamientos.length;
                const isActive = index === activeStep;
                return (
                  <div
                    key={index}
                    className={`absolute w-3 h-3 rounded-full transition-all duration-300 ${
                      isActive ? `${tratamiento.dotColor} scale-150 shadow-lg` : 'bg-purple-200'
                    }`}
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-150px)`,
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* Panel derecho - Lista detallada de tratamientos - más compacta */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                Proceso Completo del Tratamiento
              </h3>
              
              <div className="space-y-3">
                {tratamientos.map((tratamiento, index) => {
                  const Icon = tratamiento.icon;
                  const isCurrentStep = index === activeStep;
                  
                  return (
                    <div
                      key={index}
                      className={`flex items-start space-x-3 p-3 rounded-xl transition-all duration-500 ${
                        isCurrentStep 
                          ? 'bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300 shadow-md scale-[1.02]' 
                          : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-md transition-all duration-300 bg-gradient-to-br ${tratamiento.color}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className={`font-semibold text-sm mb-1 transition-colors ${
                          isCurrentStep ? 'text-purple-900' : 'text-gray-900'
                        }`}>
                          {index + 1}. {tratamiento.title}
                        </h4>
                        <p className={`text-xs transition-colors ${
                          isCurrentStep ? 'text-purple-700' : 'text-gray-600'
                        }`}>
                          {tratamiento.description}
                        </p>
                      </div>
                      
                      {isCurrentStep && (
                        <div className="flex items-center">
                          <div className={`w-2 h-2 rounded-full animate-pulse ${tratamiento.dotColor}`}></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Beneficios adicionales - más compactos */}
        <div className={`mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Beneficios del Tratamiento</h3>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              Nuestro tratamiento de limpieza facial proporciona resultados visibles desde la primera sesión
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Sparkles,
                title: "Piel Radiante",
                description: "Luminosidad natural y textura suave al tacto",
                gradient: "from-purple-400 to-pink-400"
              },
              {
                icon: Droplets,
                title: "Hidratación Profunda",
                description: "Restaura la barrera natural de hidratación",
                gradient: "from-blue-400 to-cyan-400"
              },
              {
                icon: CheckCircle,
                title: "Poros Limpios",
                description: "Eliminación efectiva de impurezas y comedones",
                gradient: "from-pink-400 to-rose-400"
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};