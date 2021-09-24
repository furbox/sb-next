import Image from 'next/image'
import BasicLayout from '../layouts/BasicLayout';

export default function Home() {
  return (
    <BasicLayout>
      <section className="text-light-gray body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-dark-orange tracking-widest font-medium title-font mb-1">SOCIAL BUSINESS</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-50">Mejora tu negocio con otros negocios</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Buscamos solventar las necesidades de los negocios, la manera correcta es encontrar otros negocios que puedan solventas necesidades a otros negocios, en este sitio encontraras el negocio indicado para solventar tu necesidad o que alguna empresa necesite de tus servicios.</p>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-dark-orange border-opacity-60">
              <h2 className="text-lg sm:text-xl text-light-gray font-medium title-font mb-2">Emprendedores</h2>
              <p className="leading-relaxed text-base mb-4">Aquí podrás crecer, ya sea buscando o dándote a conocer ofreciendo los servicios que tu empresa tiene para dar.</p>
              <a className="text-dark-orange inline-flex items-center">Más
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-dark-orange border-opacity-60">
              <h2 className="text-lg sm:text-xl text-light-gray font-medium title-font mb-2">Buscar</h2>
              <p className="leading-relaxed text-base mb-4">Encuentra la empresa que pueda satisfacer las necesidades de la tuya y comienza a crecer.</p>
              <a className="text-dark-orange inline-flex items-center">Más
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-dark-orange border-opacity-60">
              <h2 className="text-lg sm:text-xl text-light-gray font-medium title-font mb-2">Brinda Servicios</h2>
              <p className="leading-relaxed text-base mb-4">Crece con tu negocio y brinda acá tus servicios, varias empresas deben estar buscando una como la tuya.</p>
              <a className="text-dark-orange inline-flex items-center">Más
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-dark-orange border-opacity-60">
              <h2 className="text-lg sm:text-xl text-light-gray font-medium title-font mb-2">Nuestros Servicios</h2>
              <p className="leading-relaxed text-base mb-4">Podrás encontrar en este sitio diversos servicios como Marketing y Desarrollo de Software entre otros.</p>
              <a className="text-dark-orange inline-flex items-center">Más
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-dark-orange border-0 py-2 px-8 focus:outline-none hover:bg-light-gray hover:text-dark-orange rounded text-lg">Registrarse</button>
        </div>
      </section>
    </BasicLayout>
  )
}
