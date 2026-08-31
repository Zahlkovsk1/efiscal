
export default function CTA() {
    return (
        <section id="contact" className="border-t border-border">
            <div className="mx-auto max-w-[1180px] px-6 py-24 text-center md:px-8 md:py-32">
                <h2 className="mx-auto max-w-[20ch] text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                    Подключим фискализацию к вашему POS
                </h2>

                <p className="mx-auto mt-4 max-w-[42ch] text-base text-ink-muted md:text-lg">
                    Расскажите, какой POS вы используете и сколько у вас точек — ответим в течение дня.
                </p>

                <div className="mt-8 flex justify-center">
                    <a
                        href="mailto:hello@efiscal.uz"
                        className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-canvas transition-opacity hover:opacity-90"
                    >
                        Написать нам
                    </a>
                </div>
            </div>
        </section>
    );
}
