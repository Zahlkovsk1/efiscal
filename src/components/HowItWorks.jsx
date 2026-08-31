const STEPS = [
    {
        number: '01',
        title: 'Заказ',
        text: 'Официант принимает заказ в POS-системе — как обычно, без нового интерфейса.',
    },
    {
        number: '02',
        title: 'Сопоставление',
        text: 'Каждая позиция меню автоматически находит свой код ИКПУ.',
    },
    {
        number: '03',
        title: 'Фискализация',
        text: 'Чек уходит в зарегистрированный ОФД и получает фискальный признак.',
    },
    {
        number: '04',
        title: 'Подтверждение',
        text: 'Кассир и клиент видят готовый легальный чек — в реальном времени.',
    },
]

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="border-t border-border">
            <div className="mx-auto max-w-[1180px] px-6 py-24 md:px-8 md:py-32">

                <h2 className="max-w-[24ch] text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                    Как это работает
                </h2>

                <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {STEPS.map((step) => (
                        <div key={step.number} className="border-t border-border pt-5">
                            <span className="text-sm font-medium text-ink-faint">{step.number}</span>
                            <h3 className="mt-3 text-base font-semibold text-ink">{step.title}</h3>
                            <p className="mt-2 text-sm text-ink-muted">{step.text}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}