const ClientLogos = () => {
  const logos = [
    { name: "BrandOne" },
    { name: "NovaCorp" },
    { name: "Skyline" },
    { name: "PulseHealth" },
    { name: "EcoMart" },
    { name: "FinEdge" },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-sm uppercase tracking-widest text-gray-500">Trusted by ambitious brands</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {logos.map((logo) => (
            <div key={logo.name} className="h-10 flex items-center justify-center rounded-lg bg-gray-50 border border-gray-100 neon-card">
              <span className="text-gray-500 text-sm font-semibold">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
