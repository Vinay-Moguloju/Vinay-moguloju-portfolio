import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  Mail,
  Phone,
  Send,
  type LucideIcon,
} from 'lucide-react'
import { getPortfolioTypographyPresetClassName } from '@dataservices/config/portfolioTypographyPresets'
import type { PortfolioContactProfileKey } from '@dataservices/types/portfolioContactContent.types'
import { usePortfolioContactContent } from '@/hooks/usePortfolioContactContent'
import { usePortfolioContactForm } from '@/hooks/usePortfolioContactForm'

const PORTFOLIO_CONTACT_SOCIAL_ICON_MAP: Record<PortfolioContactProfileKey, LucideIcon> = {
  email: Mail,
  github: Code2,
  linkedIn: Briefcase,
  phone: Phone,
}

/**
 * @function PortfolioContactPage
 * @memberof webservices/components/portfolio/portfolio-contact-page
 * @description Renders the portfolio contact section with social links and form.
 * @returns {JSX.Element}
 *
 * @example
 * <PortfolioContactPage />
 */
export function PortfolioContactPage() {
  const { portfolioContactContent } = usePortfolioContactContent()
  const portfolioContactSectionRef = useRef(null)
  const isPortfolioContactInView = useInView(portfolioContactSectionRef, {
    margin: '-80px',
    once: true,
  })
  const {
    isPortfolioContactMessageSent,
    portfolioContactFormFields,
    submitPortfolioContactForm,
    updatePortfolioContactFormField,
  } = usePortfolioContactForm()

  return (
    <section id="contact" className="portfolio-contact" ref={portfolioContactSectionRef}>
      <div className="portfolio-contact__inner">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isPortfolioContactInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="portfolio-contact__header"
        >
          <span className={getPortfolioTypographyPresetClassName('sectionLabel')}>
            {portfolioContactContent.sectionLabel}
          </span>
        </motion.div>

        <div className="portfolio-contact__grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPortfolioContactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h2
              className={`${getPortfolioTypographyPresetClassName('displayHeadingLg')} portfolio-contact__heading`}
            >
              {portfolioContactContent.headingPrimary}
              <span className={getPortfolioTypographyPresetClassName('textAccent')}>
                {portfolioContactContent.headingAccent}
              </span>
              {portfolioContactContent.headingSuffix}
            </h2>
            <p
              className={`${getPortfolioTypographyPresetClassName('body')} portfolio-contact__intro-copy`}
            >
              {portfolioContactContent.intro}
            </p>

            <div className="portfolio-social-list">
              {portfolioContactContent.socialLinks.map((social, socialIndex) => {
                const SocialIcon = PORTFOLIO_CONTACT_SOCIAL_ICON_MAP[social.profileKey]

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isPortfolioContactInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + socialIndex * 0.08, duration: 0.5 }}
                    className="portfolio-social-link"
                    rel="noreferrer"
                    target={
                      social.profileKey === 'email' || social.profileKey === 'phone'
                        ? undefined
                        : '_blank'
                    }
                  >
                    <div className="portfolio-social-link__content">
                      <div className="portfolio-social-link__icon-wrap">
                        <SocialIcon className="portfolio-icon-primary" size={18} />
                      </div>
                      <div>
                        <div className={getPortfolioTypographyPresetClassName('socialLabel')}>
                          {social.label}
                        </div>
                        <div className={getPortfolioTypographyPresetClassName('socialHandle')}>
                          {social.handle}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="portfolio-social-link__arrow" size={16} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPortfolioContactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="portfolio-contact__form-column"
          >
            {isPortfolioContactMessageSent ? (
              <div className="portfolio-form-success-panel">
                <div className="portfolio-form-success-panel__icon-wrap">
                  <Send className="portfolio-icon-primary" size={24} />
                </div>
                <h3 className={getPortfolioTypographyPresetClassName('formSuccessTitle')}>
                  {portfolioContactContent.successTitle}
                </h3>
                <p className={getPortfolioTypographyPresetClassName('formSuccessCopy')}>
                  {portfolioContactContent.successMessage}
                </p>
              </div>
            ) : (
              <form onSubmit={submitPortfolioContactForm} className="portfolio-form-panel">
                <h3 className={getPortfolioTypographyPresetClassName('formTitle')}>
                  {portfolioContactContent.form.title}
                </h3>

                <div className="portfolio-form-stack">
                  <div>
                    <label
                      className={getPortfolioTypographyPresetClassName('formLabel')}
                      htmlFor="portfolio-contact-name"
                    >
                      {portfolioContactContent.form.nameLabel}
                    </label>
                    <input
                      id="portfolio-contact-name"
                      type="text"
                      required
                      placeholder={portfolioContactContent.form.namePlaceholder}
                      value={portfolioContactFormFields.name}
                      onChange={(event) =>
                        updatePortfolioContactFormField('name', event.target.value)
                      }
                      className="portfolio-form-input"
                    />
                  </div>

                  <div>
                    <label
                      className={getPortfolioTypographyPresetClassName('formLabel')}
                      htmlFor="portfolio-contact-email"
                    >
                      {portfolioContactContent.form.emailLabel}
                    </label>
                    <input
                      id="portfolio-contact-email"
                      type="email"
                      required
                      placeholder={portfolioContactContent.form.emailPlaceholder}
                      value={portfolioContactFormFields.email}
                      onChange={(event) =>
                        updatePortfolioContactFormField('email', event.target.value)
                      }
                      className="portfolio-form-input"
                    />
                  </div>

                  <div>
                    <label
                      className={getPortfolioTypographyPresetClassName('formLabel')}
                      htmlFor="portfolio-contact-message"
                    >
                      {portfolioContactContent.form.messageLabel}
                    </label>
                    <textarea
                      id="portfolio-contact-message"
                      required
                      rows={5}
                      placeholder={portfolioContactContent.form.messagePlaceholder}
                      value={portfolioContactFormFields.message}
                      onChange={(event) =>
                        updatePortfolioContactFormField('message', event.target.value)
                      }
                      className="portfolio-form-textarea"
                    />
                  </div>

                  <button type="submit" className="portfolio-button portfolio-button--form-submit">
                    <Send className="portfolio-icon-current" size={16} />
                    {portfolioContactContent.form.submitLabel}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
