import { useEffect, useState } from 'react'
import { Search, CornerDownLeft, CircleCheck } from 'lucide-react'

const ITEMS = [
    { name: 'Плов семейный', qty: '1 × 45 000' },
    { name: 'Морс домашний 0.5л', qty: '2 × 12 000' },
]

export default function FiscalDemo() {
    const [confirmed, setConfirmed] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setConfirmed(true), 700)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="mx-auto mt-16 w-full max-w-[560px] overflow-hidden rounded-2xl border border-border bg-surface text-left">

            <div className="flex items-center gap-3 border-b border-border px-5 py-4">
                <Search size={16} className="shrink-0 text-ink-faint" />
                <span className="flex-1 truncate text-sm text-ink">
                    Фискализировать чек · Столик 4
                </span>
                <span className="flex shrink-0 items-center gap-1 rounded-md border border-border px-1.5 py-1 text-ink-faint">
                    <CornerDownLeft size={12} />
                </span>
            </div>

            <div className="px-5 py-4">
                <ul className="space-y-2">
                    {ITEMS.map((item) => (
                        <li key={item.name} className="flex items-baseline justify-between text-sm">
                            <span className="text-ink-muted">{item.name}</span>
                            <span className="font-mono text-xs text-ink-faint">{item.qty}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <span className="font-mono text-xs text-ink-faint">ИКПУ 07131001034000000</span>
                    <span className="font-mono text-sm text-ink">81 000 сум</span>
                </div>

                <div
                    className={`mt-4 flex items-center justify-between rounded-lg border px-3 py-2.5 transition-all duration-500 ${confirmed ? 'border-confirm/30 bg-confirm/10 opacity-100' : 'border-border opacity-0'
                        }`}
                >
                    <span className="flex items-center gap-2 text-sm text-confirm">
                        <CircleCheck size={15} />
                        Фискализировано
                    </span>
                    <span className="font-mono text-xs text-ink-faint">ФП 8271 4093 1156</span>
                </div>

            </div>
        </div>
    )
}