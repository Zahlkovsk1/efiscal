const PARTNERS = ['iPratico', 'ОФД-провайдер', 'ЦТО-партнёр']

export default function Partners() {
    return (
        <section id="partners" className="border-t border-border">
            <div className="mx-auto max-w-[1180px] px-6 py-16 md:px-8">

                <p className="text-center text-sm text-ink-faint">Уже работаем с</p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
                    {PARTNERS.map((name) => (
                        <span key={name} className="text-lg font-semibold tracking-tight text-ink-muted">
                            {name}
                        </span>
                    ))}
                </div>

            </div>
        </section>
    )
}