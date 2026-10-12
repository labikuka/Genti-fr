import React from 'react'

const BeforeAfter = () => {
  const projects = [
    {
      title: 'Rénovation de Porte',
      description: 'Restauration complète d\'une porte intérieure avec peinture de finition haute qualité',
      beforeImage: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&q=80',
      afterImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80',
    },
    {
      title: 'Rampes d\'Escalier',
      description: 'Finition et peinture de rampes d\'escalier pour un aspect moderne et élégant',
      beforeImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=80',
      afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80',
    },
    {
      title: 'Transformation de Pièce',
      description: 'Rénovation complète d\'un salon : murs, sols et agencement',
      beforeImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80',
      afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80',
    },
    {
      title: 'Peinture de Huisseries',
      description: 'Peinture précise des cadres de fenêtres et huisseries pour un fini impeccable',
      beforeImage: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=400&q=80',
      afterImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80',
    },
    {
      title: 'Balustrade Restaurée',
      description: 'Restauration et finition d\'une balustrade intérieure en bois',
      beforeImage: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&q=80',
      afterImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&q=80',
    },
    {
      title: 'Rénovation de Cuisine',
      description: 'Transformation complète d\'une cuisine avec revêtements et peinture',
      beforeImage: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&q=80',
      afterImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80',
    },
  ]

  return (
    <section id="before-after" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Nos Réalisations</h2>
          <p className="section-subtitle">
            Découvrez la transformation de nos projets de rénovation intérieure. Avant et après, le résultat parle de lui-même.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <div className="grid grid-cols-2">
                {/* Before */}
                <div className="relative">
                  <img
                    src={project.beforeImage}
                    alt="Avant"
                    className="aspect-square w-full object-cover"
                  />
                  <span className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Avant
                  </span>
                </div>
                {/* After */}
                <div className="relative">
                  <img
                    src={project.afterImage}
                    alt="Après"
                    className="aspect-square w-full object-cover"
                  />
                  <span className="absolute bottom-3 right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Après
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">
            Ces images sont des illustrations. Contactez-nous pour voir nos réalisations réelles.
          </p>
          <a href="#quote-form" className="btn-primary inline-block">
            Voir Votre Projet Transformé
          </a>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter
