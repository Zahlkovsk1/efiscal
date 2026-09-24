
import ApiIllustration from './ApiIllustration'

const RESPONSE = [
    { key: 'receipt_id', value: '"rcp_4821"' },
    { key: 'status', value: '"fiscalized"', confirmed: true },
    { key: 'fiscal_sign', value: '"827140931156"' },
]

const RECEIPT_LOG = [
    { title: 'Продажа, столик 4', id: 'rcp_4821' },
    { title: 'Возврат по rcp_4821', id: 'rcp_4822' },
]

export default function ApiSection() {
    return (
        <section id="api" className="border-t border-border">
            <div className="mx-auto grid max-w-[1180px] items-center gap-16 px-6 py-24 md:px-8 md:py-32 lg:grid-cols-2">

                {/* illustration + floating cards */}
                <div className="relative mx-auto w-full max-w-[460px]">
                    <ApiIllustration className="h-auto w-full" />

                    <div className="absolute right-0 top-[3%] w-[62%] rounded-xl border border-border bg-canvas/85 px-4 py-3 font-mono text-[11px] leading-6 backdrop-blur-sm sm:text-xs sm:leading-7">
                        {RESPONSE.map((line) => (
                            <div key={line.key} className="truncate">
                                <span className="text-accent-blue">"{line.key}"</span>
                                <span className="text-ink-faint">: </span>
                                <span
                                    className={
                                        line.confirmed ? 'text-confirm' : 'text-ink'
                                    }
                                >
                                    {line.value}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="absolute bottom-[3%] left-0 w-[64%] divide-y divide-border rounded-xl border border-border bg-canvas/85 backdrop-blur-sm">
                        {RECEIPT_LOG.map((entry) => (
                            <div key={entry.id} className="px-4 py-3">
                                <p className="truncate text-sm text-ink">
                                    {entry.title}
                                </p>

                                <div className="mt-1 flex items-center justify-between gap-3">
                                    <span className="truncate font-mono text-xs text-ink-faint">
                                        {entry.id}
                                    </span>

                                    <span className="flex shrink-0 items-center gap-1.5 text-xs text-confirm">
                                        <span className="h-1.5 w-1.5 rounded-full bg-confirm" />
                                        Фискализирован
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* text */}
                <div className="order-first lg:order-last lg:pl-4">
                    <h2 className="max-w-[16ch] text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                        Подключите свой POS через один API
                    </h2>

                    <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-ink-muted md:text-lg">
                        Отправляете заказ — получаете фискализированный чек с фискальным
                        признаком и QR-кодом. Продажи, возвраты, авансы и кредит — через
                        один контракт. Ключи идемпотентности, очередь на случай офлайна и
                        ежедневная сверка с ОФД уже встроены.
                    </p>

                    <div className="mt-8">
                        <a
                            href="#contact"
                            className="inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-canvas transition-opacity hover:opacity-90"
                        >
                            Запросить доступ к API
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}