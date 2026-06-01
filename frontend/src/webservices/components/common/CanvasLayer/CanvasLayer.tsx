import type { Ref } from 'react'

type CanvasLayerProps = {
  canvasRef: Ref<HTMLCanvasElement>
  className?: string
}

/**
 * @function CanvasLayer
 * @memberof webservices/components/common/CanvasLayer
 * @description Renders a reusable canvas layer (positioning handled by parent styles).
 * @param {CanvasLayerProps} props - Canvas ref and optional className.
 * @returns {JSX.Element}
 *
 * @example
 * <CanvasLayer canvasRef={canvasRef} />
 */
export function CanvasLayer({ canvasRef, className = '' }: CanvasLayerProps) {
  return <canvas ref={canvasRef} className={['canvas-layer', className].join(' ').trim()} />
}

