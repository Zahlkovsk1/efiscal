import { useState } from 'react'
import { Loader2, CircleCheck } from 'lucide-react'

const initialForm = {
    name: '',
    company: '',
    email: '',
    message: '',
}

const fieldClass =
    'w-full rounded-lg border border-border bg-canvas px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-accent-blue'

export default function ContactForm() {
    const [form, setForm] = useState(initialForm)
    const [status, setStatus] = useState('idle') // idle | submitting | success | error

    function handleChange(e) {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setStatus('submitting')

        try {
            // TODO: replace this block with a real request once the backend
            // exists — e.g. a Cloudflare Pages Function that forwards to an
            // email API:
            //
            // const res = await fetch('/api/contact', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify(form),
            // })
            // if (!res.ok) throw new Error('Request failed')

            await new Promise((resolve) => setTimeout(resolve, 900)) // placeholder delay

            setStatus('success')
        } catch (err) {
            setStatus('error')
        }
    }

    if (status === 'success') {
        return (
            <div className="mx-auto flex max-w-[440px] flex-col items-center gap-3 rounded-2xl border border-confirm/30 bg-confirm/10 px-6 py-10 text-center">
                <CircleCheck size={28} className="text-confirm" />
                <p className="text-sm text-ink">
                    Заявка отправлена. Мы свяжемся с вами в течение дня.
                </p>
            </div>
        )
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto grid max-w-[560px] gap-4 rounded-2xl border border-border bg-surface p-6 text-left sm:grid-cols-2"
        >
            <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-1.5 block text-xs text-ink-muted">
                    Имя
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                    className={fieldClass}
                />
            </div>

            <div className="sm:col-span-1">
                <label htmlFor="company" className="mb-1.5 block text-xs text-ink-muted">
                    Компания
                </label>
                <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Название заведения"
                    className={fieldClass}
                />
            </div>

            <div className="sm:col-span-2">
                <label htmlFor="email" className="mb-1.5 block text-xs text-ink-muted">
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.uz"
                    className={fieldClass}
                />
            </div>

            <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-xs text-ink-muted">
                    Сообщение
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Расскажите о вашем проекте — POS, количество точек и т.д."
                    className={fieldClass}
                />
            </div>

            <div className="sm:col-span-2">
                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-canvas transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                    {status === 'submitting' && <Loader2 size={15} className="animate-spin" />}
                    {status === 'submitting' ? 'Отправка...' : 'Отправить заявку'}
                </button>
                {status === 'error' && (
                    <p className="mt-2 text-center text-xs text-red-400">
                        Не удалось отправить. Попробуйте ещё раз.
                    </p>
                )}
            </div>
        </form>
    )
}