import Nav from './Nav'
import Footer from './Footer'

export default function LegalLayout({ title, updated, children }) {
    return (
        <div>
            <Nav />
            <main>
                <div className="mx-auto max-w-[720px] px-6 py-24 md:px-8 md:py-32">
                    <h1 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                        {title}
                    </h1>
                    <p className="mt-3 text-sm text-ink-faint">
                        Дата последнего обновления: {updated}
                    </p>
                    <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-ink-muted [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-ink [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
                        {children}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}