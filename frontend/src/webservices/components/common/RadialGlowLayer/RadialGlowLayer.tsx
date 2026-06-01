type RadialGlowLayerProps = {
  className?: string
}

/**
 * @function RadialGlowLayer
 * @memberof webservices/components/common/RadialGlowLayer
 * @description Renders a reusable radial-glow decorative layer (positioning handled by parent styles).
 * @param {RadialGlowLayerProps} props - Optional className.
 * @returns {JSX.Element}
 *
 * @example
 * <RadialGlowLayer />
 */
export function RadialGlowLayer({ className = '' }: RadialGlowLayerProps) {
  return <div className={['radial-glow-layer', className].join(' ').trim()} />
}

