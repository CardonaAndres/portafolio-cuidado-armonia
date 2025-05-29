import { useState, useEffect } from 'react';
import { Waves, Hand, Zap, Radio, Droplets, ArrowRight, CheckCircle, Target, Timer, Award, Sparkles } from 'lucide-react';

const treatments = [
{
    name: "Maderoterapia",
    icon: Waves,
    description: "Técnica manual con rodillos de madera que rompe nódulos de celulitis y estimula la circulación",
    mechanism: "Presión mecánica controlada",
    benefits: ["Rompe nódulos fibrosos", "Mejora textura de piel", "Estimula drenaje"],
    color: "from-amber-400 to-orange-400",
    intensity: 85
},
{
    name: "Masajes",
    icon: Hand,
    description: "Masaje terapéutico especializado que mejora circulación y reduce la apariencia de piel de naranja",
    mechanism: "Manipulación manual profunda",
    benefits: ["Mejora circulación", "Relaja tejidos", "Efecto inmediato"],
    color: "from-green-400 to-emerald-400",
    intensity: 70
},
{
    name: "Carboxiterapia",
    icon: Zap,
    description: "Microinyecciones de CO2 que oxigenan tejidos y estimulan producción de colágeno",
    mechanism: "Oxigenación celular",
    benefits: ["Oxigena profundamente", "Regenera colágeno", "Efecto lifting"],
    color: "from-blue-400 to-cyan-400",
    intensity: 90
},
{
    name: "Ultrasonido",
    icon: Radio,
    description: "Ondas ultrasónicas que penetran profundamente para romper depósitos grasos",
    mechanism: "Vibración ultrasónica",
    benefits: ["Penetración profunda", "Rompe adipocitos", "Sin dolor"],
    color: "from-purple-400 to-violet-400",
    intensity: 95
},
{
    name: "Radiofrecuencia",
    icon: Radio,
    description: "Calor controlado que contrae fibras de colágeno y mejora firmeza de la piel",
    mechanism: "Calentamiento controlado",
    benefits: ["Reafirma piel", "Contrae colágeno", "Efecto tensor"],
    color: "from-pink-400 to-rose-400",
    intensity: 88
},
{
    name: "Drenadores",
    icon: Droplets,
    description: "Productos especializados que potencian la eliminación de toxinas y líquidos retenidos",
    mechanism: "Drenaje linfático activo",
    benefits: ["Elimina toxinas", "Reduce retención", "Potencia resultados"],
    color: "from-teal-400 to-cyan-400",
    intensity: 75
}
];

const celluliteStages = [
{
    stage: "Grado 0",
    description: "Piel lisa sin irregularidades visibles",
    color: "from-green-400 to-emerald-500"
},
{
    stage: "Grado 1",
    description: "Irregularidades leves al pellizcar la piel",
    color: "from-yellow-400 to-orange-400"
},
{
    stage: "Grado 2",
    description: "Piel de naranja visible al estar de pie",
    color: "from-orange-400 to-red-400"
},
{
    stage: "Grado 3",
    description: "Irregularidades visibles en cualquier posición",
    color: "from-red-400 to-red-600"
}
];

const results = [
{ week: "Semana 1-2", result: "Mejora de circulación y reducción de inflamación" },
{ week: "Semana 3-4", result: "Piel más suave y textura mejorada" },
{ week: "Semana 5-6", result: "Reducción visible de celulitis y mayor firmeza" },
{ week: "Semana 7-8", result: "Resultados óptimos y piel renovada" }
];

export const PaqueteCelulitisService = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const [hoveredTreatment, setHoveredTreatment] = useState<null | number>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate stages
    const interval = setInterval(() => {
      setActiveStage(prev => (prev + 1) % 4);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 overflow-hidden">
      
      {/* Elementos decorativos animados */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header especializado */}
        <div className={`text-center space-y-8 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Badge especializado */}
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-full shadow-lg">
            <Target className="w-5 h-5" />
            <span className="font-bold text-sm uppercase tracking-wider">Tratamiento Especializado</span>
          </div>

          <div className="space-y-6">
            <h2 className="text-5xl lg:text-5xl font-bold">
              <span className="text-gray-900">Paquete </span>
              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent italic">
                Celulitis
              </span>
            </h2>
            
            <div className="w-40 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 rounded-full mx-auto"></div>
          </div>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Programa intensivo diseñado específicamente para 
            <span className="font-semibold text-teal-600"> combatir la celulitis en todos sus grados</span>, 
            combinando las técnicas más avanzadas para lograr una piel suave, firme y uniforme.
          </p>
        </div>

        {/* Indicador visual de grados de celulitis */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Grados de Celulitis que Tratamos</h3>
          <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
            {celluliteStages.map((stage, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-48 p-4 rounded-2xl transition-all duration-500 cursor-pointer ${
                  activeStage === index 
                    ? 'bg-white shadow-xl scale-105 border-2 border-teal-300' 
                    : 'bg-white/60 shadow-lg hover:shadow-xl'
                }`}
                onClick={() => setActiveStage(index)}
              >
                <div className={`w-full h-3 bg-gradient-to-r ${stage.color} rounded-full mb-3`}></div>
                <h4 className="font-bold text-gray-900 text-center">{stage.stage}</h4>
                <p className="text-xs text-gray-600 text-center mt-2">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Lista de tratamientos - 2 columnas */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center space-x-3">
              <Sparkles className="w-8 h-8 text-teal-500" />
              <span>Tratamientos Anti-Celulíticos</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {treatments.map((treatment, index) => {
                const Icon = treatment.icon;
                return (
                  <div
                    key={index}
                    className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-teal-200 ${
                      hoveredTreatment === index ? 'scale-105 -translate-y-2' : ''
                    }`}
                    onMouseEnter={() => setHoveredTreatment(index)}
                    onMouseLeave={() => setHoveredTreatment(null)}
                  >
                    {/* Header del tratamiento */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${treatment.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">{treatment.name}</h4>
                        <p className="text-xs text-gray-500">{treatment.mechanism}</p>
                      </div>
                    </div>
                    
                    {/* Descripción */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {treatment.description}
                    </p>
                    
                    {/* Barra de intensidad */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium text-gray-500">Intensidad</span>
                        <span className="text-xs font-bold text-gray-700">{treatment.intensity}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 bg-gradient-to-r ${treatment.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${treatment.intensity}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Beneficios */}
                    <div className="space-y-2">
                      {treatment.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-teal-500 flex-shrink-0" />
                          <span className="text-xs text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Indicador de hover */}
                    <div className={`absolute top-4 right-4 transition-all duration-300 ${hoveredTreatment === index ? 'opacity-100 rotate-0' : 'opacity-0 rotate-12'}`}>
                      <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-teal-500" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Panel lateral de información */}
          <div className={`space-y-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            {/* Timeline de resultados */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-teal-100">
              <div className="flex items-center space-x-3 mb-6">
                <Timer className="w-6 h-6 text-teal-500" />
                <h4 className="text-xl font-bold text-gray-900">Timeline de Resultados</h4>
              </div>
              
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{result.week}</p>
                        <p className="text-gray-600 text-xs mt-1">{result.result}</p>
                      </div>
                    </div>
                    {index < results.length - 1 && (
                      <div className="absolute left-4 top-8 w-0.5 h-8 bg-gradient-to-b from-teal-300 to-cyan-300"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Garantía de resultados */}
            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl p-6 text-white shadow-xl">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-8 h-8 text-white" />
                <h4 className="text-xl font-bold">Garantía de Resultados</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-white fill-current flex-shrink-0" />
                  <span className="text-white/90 text-sm">Reducción visible desde la 3ª sesión</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-white fill-current flex-shrink-0" />
                  <span className="text-white/90 text-sm">Mejora de textura comprobada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-white fill-current flex-shrink-0" />
                  <span className="text-white/90 text-sm">Protocolo personalizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-white fill-current flex-shrink-0" />
                  <span className="text-white/90 text-sm">Seguimiento profesional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};