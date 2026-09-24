const LINKS = [
    { href: '/#product', label: 'Продукт' },
    { href: '/#how-it-works', label: 'Как это работает' },
    { href: '/#api', label: 'API' },
    { href: '/#partners', label: 'Партнёры' },
]

export default function Nav() {
    return (
        <header className="sticky top-0 z-50 border-b border-border/60 bg-canvas/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-4 md:px-8">

                <a href="#top" className="text-[15px] font-semibold tracking-tight text-ink">
                    efiscal
                </a>

                <nav className="hidden items-center gap-8 text-sm text-ink-muted md:flex">
                    {LINKS.map((link) => (
                        <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
                            {link.label}
                        </a>
                    ))}
                </nav>

                <a href="#contact" className="rounded-full border border-border px-4 py-2 text-sm text-ink transition-colors hover:border-ink-muted">
                    Связаться
                </a>

            </div>
        </header>
    )
}