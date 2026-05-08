function VideoSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="font-display text-4xl font-bold text-brand-dark mb-8">
        Video Informativo
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/0WaYLWDPMB0"
            title="Pepita 'Nuggets' — Animación sobre los efectos de las drogas"
            className="w-full h-full"
            allowFullScreen
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  )
}

export default VideoSection
