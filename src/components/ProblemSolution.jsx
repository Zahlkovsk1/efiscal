export default function ProblemSolution() {
    return (
        <section className="border-t border-border">
            <div className="mx-auto grid max-w-[1180px] gap-12 px-6 py-24 md:grid-cols-2 md:gap-16 md:px-8 md:py-32">

                <div>
                    <p className="text-sm font-medium text-ink-faint">Проблема</p>
                    <p className="mt-3 max-w-[38ch] text-lg text-ink-muted md:text-xl">
                        Каждая касса в Узбекистане обязана фискализировать чек через ОФД.
                        На практике это регистрация кассы, сопоставление каждой позиции
                        меню с кодом ИКПУ и постоянный контроль, что модуль кассы в сети.
                    </p>
                </div>

                <div>
                    <p className="text-sm font-medium text-ink-faint">Решение</p>
                    <p className="mt-3 max-w-[38ch] text-lg text-ink md:text-xl">
                        efiscal берёт это на себя: подключаем POS к зарегистрированному
                        провайдеру виртуальной кассы, сопоставляем меню с ИКПУ/МХИК и
                        следим за статусом кассы — вы получаете готовую интеграцию.
                    </p>
                </div>

            </div>
        </section>
    )
}