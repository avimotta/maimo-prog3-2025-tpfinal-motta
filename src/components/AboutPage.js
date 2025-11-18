"use client";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#fffeec] py-30 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        <div
          className="
            rounded-lg border-2 border-[#FF5454]
            p-8 sm:p-10
              shadow-[3px_3px_0px_0px_#FF5454]
            bg-[#fffeec]
          "
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-[#FF5454] mb-4">
            Hola, soy Avi!
          </h1>
          <p className="text-lg sm:text-xl text-[#090808] opacity-80 leading-relaxed">
            La creadora de <span className="font-semibold">JukeBox</span>.  
            Creé este proyecto porque la música es mi manera de 
            entender el mundo, y quería un espacio donde poder compartir 
            un poco el buen (y mal) gusto musical de la gente.
          </p>
        </div>

        <div
          className="
            rounded-lg border-2 border-[#090808]
            p-6 sm:p-8
            shadow-[4px_4px_0px_0px_rgba(9,8,8,1)]
            bg-[#fffeec]
          "
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#090808] mb-4">
            Sobre mí
          </h2>
          <p className="text-base sm:text-lg text-[#090808] opacity-80 leading-relaxed">
            Soy cantante, actriz, programadora en construcción y fanática de la música.
            No hay algo que me haga sentir igual. Si hay música, yo estoy ahí. Y si no hay, yo estoy cantando.
          </p>
        </div>

        <div
          className="
            rounded-lg border-2 border-[#090808]
            p-6 sm:p-8
            shadow-[4px_4px_0px_0px_rgba(9,8,8,1)]
            bg-[#fffeec]
          "
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#090808] mb-4">
            ¿Qué es JukeBox?
          </h2>
          <p className="text-base sm:text-lg text-[#090808] opacity-80 leading-relaxed">
            JukeBox es un mundo en donde donde podés guardar, rankear y 
            descubrir música.  
            Para mí, es un lugar de <span className="font-semibold">conexión</span>.
          </p>
        </div>

        <div
          className="
            rounded-lg border-2 border-[#090808]
            p-6 sm:p-8
            shadow-[4px_4px_0px_0px_rgba(9,8,8,1)]
            bg-[#fffeec]
          "
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#090808] mb-4">
            ¿Por qué lo creé?
          </h2>
          <p className="text-base sm:text-lg text-[#090808] opacity-80 leading-relaxed">
            Este proyecto nació puramente de mi amor por la música.  
            Quise mezclar mis dos mundos: lo artístico y lo tech. Así salió
            Jukebox. Idea que existe desde 2024 y que había dejado en pausa pero volvió más fuerte que nunca.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
