import React from 'react'
import { Award, Sparkles, Clock, DollarSign } from 'lucide-react'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Artisanat Premium',
      description: 'Un savoir-faire d\'excellence pour des finitions impeccables et durables dans chaque détail de votre intérieur.',
    },
    {
      icon: Sparkles,
      title: 'Travail Soigné et Propre',
      description: 'Nous respectons votre habitat : chantier propre, protection des surfaces et nettoyage méticuleux après intervention.',
    },
    {
      icon: Clock,
      title: 'Respect des Délais',
      description: 'Engagement ferme sur les échéances. Votre projet est livré dans les temps, sans surprise ni retard.',
    },
    {
      icon: DollarSign,
      title: 'Tarification Transparente',
      description: 'Devis détaillé et honnête sans frais cachés. Vous savez exactement ce que vous payez, dès le début.',
    },
  ]

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Pourquoi Choisir GENTI ?</h2>
          <p className="section-subtitle">
            L'excellence au service de votre intérieur. Découvrez ce qui nous distingue dans le domaine de la rénovation intérieure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
