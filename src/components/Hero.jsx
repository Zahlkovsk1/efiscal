import FiscalDemo from './FiscalDemo'

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-28 md:pt-40 md:pb-36">

            {/* glow orb */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[820px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-40 blur-[120px]"
                style={{
                    background: 'radial-gradient(circle, var(--color-accent-blue) 0%, var(--color-accent-violet) 45%, transparent 70%)',
                }}
            />


            {/* content */}
            <div className="relative mx-auto max-w-[1180px] px-6 text-center md:px-8">
                <h1 className="mx-auto max-w-[17ch] text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl">
                    Фискализация, которая просто работает
                </h1>

                <p className="mx-auto mt-5 max-w-[46ch] text-base text-ink-muted md:text-lg">
                    Подключаем ваш POS к зарегистрированному ОФД — каждая продажа
                    становится легальным чеком в реальном времени.
                </p>

                <div className="mt-8 flex justify-center">
                    <a
                        href="#contact"
                        className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-canvas transition-opacity hover:opacity-90"
                    >
                        Связаться с нами
                    </a>
                </div>
                <FiscalDemo />
            </div>
        </section>
    );
}

