import React from 'react'
import { Phone, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="pt-20 relative bg-gradient-to-br from-primary-50 to-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
          alt="Rénovation intérieure"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transformez Votre Intérieur avec{' '}
            <span className="text-primary-600">Excellence et Précision</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Expert en rénovation intérieure complète : peinture de finition pour portes et rampes d'escalier, 
            rénovation complète de vos espaces de vie.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#quote-form" className="btn-primary text-lg flex items-center gap-2 w-full sm:w-auto justify-center">
              Obtenir mon devis gratuit en 24h
              <ArrowRight size={20} />
            </a>
            <a href="tel:+33123456789" className="btn-secondary text-lg flex items-center gap-2 w-full sm:w-auto justify-center">
              <Phone size={20} />
              Appelez-nous
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Devis gratuit sous 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Travaux strictement intérieurs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Intervention sur toute la France</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
