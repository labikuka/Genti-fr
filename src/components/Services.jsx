import React from 'react'
import { Home, Paintbrush, Layers } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Rénovation Intérieure Complète',
      description: 'Transformation complète de vos espaces intérieurs : murs, sols, plafonds, et agencement. De la conception à la réalisation, nous redonnons vie à votre appartement ou maison avec des solutions sur mesure.',
      features: [
        'Réaménagement d\'espaces',
        'Réparation et préparation des murs',
        'Installation de revêtements de sol',
        'Rénovation de plafonds'
      ]
    },
    {
      icon: Paintbrush,
      title: 'Peinture & Finitions de Précision',
      description: 'Expertise en peinture de finition pour les éléments délicats de votre intérieur. Nous traitons avec soin vos portes, huisseries, rampes d\'escalier, balustrades et menuiseries pour un résultat impeccable.',
      features: [
        'Peinture de portes et huisseries',
        'Finition des rampes d\'escalier et balustrades',
        'Peinture de cadres de fenêtres',
        'Restauration de garde-corps'
      ]
    },
    {
      icon: Layers,
      title: 'Aménagement & Revêtements',
      description: 'Préparation et mise en œuvre de tous types de revêtements intérieurs. Du ragréage à la pose de carrelage, en passant par les travaux de maçonnerie et plâtrerie intérieure.',
      features: [
        'Préparation des surfaces (ragréage, lissage)',
        'Pose de carrelage intérieur',
        'Travaux de plâtrerie intérieure',
        'Maçonnerie de finition'
      ]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Nos Services d'Intérieur</h2>
          <p className="section-subtitle">
            Des solutions complètes pour transformer et embellir vos espaces intérieurs avec un savoir-faire artisanal d'exception.
          </p>
        </div>

        {/* Interior-only notice banner */}
        <div className="max-w-3xl mx-auto mb-12 bg-amber-50 border-2 border-amber-200 rounded-xl p-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-2xl">⚠️</span>
            <h3 className="text-lg font-bold text-amber-800">Spécialiste Exclusif de la Rénovation Intérieure</h3>
          </div>
          <p className="text-amber-700">
            Travaux strictement intérieurs - pas de travaux d'extérieur ou de jardin
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-primary-600 mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
