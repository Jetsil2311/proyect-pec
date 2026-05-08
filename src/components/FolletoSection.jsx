function FolletoSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="font-display text-4xl font-bold text-brand-dark mb-8">
        Folleto
      </h2>
      <div className="bg-brand-card rounded-2xl shadow-lg p-6">
        <embed
          src="/folleto.pdf"
          type="application/pdf"
          className="w-full h-[600px] rounded-lg"
        />
        <p className="mt-4 font-body text-sm text-gray-500 text-center">
          Si el folleto no carga, actualiza la página.
        </p>
      </div>
    </section>
  )
}

export default FolletoSection
