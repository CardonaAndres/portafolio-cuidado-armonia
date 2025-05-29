import { useState, useEffect } from 'react';
import { User, Zap, Thermometer, Sparkles, CheckCircle, Timer, Award, ArrowRight, Heart, Star, Shield } from 'lucide-react';

const treatments = [
    {
    title: "10 Masajes Corporales",
    subtitle: "Abdomen, espalda, laterales, glúteos y piernas",
    icon: User,
    color: "from-purple-400 to-violet-500",
    description: "Relajación profunda y liberación de tensiones en todo el cuerpo",
    benefits: ["Mejora circulación", "Reduce estrés", "Tonifica músculos"]
    },
    {
    title: "Maderoterapia",
    subtitle: "Técnica natural con elementos de madera",
    icon: Shield,
    color: "from-amber-400 to-orange-500",
    description: "Moldea tu figura utilizando instrumentos de madera especializados",
    benefits: ["Reduce celulitis", "Moldea figura", "Drena toxinas"]
    },
    {
    title: "Choques Térmicos",
    subtitle: "Terapia de contraste calor-frío",
    icon: Thermometer,
    color: "from-blue-400 to-cyan-500",
    description: "Activa la circulación mediante cambios controlados de temperatura",
    benefits: ["Activa metabolismo", "Mejora elasticidad", "Efecto reafirmante"]
    },
    {
    title: "Aparatología",
    subtitle: "Tecnología avanzada para resultados óptimos",
    icon: Zap,
    color: "from-green-400 to-emerald-500",
    description: "Equipos especializados para potenciar los tratamientos corporales",
    benefits: ["Resultados visibles", "Tratamiento profundo", "Tecnología moderna"]
    },
    {
    title: "Quemadores + Vitamina C",
    subtitle: "Potenciadores naturales de belleza",
    icon: Sparkles,
    color: "from-pink-400 to-rose-500",
    description: "Complementos que aceleran los resultados y nutren la piel",
    benefits: ["Acelera resultados", "Nutre la piel", "Antioxidante natural"]
    }
];

const processSteps = [
    "Consulta personalizada",
    "Preparación del cuerpo",
    "Masajes terapéuticos",
    "Aplicación de tratamientos",
    "Terapias complementarias",
    "Finalización y cuidados"
];

export const CorporalCompletoService = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [hoveredTreatment, setHoveredTreatment] = useState<number | null>();
  const [particlesArray, setParticlesArray] = useState<Array<any>>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Generar partículas doradas flotantes
    const generateParticles = () => {
      const particles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 3 + Math.random() * 2
      }));
      setParticlesArray(particles);
    };

    generateParticles();

    // Auto-avanzar pasos del tratamiento
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % 6);
    }, 4000);

    return () => clearInterval(stepInterval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 overflow-hidden">
      
      {/* Partículas doradas flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        {particlesArray.map((particle : any) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        
        {/* Header Premium */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Badge premium */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Award className="w-5 h-5 text-amber-600" />
            <span className="text-amber-800 font-semibold">Tratamiento Premium</span>
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
          </div>

          <h1 className="text-5xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 bg-clip-text text-transparent">
              Corporal
            </span>
            <span className="text-gray-800"> Completo</span>
          </h1>

          <div className="relative mx-auto w-40 h-2 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 rounded-full animate-pulse opacity-75"></div>
          </div>

          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            La experiencia más <span className="font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">completa y transformadora</span> 
            {' '}para renovar tu cuerpo desde adentro hacia afuera
          </p>
        </div>

        {/* Grid principal de tratamientos */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Panel de proceso interactivo */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Timer className="w-6 h-6 text-purple-500 mr-3" />
                Proceso Completo
              </h3>
              
              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`flex items-center space-x-3 p-3 rounded-2xl transition-all duration-500 ${
                      currentStep === index 
                        ? 'bg-gradient-to-r from-purple-100 to-pink-100 scale-105 shadow-lg' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentStep === index 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white scale-110' 
                        : currentStep > index 
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 text-gray-500'
                    }`}>
                      {currentStep > index ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <span className="text-sm font-bold">{index + 1}</span>
                      )}
                    </div>
                    <span className={`font-medium transition-colors ${
                      currentStep === index ? 'text-purple-700' : 'text-gray-600'
                    }`}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                <div className="flex items-center space-x-2 text-purple-700">
                  <Heart className="w-5 h-5" />
                  <span className="font-semibold">Incluye todo lo necesario</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Cada sesión está diseñada para maximizar los resultados y tu comodidad
                </p>
              </div>
            </div>
          </div>

          {/* Tratamientos detallados */}
          <div className="lg:col-span-2 space-y-6">
            {treatments.map((treatment, index) => {
              const Icon = treatment.icon;
              return (
                <div
                  key={index}
                  className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 transition-all duration-500 cursor-pointer ${
                    hoveredTreatment === index ? 'scale-105 shadow-2xl' : 'hover:shadow-xl'
                  }`}
                  onMouseEnter={() => setHoveredTreatment(index)}
                  onMouseLeave={() => setHoveredTreatment(null)}
                >
                  <div className="flex items-start space-x-6">
                    
                    {/* Icono del tratamiento */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${treatment.color} rounded-2xl flex items-center justify-center shadow-xl transform transition-transform duration-300 ${
                      hoveredTreatment === index ? 'scale-110 rotate-6' : ''
                    }`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Contenido */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-2xl font-bold text-gray-800">{treatment.title}</h4>
                          <p className="text-gray-500 font-medium">{treatment.subtitle}</p>
                        </div>
                        <ArrowRight className={`w-6 h-6 text-purple-400 transition-transform duration-300 ${
                          hoveredTreatment === index ? 'translate-x-2' : ''
                        }`} />
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-6">
                        {treatment.description}
                      </p>

                      {/* Beneficios */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {treatment.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 bg-gradient-to-r ${treatment.color} rounded-full`}></div>
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sección de resultados esperados */}
        <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-amber-100 rounded-3xl p-12 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Resultados que Transforman</h2>
            <p className="text-gray-600 text-lg">Lo que puedes esperar de tu tratamiento completo</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Semana 1-2", desc: "Relajación profunda y mejor circulación", progress: 25 },
              { title: "Semana 3-4", desc: "Reducción visible de medidas", progress: 50 },
              { title: "Semana 5-6", desc: "Piel más firme y tonificada", progress: 75 },
              { title: "Semana 7-8", desc: "Transformación completa lograda", progress: 100 }
            ].map((result, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
                  <div 
                    className={`absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-1000`}
                    style={{ 
                      clipPath: `polygon(50% 50%, 50% 0%, ${50 + (result.progress / 100) * 50}% 0%, ${50 + (result.progress / 100) * 50}% 100%, 50% 100%)`,
                      transform: `rotate(${(result.progress / 100) * 360}deg)`
                    }}
                  ></div>
                  <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-purple-600">{result.progress}%</span>
                  </div>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{result.title}</h4>
                <p className="text-sm text-gray-600">{result.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};