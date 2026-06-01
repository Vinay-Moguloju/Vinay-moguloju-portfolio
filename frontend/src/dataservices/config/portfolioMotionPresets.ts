/**
 * @module dataservices/config/portfolioMotionPresets
 * @description Shared motion reveal timing presets for portfolio section entrances.
 */

export type PortfolioMotionRevealPreset = {
  delay?: number
  duration: number
  initialX?: number
  initialY?: number
}

export const PORTFOLIO_MOTION_REVEAL_PRESETS = {
  landingActionRow: {
    delay: 0.6,
    duration: 0.6,
  },
  landingAvailabilityBadge: {
    duration: 0.6,
    initialY: 20,
  },
  landingCopyRow: {
    delay: 0.3,
    duration: 0.6,
    initialY: 20,
  },
  landingHeadline: {
    delay: 0.1,
    duration: 0.7,
    initialY: 30,
  },
  scrollIndicator: {
    delay: 1.2,
    duration: 0.6,
  },
} as const satisfies Record<string, PortfolioMotionRevealPreset>

export type PortfolioMotionRevealPresetName = keyof typeof PORTFOLIO_MOTION_REVEAL_PRESETS

/**
 * @function getPortfolioMotionRevealPreset
 * @memberof dataservices/config/portfolioMotionPresets
 * @description Returns motion reveal timing values for a named portfolio preset.
 * @param {PortfolioMotionRevealPresetName} presetName - Named motion preset key.
 * @returns {PortfolioMotionRevealPreset} Preset values.
 *
 * @example
 * getPortfolioMotionRevealPreset('landingHeadline')
 */
export const getPortfolioMotionRevealPreset = (
  presetName: PortfolioMotionRevealPresetName,
): PortfolioMotionRevealPreset => PORTFOLIO_MOTION_REVEAL_PRESETS[presetName]
