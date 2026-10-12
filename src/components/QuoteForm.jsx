import React, { useState } from 'react'

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    location: '',
    projectType: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Merci pour votre demande ! Nous vous contacterons dans les 24h.')
    setFormData({ name: '', contact: '', location: '', projectType: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="quote-form" className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Demande de Devis en Ligne</h2>
          <p className="section-subtitle">
            Obtenez votre devis gratuit en 24h. Remplissez le formulaire ci-dessous et notre équipe vous recontactera rapidement.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              {/* Contact (Phone/Email) */}
              <div>
                <label htmlFor="contact" className="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone ou Email *
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  required
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="06 12 34 56 78 ou email@exemple.com"
                />
              </div>

              {/* Location in France */}
              <div>
                <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                  Ville en France *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Paris, Lyon, Marseille..."
                />
              </div>

              {/* Type of interior project */}
              <div>
                <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Type de projet intérieur *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white"
                >
                  <option value="">Sélectionnez un type de projet</option>
                  <option value="peinture-portes">Peinture de portes et huisseries</option>
                  <option value="rampes-escalier">Finition de rampes d'escalier</option>
                  <option value="renovation-complete">Rénovation intérieure complète</option>
                  <option value="revetements">Pose de revêtements intérieurs</option>
                  <option value="autre">Autre projet intérieur</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2"
              >
                Obtenir mon devis gratuit en 24h
              </button>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Réponse sous 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Devis gratuit</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuoteForm
