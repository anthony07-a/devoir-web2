function App() {
  

  return (
   <div className="min-h-screen bg-white font-sans">
      {}
      <header className="bg-[#001f4d] text-white">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <div className="text-3xl font-bold">HEI</div>
          <nav className="flex gap-6 text-sm uppercase font-semibold">
            <a href="#" className="text-yellow-400">Accueil</a>
            <a href="#">Actualités</a>
            <a href="#">Bourse d'études</a>
            <a href="#">Inscription</a>
            <a
              href="#"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
            >
              Intranet
            </a>
          </nav>
        </div>
      </header>

      {}
      <section className="relative bg-cover bg-center" style={{ backgroundImage: 'url("/hei.png")' }}>
        <div className="bg-black bg-opacity-50 h-full w-full absolute top-0 left-0" />
        <div className="relative container mx-auto px-6 py-20 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Haute École d'Informatique</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-medium">
            « L’éducation est l’arme la plus puissante pour changer le monde » selon Nelson Mandela. « L’éducation dans l’informatique est une arme très puissante pour lutter contre la pauvreté à Madagascar » selon HEI. C’est notre mission.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="#"
              className="bg-white text-black font-semibold px-6 py-3 rounded shadow hover:bg-gray-100"
            >
              Inscrivez-vous ici
            </a>
            <a
              href="#"
              className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded shadow hover:bg-yellow-600"
            >
              Emploi du temps
            </a>
            <a
              href="#"
              className="bg-blue-900 text-white font-semibold px-6 py-3 rounded shadow hover:bg-blue-800"
            >
              Programme pédagogique
            </a>
          </div>
        </div>
      </section>
    </div>   
    );
}

export default App
