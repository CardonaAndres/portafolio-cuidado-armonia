import Logo from '@/modules/app/assets/imgs/LogoWEBP.webp';
import { useState, useEffect } from 'react';
import { Heart, Shield, Sparkles, Star } from 'lucide-react';

const floatingElements = [
    { icon: Heart, delay: 0, duration: 3 },
    { icon: Shield, delay: 1, duration: 4 },
    { icon: Sparkles, delay: 2, duration: 3.5 },
];

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e : any) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Fondo con gradientes dinámicos */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #D8B3E8 0%, transparent 50%),
            radial-gradient(circle at ${100 - mousePosition.x}% ${mousePosition.y}%, #A8D8E8 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, #E8C4D8 0%, transparent 70%)
          `
        }}
      />

      {/* Elementos flotantes animados */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element, index) => {
          const Icon = element.icon;
          return (
            <div
              key={index}
              className={`absolute animate-bounce opacity-20`}
              style={{
                left: `${20 + index * 30}%`,
                top: `${30 + index * 20}%`,
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`,
              }}
            >
              <Icon size={32} className="text-purple-400" />
            </div>
          );
        })}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex items-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Contenido de texto */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              {/* Badge superior */}
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-purple-100">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-gray-700">Servicios de Excelencia</span>
              </div>

              {/* Título principal */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span 
                    className="bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 bg-clip-text text-transparent"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #C49BD8 0%, #A8D8E8 50%, #E8C4D8 100%)'
                    }}
                  >
                    Cuidado <span className="text-gray-900">& Armonía</span>
                  </span>
                </h1>
                
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              </div>

              {/* Subtítulo mejorado */}
              <div className="space-y-3">
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  Te damos la <span className="font-bold text-purple-600">bienvenida</span> a nuestro
                </p>
                <p className="text-2xl lg:text-3xl font-semibold">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                    Portafolio de Servicios
                  </span>
                </p>
                <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
                  Descubre cómo transformamos espacios y vidas a través de soluciones integrales de 
                  <span className="font-medium text-purple-600"> bienestar y cuidado personalizado</span>
                </p>
              </div>

              {/* Estadísticas */}
              <div className="flex space-x-8 pt-8">
                {[
                  { number: '300+', label: 'Clientes Satisfechos' },
                  { number: '2+', label: 'Años de Experiencia' },
                  { number: '98%', label: 'Satisfacción' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group cursor-default">
                    <div className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Elemento visual derecho */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              
              {/* Círculo principal con gradiente */}
              <div className="relative w-96 h-96 mx-auto">
                <div 
                  className="absolute inset-0 rounded-full shadow-2xl"
                  style={{
                    background: `
                      conic-gradient(from 0deg, 
                        #D8B3E8 0%, 
                        #A8D8E8 120%, 
                        #E8C4D8 240%, 
                        #D8B3E8 360%
                      )
                    `
                  }}
                ></div>
                
                {/* Círculo interior */}
                <div className="absolute inset-4 bg-white/90 backdrop-blur-sm rounded-full shadow-inner flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <img 
                      src={Logo} 
                      alt="Logo de la empresa" 
                      className='rounded-[50%] hover:scale-105 transition-transform duration-300' 
                    />
                  </div>
                </div>

                {/* Elementos orbitales */}
                {[
                  { icon: Shield, position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2', color: 'from-blue-400 to-cyan-400' },
                  { icon: Sparkles, position: 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2', color: 'from-pink-400 to-rose-400' },
                  { icon: Heart, position: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2', color: 'from-purple-400 to-violet-400' },
                ].map((element, index) => {
                  const Icon = element.icon;
                  return (
                    <div
                      key={index}
                      className={`absolute ${element.position} w-12 h-12 bg-gradient-to-br ${element.color} rounded-xl flex items-center justify-center shadow-lg animate-pulse hover:scale-110 transition-transform duration-300 cursor-pointer`}
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  );
                })}
              </div>

              {/* Elementos decorativos adicionales */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll mejorado */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
        
      >
        <div className="w-8 h-12 border-2 border-purple-400 rounded-full flex justify-center group-hover:border-purple-600 transition-colors duration-300">
          <div className="w-1.5 h-4 bg-purple-400 rounded-full mt-2 animate-pulse group-hover:bg-purple-600 transition-colors duration-300"></div>
        </div>
        <p className="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          Ver servicios
        </p>
      </div>
    </div>
  );
};