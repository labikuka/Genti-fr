import React from 'react'
import { Phone, Mail, MapPin, Clock, Shield, CheckCircle } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">GENTI</h3>
            <p className="text-gray-400 mb-4">
              Expert en rénovation intérieure complète en France. Peinture, finitions et aménagement d'espaces avec un savoir-faire artisanal d'exception.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="text-primary-400">⚠️</span>
              <span>Travaux strictement intérieurs</span>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Téléphone</p>
                  <p className="font-medium">01 23 45 67 89</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="font-medium">contact@genti-renovation.fr</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Zone d'intervention</p>
                  <p className="font-medium">Toute la France</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Rénovation intérieure complète</li>
              <li className="hover:text-white transition-colors cursor-pointer">Peinture de finition</li>
              <li className="hover:text-white transition-colors cursor-pointer">Portes et huisseries</li>
              <li className="hover:text-white transition-colors cursor-pointer">Rampes d'escalier</li>
              <li className="hover:text-white transition-colors cursor-pointer">Revêtements intérieurs</li>
              <li className="hover:text-white transition-colors cursor-pointer">Plâtrerie intérieure</li>
            </ul>
          </div>

          {/* Operating Hours & Trust */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horaires</h4>
            <ul className="space-y-2 text-gray-400 mb-6">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Lundi - Vendredi: 8h - 18h</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Samedi: Sur rendez-vous</span>
              </li>
            </ul>

            <h4 className="text-lg font-semibold mb-4">Nos Engagements</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Devis gratuit sous 24h</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Shield className="w-4 h-4 text-primary-400" />
                <span>Garantie de satisfaction</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Artisans qualifiés</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 GENTI - Rénovation Intérieure. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
