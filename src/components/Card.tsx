import { type ReactNode } from 'react'

interface CardProps {
  title?: string
  children: ReactNode
  className?: string
}

export default function Card({ title, children, className = '' }: CardProps) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden ${className}`}
    >
      {title && (
        <div className="text-white px-4 py-2 font-semibold" style={{ backgroundColor: 'var(--color-primary)' }}>
          {title}
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  )
}
