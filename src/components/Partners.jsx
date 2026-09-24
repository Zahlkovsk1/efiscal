import ipraticoLogo from '../assets/logos/ipratico.svg'
import regosLogo from '../assets/logos/regos.png'
import ofdLogo from '../assets/logos/ofd.png'


const PARTNERS = [
    {
        name: 'iPratico',
        logo: ipraticoLogo,
        url: 'https://www.ipratico.com',
        invert: true,
    },
    {
        name: 'Regos',
        logo: regosLogo,
        url: 'https://regos.uz/ru',
    },
    {
        name: 'ОФД',
        logo: ofdLogo,
        url: 'https://ofd.uz/ru',
    },
]

export default function Partners() {
    return (
        <section id="partners" className="border-t border-border">
            <div className="mx-auto max-w-[1180px] px-6 py-16 md:px-8">
                <p className="text-center text-sm text-ink-faint">
                    Уже работаем с
                </p>

                <div className="mt-10 flex flex-wrap items-start justify-center gap-x-16 gap-y-10">
                    {PARTNERS.map((partner) => (
                        <a
                            key={partner.name}
                            href={partner.url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex flex-col items-center gap-3"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className={`h-11 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 ${partner.invert ? 'invert' : ''
                                    }`}
                            />

                            <span className="text-xs text-ink-faint">
                                {partner.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}