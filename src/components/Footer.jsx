
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const COLUMNS = [
    {
        title: 'Продукт',
        links: [
            { label: 'Фискализация чеков', href: '/#product' },
            { label: 'Сопоставление ИКПУ/МХИК', href: '/#product' },
            { label: 'Мониторинг соответствия', href: '/#product' },
            { label: 'Кабинет мерчанта', href: '/#product' },
            { label: 'Как это работает', href: '/#how-it-works' },
        ],
    },
    {
        title: 'Решения',
        links: [
            { label: 'Рестораны и кафе', href: '/#contact' },
            { label: 'Розничные магазины', href: '/#contact' },
            { label: 'Сети и франшизы', href: '/#contact' },
            { label: 'POS-вендоры', href: '/#contact' },
        ],
    },
    {
        title: 'Компания',
        links: [
            { label: 'О компании', href: '#' },
            { label: 'Партнёрам', href: 'mailto:partners@efiscal.uz' },
            { label: 'Карьера', href: 'mailto:jobs@efiscal.uz' },
            { label: 'Контакты', href: '/#contact' },
        ],
    },
    {
        title: 'Документы',
        links: [
            {
                label: 'Политика конфиденциальности',
                href: '/privacy',
                internal: true,
            },
            {
                label: 'Условия пользования',
                href: '/terms',
                internal: true,
            },
        ],
    },
]

const linkClass =
    'inline-flex items-start gap-1 text-sm text-ink-muted transition-colors hover:text-ink'

export default function Footer() {
    return (
        <footer className="border-t border-border">
            <div className="mx-auto max-w-[1180px] px-6 py-16 md:px-8 md:py-20">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8">
                    <div className="lg:col-span-2">
                        <span className="text-[15px] font-semibold tracking-tight text-ink">
                            efiscal
                        </span>

                        <p className="mt-3 max-w-[28ch] text-sm text-ink-muted">
                            Фискальная интеграция для POS-систем в Узбекистане.
                        </p>

                        <p className="mt-4 text-sm text-ink-faint">
                            Ташкент, Узбекистан,
                            Yashnabod 58-24, 100000
                        </p>
                    </div>

                    {COLUMNS.map((column) => (
                        <div key={column.title}>
                            <h3 className="text-sm font-semibold text-ink">
                                {column.title}
                            </h3>

                            <ul className="mt-4 space-y-3">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        {link.internal ? (
                                            <Link
                                                to={link.href}
                                                className={linkClass}
                                            >
                                                {link.label}
                                            </Link>
                                        ) : (
                                            <a
                                                href={link.href}
                                                target={
                                                    link.external
                                                        ? '_blank'
                                                        : undefined
                                                }
                                                rel={
                                                    link.external
                                                        ? 'noreferrer'
                                                        : undefined
                                                }
                                                className={linkClass}
                                            >
                                                {link.label}

                                                {link.external && (
                                                    <ArrowUpRight
                                                        size={12}
                                                        className="mt-0.5 shrink-0"
                                                    />
                                                )}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-14 flex flex-col gap-2 border-t border-border pt-8 text-sm text-ink-faint md:flex-row md:items-center md:justify-between">
                    <span>© 2026 efiscal · МЧЖ «efiscal»</span>
                    <span>efiscal.uz</span>
                </div>
            </div>
        </footer>
    )
}