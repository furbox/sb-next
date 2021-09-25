import Link from 'next/link';

export default function RecoveryPasswordForm() {
    return (
        <section className="text-dark-orange body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 className="title-font font-medium text-3xl text-light-gray">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
                    <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-dark-blue text-lg font-medium title-font mb-5">Recupera tu contraseña</h2>
                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm text-dark-gray">Full Name</label>
                        <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-dark-orange focus:ring-2 focus:ring-dark-orange text-base outline-none text-dark-blue py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-dark-gray">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-dark-orange focus:ring-2 focus:ring-dark-orange text-base outline-none text-dark-blue py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button className="text-white bg-dark-orange border-0 py-2 px-8 focus:outline-none hover:bg-dark-blue rounded text-lg">Button</button>
                    <p className="text-xs text-gray-500 mt-3">Literally you probably havent heard of them jean shorts.</p>
                    <Link href="/auth/login"><a className="text-dark-orange">Login</a></Link>
                </div>
            </div>
        </section>
    )
}
