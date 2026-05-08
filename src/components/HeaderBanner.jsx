function HeaderBanner() {
  return (
    <header className="relative diagonal-stripes bg-brand-green overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 md:py-32">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-24 md:h-32 w-auto mb-8 drop-shadow-md"
        />
        <h1 className="font-display text-5xl md:text-7xl font-black leading-tight">
          <span className="block text-brand-dark">Decide tu futuro:</span>
          <span className="block text-brand-orange">Estás a tiempo</span>
        </h1>
        <p className="mt-6 font-body text-lg md:text-xl text-brand-dark max-w-xl">
          Conciencia sobre el consumo de drogas en México
        </p>
      </div>
    </header>
  )
}

export default HeaderBanner
