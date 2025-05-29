import { useState, useEffect } from 'react';
import { Target, Zap, Hand, Activity, TrendingDown, ArrowRight, CheckCircle } from 'lucide-react';

const tratamientos = [
  {
    icon: Zap,
    title: "3 Hidrolipoclasia",
    description: "Técnica avanzada que combina suero fisiológico con lidocaína para disolver la grasa localizada",
    benefits: ["Eliminación de grasa localizada", "Reducción de celulitis", "Mejora de la circulación"],
    color: "from-cyan-400 to-blue-500",
    bgColor: "from-cyan-50 to-blue-50"
  },
  {
    icon: Hand,
    title: "3 Masajes",
    description: "Masajes especializados en drenaje linfático y modelado corporal para optimizar resultados",
    benefits: ["Drenaje linfático", "Modelado corporal", "Relajación muscular"],
    color: "from-pink-400 to-rose-500",
    bgColor: "from-pink-50 to-rose-50"
  },
  {
    icon: Activity,
    title: "Aparatología",
    description: "Tecnología de vanguardia para potenciar la eliminación de grasa y tonificación",
    benefits: ["Cavitación ultrasónica", "Radiofrecuencia", "Electroestimulación"],
    color: "from-purple-400 to-violet-500",
    bgColor: "from-purple-50 to-violet-50"
  }
];

const bodyZones = [
  { name: "Abdomen", reduction: 85 },
  { name: "Caderas", reduction: 78 },
  { name: "Muslos", reduction: 82 },
  { name: "Brazos", reduction: 75 },
  { name: "Espalda", reduction: 70 }
];

export const ReduceMedidasService = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTreatment, setActiveTreatment] = useState(0);
  const [measurementProgress, setMeasurementProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const treatmentTimer = setInterval(() => {
      setActiveTreatment((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(treatmentTimer);
  }, []);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setMeasurementProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 100);
    return () => clearInterval(progressTimer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-cyan-50 via-white to-pink-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Elementos decorativos animados */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-cyan-200 to-transparent rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-60 right-10 w-32 h-32 bg-gradient-to-br from-pink-200 to-transparent rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-br from-purple-200 to-transparent rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Líneas de energía */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-30"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-cyan-100 mb-6">
            <Target className="w-5 h-5 text-cyan-500" />
            <span className="text-sm font-medium text-gray-700">Transformación Corporal</span>
          </div>
          
          <h2 className="text-5xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Reduce
            </span>
            <span className="text-gray-900 italic"> medidas</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforma tu silueta con nuestro programa integral de reducción de medidas. 
            Tres tratamientos especializados para resultados visibles y duraderos.
          </p>
        </div>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Panel izquierdo - Visualización de progreso */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Medidor de progreso circular */}
            <div className="relative w-80 h-80 mx-auto mb-8">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Círculo de fondo */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="3"
                />
                {/* Círculo de progreso */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#progressGradient)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={`${measurementProgress * 2.83} ${(100 - measurementProgress) * 2.83}`}
                  className="transition-all duration-300"
                />
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06B6D4" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Contenido central */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {Math.round(measurementProgress)}%
                  </div>
                  <div className="text-sm text-gray-600">Reducción promedio</div>
                  <div className="mt-4">
                    <TrendingDown className="w-8 h-8 text-green-500 mx-auto" />
                  </div>
                </div>
              </div>
            </div>

            {/* Zonas del cuerpo */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Target className="w-5 h-5 text-cyan-500 mr-2" />
                Zonas de Tratamiento
              </h3>
              <div className="space-y-3">
                {bodyZones.map((zone, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">{zone.name}</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full transition-all duration-1000"
                          style={{ width: `${zone.reduction}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900 w-10 text-right">
                        {zone.reduction}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Panel derecho - Tratamientos */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            <div className="space-y-6">
              {tratamientos.map((tratamiento, index) => {
                const Icon = tratamiento.icon;
                const isActive = index === activeTreatment;
                
                return (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-3xl p-8 transition-all duration-700 border-2 ${
                      isActive 
                        ? `bg-gradient-to-br ${tratamiento.bgColor} border-transparent shadow-2xl scale-105` 
                        : 'bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {/* Elemento decorativo de fondo */}
                    {isActive && (
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                        <div className={`w-full h-full bg-gradient-to-br ${tratamiento.color} rounded-full blur-xl`}></div>
                      </div>
                    )}
                    
                    <div className="relative z-10">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br ${tratamiento.color} transition-all duration-300 ${isActive ? 'scale-110' : ''}`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className={`text-2xl font-bold mb-2 transition-colors ${isActive ? 'text-gray-900' : 'text-gray-800'}`}>
                            {tratamiento.title}
                          </h3>
                          <p className={`text-gray-600 leading-relaxed ${isActive ? 'text-gray-700' : ''}`}>
                            {tratamiento.description}
                          </p>
                        </div>
                        
                        {isActive && (
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          </div>
                        )}
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-3 mt-6">
                        {tratamiento.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className={`flex items-center space-x-2 p-3 rounded-xl transition-all ${isActive ? 'bg-white/60' : 'bg-gray-50'}`}>
                            <CheckCircle className={`w-4 h-4 ${isActive ? 'text-green-600' : 'text-green-500'}`} />
                            <span className="text-sm font-medium text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sección de resultados esperados */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl p-1 shadow-2xl">
            <div className="bg-white rounded-3xl p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Resultados Esperados</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Nuestro programa integral está diseñado para ofrecerte resultados visibles desde las primeras sesiones
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { period: "Semana 1-2", result: "Drenaje y desinflamación", percentage: "15%" },
                  { period: "Semana 3-4", result: "Reducción visible", percentage: "35%" },
                  { period: "Semana 5-8", result: "Modelado corporal", percentage: "65%" },
                  { period: "Semana 9-12", result: "Resultado final", percentage: "85%" }
                ].map((timeline, index) => (
                  <div key={index} className="text-center group">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-pink-400 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">{timeline.percentage}</span>
                      </div>
                      {index < 3 && (
                        <ArrowRight className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-400 hidden md:block" />
                      )}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{timeline.period}</h4>
                    <p className="text-gray-600 text-sm">{timeline.result}</p>
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
