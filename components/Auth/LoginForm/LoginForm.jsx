import React from 'react'
import Link from 'next/link'

export default function LoginForm({ showRegisterForm }) {
    return (
        <>
            <section className="text-dark-gray bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-dark-blue">Inicia Sesión</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Bienvenido de vuelta.</p>
                    </div>
                    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                        <div className="relative flex-grow w-full">
                            <label htmlFor="full-name" className="leading-7 text-sm text-dark-gray">Full Name</label>
                            <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-dark-orange focus:bg-transparent focus:ring-2 focus:ring-dark-orange text-base outline-none textdark-gray py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative flex-grow w-full">
                            <label htmlFor="email" className="leading-7 text-sm text-dark-gray">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-dark-orange focus:bg-transparent focus:ring-2 focus:ring-dark-orange text-base outline-none textdark-gray py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button className="text-white bg-dark-orange border-0 py-2 px-8 focus:outline-none hover:bg-dark-blue rounded text-lg">Ingresar</button>
                    </div>
                </div>
            </section>

            <section className="text-dark-gray bg-gray-100 rounded-lg mt-4">
                <div className="container px-20 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap -m-4 justify-between">
                        <div className="p-4 lg:w-1/2 md:w-full">
                            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-red-100 text-dark-orange flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-dark-blue text-lg title-font font-medium mb-3">Registrarse</h2>
                                    <p className="leading-relaxed text-base">Crea una cuenta con nosotros y comienza a utilizar nuestros servicios.</p>
                                    <Link href='/auth/register'>
                                        <a className="mt-3 text-dark-orange inline-flex items-center">Registrarse
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2 md:w-full">
                            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-red-100 text-dark-orange flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-dark-blue text-lg title-font font-medium mb-3">Recuperar Contraseña</h2>
                                    <p className="leading-relaxed text-base">Recupera tu contraseña, nosotros te la enviamos a tu email.</p>
                                    <Link href='/auth/recovery-password'>
                                        <a className="mt-3 text-dark-orange inline-flex items-center">Recuperar
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
