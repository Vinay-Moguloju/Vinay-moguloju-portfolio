import type { ReactNode } from 'react'

type StatusBadgeWrapProps = {
  children: ReactNode
  className?: string
}

/**
 * @function StatusBadgeWrap
 * @memberof webservices/components/common/StatusBadgeWrap
 * @description Provides a wrapper for status badge placement (layout handled by parent styles).
 * @param {StatusBadgeWrapProps} props - Child badge content and optional className.
 * @returns {JSX.Element}
 *
 * @example
 * <StatusBadgeWrap><span className="portfolio-status-badge">...</span></StatusBadgeWrap>
 */
export function StatusBadgeWrap({ children, className = '' }: StatusBadgeWrapProps) {
  return <div className={['status-badge-wrap', className].join(' ').trim()}>{children}</div>
}

