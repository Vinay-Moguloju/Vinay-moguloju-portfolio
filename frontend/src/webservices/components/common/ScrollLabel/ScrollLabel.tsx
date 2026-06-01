type ScrollLabelProps = {
  children: string
  className?: string
}

/**
 * @function ScrollLabel
 * @memberof webservices/components/common/ScrollLabel
 * @description Renders a reusable scroll label (currently not used in the UI).
 * @param {ScrollLabelProps} props - Label text and optional className.
 * @returns {JSX.Element}
 *
 * @example
 * <ScrollLabel>Scroll</ScrollLabel>
 */
export function ScrollLabel({ children, className = '' }: ScrollLabelProps) {
  return <span className={['scroll-label', className].join(' ').trim()}>{children}</span>
}

