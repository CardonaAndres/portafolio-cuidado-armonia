import React, { useState, useEffect } from 'react';
import { Waves, Flower2, Droplets, Heart, Sparkles, Leaf, CircleDot } from 'lucide-react';

const services = [
    {
      title: "Hidratación Facial",
      description: "Tratamiento profundo que devuelve la luminosidad natural a tu piel",
      icon: Droplets,
      color: "from-blue-300 to-cyan-300",
      benefits: ["Piel radiante", "Hidratación profunda", "Antienvejecimiento"]
    },
    {
      title: "Exfoliación de Pies",
      description: "Renovación completa para pies suaves y saludables",
      icon: Sparkles,
      color: "from-pink-300 to-rose-300",
      benefits: ["Pies suaves", "Eliminación de callosidades", "Relajación total"]
    },
    {
      title: "Masaje de Relajación",
      description: "Libera tensiones y encuentra tu equilibrio interior",
      icon: Heart,
      color: "from-purple-300 to-violet-300",
      benefits: ["Reduce estrés", "Mejora circulación", "Bienestar mental"]
    },
    {
      title: "Piedras Volcánicas",
      description: "Terapia ancestral con calor terapéutico y energía natural",
      icon: CircleDot,
      color: "from-orange-300 to-amber-300",
      benefits: ["Calor terapéutico", "Relajación muscular", "Equilibrio energético"]
    }
];

export const DiaDeSpaService = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [ripples, setRipples] = useState<Array<any>>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Efecto de ondas automáticas
    const interval = setInterval(() => {
        setRipples(
            prev => [...prev, { id: Date.now(), x: Math.random() * 100, y: Math.random() * 100 }]
        );
    }, 3000);

    // Limpiar ondas viejas
    const cleanupInterval = setInterval(() => {
      setRipples(prev => prev.slice(-3));
    }, 6000);

    return () => {
      clearInterval(interval);
      clearInterval(cleanupInterval);
    };
  }, []);

  const createRipple = (e : any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setRipples((prev) => [...prev, { id: Date.now(), x, y }]);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      
      {/* Fondo con ondas animadas */}
      <div className="absolute inset-0 opacity-30">
        {ripples.map((ripple : any) => (
          <div
            key={ripple.id}
            className="absolute w-32 h-32 border-2 border-blue-200 rounded-full animate-ping"
            style={{
              left: `${ripple.x}%`,
              top: `${ripple.y}%`,
              animationDuration: '4s',
            }}
          />
        ))}
      </div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        <Leaf className="absolute top-20 left-10 w-8 h-8 text-green-300 opacity-40 animate-pulse" />
        <Flower2 className="absolute top-32 right-20 w-6 h-6 text-pink-300 opacity-50 animate-bounce" style={{ animationDelay: '1s' }} />
        <Waves className="absolute bottom-32 left-16 w-10 h-10 text-blue-300 opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        
        {/* Header con animación de entrada */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Logo y badge */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-200 via-blue-200 to-pink-200 rounded-full flex items-center justify-center shadow-xl">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Waves className="w-8 h-8 text-blue-400" />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full p-2">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-6xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Día de
            </span>
            <span className="text-gray-800"> SPA</span>
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Sumérgete en una experiencia de <span className="font-semibold text-purple-600">relajación total</span> 
            {' '}donde cada tratamiento está diseñado para renovar tu cuerpo y alma
          </p>
        </div>

        {/* Grid de servicios interactivo */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* Panel principal interactivo */}
          <div 
            className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
            onClick={createRipple}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-purple-100/50 to-pink-100/50"></div>
            
            <div className="relative z-10 p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${services[activeService].color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    {React.createElement(services[activeService].icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{services[activeService].title}</h3>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {services[activeService].description}
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="font-semibold text-gray-800 flex items-center">
                  <Heart className="w-4 h-4 text-pink-400 mr-2" />
                  Beneficios Principales
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {services[activeService].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Selector de servicios */}
          <div className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeService === index 
                      ? 'bg-white shadow-xl scale-105 border-2 border-purple-200' 
                      : 'bg-white/60 hover:bg-white/80 hover:shadow-lg'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-md`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{service.title}</h4>
                    </div>
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeService === index ? 'bg-purple-400' : 'bg-gray-300'
                    }`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experiencia completa */}
        <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 rounded-3xl p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Experiencia Completa</h2>
            <p className="text-gray-600">Tu día perfecto incluye todo lo que necesitas para desconectar</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Snack Saludable", desc: "Frutas frescas y bebidas naturales", icon: Heart },
              { title: "Ambiente Zen", desc: "Música relajante y aromaterapia", icon: Flower2 },
              { title: "Decoración Especial", desc: "Espacio personalizado para ti", icon: Sparkles }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-300 to-pink-300 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};