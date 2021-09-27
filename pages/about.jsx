import BasicLayout from '../layouts/BasicLayout'
import Image from 'next/image'
import Link from 'next/link'

export default function about() {
    return (
        <BasicLayout>
            <section className="text-light-gray">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <Image width={720} height={600} className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/erik-mclean-JkjxLL53hxM-unsplash.jpg" />
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-dark-orange">Microdosing synth tattooed vexillologist</h1>
                        <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled.Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.Pour-over meditation PBR&amp; B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-dark-orange border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                        </div>
                    </div>
                </div>
            </section>
        </BasicLayout>
    )
}
