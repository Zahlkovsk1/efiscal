// Isometric projection: turns a 3D point (x, y, z) into a 2D point on screen.
// 0.866 and 0.5 are cos(30°) and sin(30°) — the classic isometric angle.
const project = (x, y, z) => [(x - y) * 0.866, (x + y) * 0.5 - z]

const toPoints = (corners) =>
    corners.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ')

// The three faces of a box you can see from this angle.
function boxFaces({ x, y, z, w, d, h }) {
    return {
        top: [project(x, y, z + h), project(x + w, y, z + h), project(x + w, y + d, z + h), project(x, y + d, z + h)],
        right: [project(x + w, y, z), project(x + w, y + d, z), project(x + w, y + d, z + h), project(x + w, y, z + h)],
        left: [project(x, y + d, z), project(x + w, y + d, z), project(x + w, y + d, z + h), project(x, y + d, z + h)],
    }
}

// A stack of thermal receipt paper, and two glass cubes for the gateway layers.
const PAPER = { x: 0, y: 0, z: 0, w: 150, d: 80, h: 190 }
const GLASS_BACK = { x: 150, y: -40, z: 95, w: 100, d: 100, h: 100 }
const GLASS_FRONT = { x: 215, y: 55, z: 0, w: 100, d: 100, h: 100 }

const RIB_COUNT = 18

function Ribs() {
    const { x, y, z, w, d, h } = PAPER
    return Array.from({ length: RIB_COUNT }, (_, i) => {
        const x0 = x + (w * i) / RIB_COUNT
        const x1 = x + (w * (i + 0.45)) / RIB_COUNT
        const face = [project(x0, y + d, z), project(x1, y + d, z), project(x1, y + d, z + h), project(x0, y + d, z + h)]
        return <polygon key={i} points={toPoints(face)} fill="url(#api-rib)" />
    })
}

function GlassCube({ box }) {
    const faces = boxFaces(box)
    const hidden = project(box.x, box.y, box.z)
    const hiddenEnds = [
        project(box.x + box.w, box.y, box.z),
        project(box.x, box.y + box.d, box.z),
        project(box.x, box.y, box.z + box.h),
    ]
    const edge = { stroke: 'var(--color-accent-violet)' }

    return (
        <g>
            {hiddenEnds.map(([ex, ey], i) => (
                <line key={i} x1={hidden[0]} y1={hidden[1]} x2={ex} y2={ey} style={edge} strokeOpacity="0.3" />
            ))}
            <polygon points={toPoints(faces.left)} fill="url(#api-glass-left)" style={edge} strokeOpacity="0.5" />
            <polygon points={toPoints(faces.right)} fill="url(#api-glass-right)" style={edge} strokeOpacity="0.5" />
            <polygon points={toPoints(faces.top)} fill="url(#api-glass-top)" style={{ stroke: 'var(--color-ink)' }} strokeOpacity="0.6" />
        </g>
    )
}

export default function ApiIllustration({ className = '' }) {
    const paper = boxFaces(PAPER)

    return (
        <svg viewBox="-89 -210 360 465" className={className} aria-hidden="true">
            <defs>
                <linearGradient id="api-rib" gradientUnits="userSpaceOnUse" x1="0" y1="-190" x2="0" y2="100">
                    <stop offset="0" style={{ stopColor: 'var(--color-ink)' }} stopOpacity="0.85" />
                    <stop offset="0.55" style={{ stopColor: 'var(--color-accent-violet)' }} stopOpacity="0.45" />
                    <stop offset="1" style={{ stopColor: 'var(--color-accent-blue)' }} stopOpacity="0.15" />
                </linearGradient>
                <linearGradient id="api-paper-left" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" style={{ stopColor: 'var(--color-border)' }} />
                    <stop offset="1" style={{ stopColor: 'var(--color-surface)' }} />
                </linearGradient>
                <linearGradient id="api-paper-right" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" style={{ stopColor: 'var(--color-ink-muted)' }} />
                    <stop offset="1" style={{ stopColor: 'var(--color-border)' }} />
                </linearGradient>
                <linearGradient id="api-paper-top" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" style={{ stopColor: 'var(--color-ink)' }} />
                    <stop offset="1" style={{ stopColor: 'var(--color-ink-muted)' }} />
                </linearGradient>
                <linearGradient id="api-glass-left" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" style={{ stopColor: 'var(--color-accent-blue)' }} stopOpacity="0.38" />
                    <stop offset="1" style={{ stopColor: 'var(--color-accent-violet)' }} stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="api-glass-right" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" style={{ stopColor: 'var(--color-accent-violet)' }} stopOpacity="0.32" />
                    <stop offset="1" style={{ stopColor: 'var(--color-surface)' }} stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="api-glass-top" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" style={{ stopColor: 'var(--color-ink)' }} stopOpacity="0.42" />
                    <stop offset="1" style={{ stopColor: 'var(--color-accent-violet)' }} stopOpacity="0.14" />
                </linearGradient>
            </defs>

            <GlassCube box={GLASS_BACK} />

            <polygon points={toPoints(paper.left)} fill="url(#api-paper-left)" />
            <Ribs />
            <polygon points={toPoints(paper.right)} fill="url(#api-paper-right)" />
            <polygon points={toPoints(paper.top)} fill="url(#api-paper-top)" />

            <GlassCube box={GLASS_FRONT} />
        </svg>
    )
}
