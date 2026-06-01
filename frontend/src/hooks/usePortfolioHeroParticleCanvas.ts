/**
 * @module hooks/usePortfolioHeroParticleCanvas
 * @description Manages the animated particle canvas background for the portfolio hero section.
 */

import { PORTFOLIO_PRIMARY_ACCENT_RGB } from '@dataservices/config/portfolioDesignTokens'
import { useEffect, useRef } from 'react'

const PORTFOLIO_HERO_PARTICLE_COUNT = 60
const PORTFOLIO_HERO_PARTICLE_CONNECTION_DISTANCE = 120

const buildPortfolioHeroParticleFillStyle = (alpha: number): string =>
  `rgba(${PORTFOLIO_PRIMARY_ACCENT_RGB.r}, ${PORTFOLIO_PRIMARY_ACCENT_RGB.g}, ${PORTFOLIO_PRIMARY_ACCENT_RGB.b}, ${alpha})`

const buildPortfolioHeroParticleStrokeStyle = (alpha: number): string =>
  `rgba(${PORTFOLIO_PRIMARY_ACCENT_RGB.r}, ${PORTFOLIO_PRIMARY_ACCENT_RGB.g}, ${PORTFOLIO_PRIMARY_ACCENT_RGB.b}, ${alpha})`

/**
 * @function usePortfolioHeroParticleCanvas
 * @memberof hooks/usePortfolioHeroParticleCanvas
 * @description Binds a canvas ref and renders animated portfolio hero particles on mount.
 * @returns {{ portfolioHeroCanvasRef: React.RefObject<HTMLCanvasElement | null> }}
 *
 * @example
 * const { portfolioHeroCanvasRef } = usePortfolioHeroParticleCanvas()
 */
export function usePortfolioHeroParticleCanvas() {
  const portfolioHeroCanvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = portfolioHeroCanvasRef.current
    if (!canvas) return

    const canvasContext = canvas.getContext('2d')
    if (!canvasContext) return

    let animationFrameId: number
    const particles: {
      alpha: number
      size: number
      vx: number
      vy: number
      x: number
      y: number
    }[] = []

    const resizePortfolioHeroCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizePortfolioHeroCanvas()
    window.addEventListener('resize', resizePortfolioHeroCanvas)

    for (let index = 0; index < PORTFOLIO_HERO_PARTICLE_COUNT; index += 1) {
      particles.push({
        alpha: Math.random() * 0.4 + 0.1,
        size: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
      })
    }

    const drawPortfolioHeroParticles = () => {
      canvasContext.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        canvasContext.beginPath()
        canvasContext.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        canvasContext.fillStyle = buildPortfolioHeroParticleFillStyle(particle.alpha)
        canvasContext.fill()
      })

      for (let firstIndex = 0; firstIndex < particles.length; firstIndex += 1) {
        for (let secondIndex = firstIndex + 1; secondIndex < particles.length; secondIndex += 1) {
          const deltaX = particles[firstIndex].x - particles[secondIndex].x
          const deltaY = particles[firstIndex].y - particles[secondIndex].y
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

          if (distance < PORTFOLIO_HERO_PARTICLE_CONNECTION_DISTANCE) {
            canvasContext.beginPath()
            canvasContext.moveTo(particles[firstIndex].x, particles[firstIndex].y)
            canvasContext.lineTo(particles[secondIndex].x, particles[secondIndex].y)
            canvasContext.strokeStyle = buildPortfolioHeroParticleStrokeStyle(
              0.06 * (1 - distance / PORTFOLIO_HERO_PARTICLE_CONNECTION_DISTANCE),
            )
            canvasContext.lineWidth = 0.5
            canvasContext.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawPortfolioHeroParticles)
    }

    drawPortfolioHeroParticles()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizePortfolioHeroCanvas)
    }
  }, [])

  return { portfolioHeroCanvasRef }
}
