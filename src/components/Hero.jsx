export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img src="/take-care.jpg" className="w-full h-full object-cover opacity-70"/>
      </div>

      <div className="relative z-10 text-center py-32 px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-green-800">
          Welcome to Natures Platter
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-red-400">
          Fresh, organic, and healthy products delivered to your door
        </p>
        <a href="/items" className="inline-block px-8 py-2.5 bg-green-600 text-white rounded-full font-semibold hover:text-red-400 hover:bg-green-700 transition" >
          Browse Items
        </a>
      </div>
    </section>
  );
}
