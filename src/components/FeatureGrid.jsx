const FEATURES = [
    {
        title: 'Фискализация в реальном времени',
        text: 'Каждый заказ POS превращается в легальный чек через ОФД без задержек.',
    },
    {
        title: 'Сопоставление ИКПУ/МХИК',
        text: 'Каждая позиция меню размечена нужными кодами — сделано за вас, один раз.',
    },
    {
        title: 'Онбординг и ЦТО',
        text: 'Регистрация кассы, настройка фискального модуля, связь с ЦТО.',
    },
    {
        title: 'Поддержка на узбекском и русском',
        text: 'Локальная команда в Ташкенте, а не тикет в другой часовой пояс.',
    },
    {
        title: 'Мониторинг соответствия',
        text: 'Оповещения об офлайне кассы, продление модуля, статус в реальном времени.',
    },
    {
        title: 'Отчётность, готовая к проверке',
        text: 'Все чеки и статусы касс — в одном месте, доступно для любой проверки.',
    },
]

export default function FeatureGrid() {
    return (
        <section id="product" className="border-t border-border">
            <div className="mx-auto max-w-[1180px] px-6 py-24 md:px-8 md:py-32">

                <h2 className="max-w-[24ch] text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                    Всё, что нужно для соответствия — уже внутри
                </h2>

                <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                    {FEATURES.map((feature) => (
                        <div key={feature.title} className="bg-surface p-6">
                            <h3 className="text-base font-semibold text-ink">{feature.title}</h3>
                            <p className="mt-2 text-sm text-ink-muted">{feature.text}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}