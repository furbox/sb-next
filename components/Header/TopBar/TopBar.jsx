import Image from 'next/image'
import Link from 'next/link'

export default function TopBar() {

    return (
        <header className="text-light-gray body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    <a className="mr-5 hover:text-dark-orange">Contacto</a>
                    <a className="mr-5 hover:text-dark-orange">Nosotros</a>
                    <a className="mr-5 hover:text-dark-orange">Servicios</a>
                    <a className="hover:text-dark-orange">FAQs</a>
                </nav>
                <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-dark-orange lg:items-center lg:justify-center mb-4 md:mb-0">
                    <Logo />
                </a>
                <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                    <Link href="/auth/login">
                        <a>
                            <button className="inline-flex text-dark-blue hover:text-light-gray items-center bg-light-gray border-0 py-1 px-3 focus:outline-none hover:bg-dark-orange rounded text-base mt-4 md:mt-0">Login
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export function Logo() {
    return (
        <Link href="/">
            <a><Image src="/sb/logo/letras-naranja.png" alt="Social Business" width={200} height={107} /></a>
        </Link>
    )
}