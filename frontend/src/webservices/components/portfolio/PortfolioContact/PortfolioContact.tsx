import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { ArrowUpRight, AtSign, Briefcase, Code2, Mail, Send } from 'lucide-react'
import { usePortfolioContactForm } from '@/hooks/usePortfolioContactForm'
import './_PortfolioContact.scss'
import { FooterPortfolioContent } from '../../common'

const portfolioContactSocials = [
  { handle: '@vinaymoguloju', href: '#', icon: Code2, label: 'GitHub' },
  { handle: '@vinaymoguloju', href: '#', icon: AtSign, label: 'Twitter' },
  { handle: 'Vinay Moguloju', href: '#', icon: Briefcase, label: 'LinkedIn' },
  {
    handle: 'hello@vinaykumar-portfolio.com',
    href: 'mailto:hello@vinaykumar-portfolio.com',
    icon: Mail,
    label: 'Email',
  },
]

/**
 * @function PortfolioContact
 * @memberof webservices/components/portfolio/PortfolioContact
 * @description Renders the portfolio contact section with social links and form.
 * @returns {JSX.Element}
 *
 * @example
 * <PortfolioContact />
 */
export function PortfolioContact() {
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

  const portfolioFooterBrandLabel = 'Vinay.dev'
  const portfolioFooterCopyrightLabel =
    '© 2026 Vinay Moguloju · Built with React + TypeScript'

  return (
    <section id="contact" className="portfolio-contact" ref={portfolioContactSectionRef}>
      <div className="portfolio-contact__inner">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isPortfolioContactInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="portfolio-contact__header"
        >
          <span className="portfolio-section-label">04 / Contact</span>
        </motion.div>

        <div className="portfolio-contact__grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPortfolioContactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h2 className="portfolio-display-heading-lg portfolio-contact__heading">
              Let&apos;s build something
              <span className="portfolio-text-accent"> great</span> together.
            </h2>
            <p className="portfolio-text-body portfolio-contact__intro-copy">
              I&apos;m open to freelance projects, full-time roles, and interesting collaborations.
              If you have an idea you&apos;d like to explore, I&apos;d love to hear about it.
            </p>

            <div className="portfolio-social-list">
              {portfolioContactSocials.map((social, socialIndex) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isPortfolioContactInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + socialIndex * 0.08, duration: 0.5 }}
                  className="portfolio-social-link"
                >
                  <div className="portfolio-social-link__content">
                    <div className="portfolio-social-link__icon-wrap">
                      <social.icon className="portfolio-icon-primary" size={18} />
                    </div>
                    <div>
                      <div className="portfolio-social-label">{social.label}</div>
                      <div className="portfolio-social-handle">{social.handle}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="portfolio-social-link__arrow" size={16} />
                </motion.a>
              ))}
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
                <h3 className="portfolio-form-success-title">Message sent!</h3>
                <p className="portfolio-form-success-copy">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={submitPortfolioContactForm} className="portfolio-form-panel">
                <h3 className="portfolio-form-title">Send a message</h3>

                <div className="portfolio-form-stack">
                  <div>
                    <label className="portfolio-form-label" htmlFor="portfolio-contact-name">
                      Name
                    </label>
                    <input
                      id="portfolio-contact-name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={portfolioContactFormFields.name}
                      onChange={(event) =>
                        updatePortfolioContactFormField('name', event.target.value)
                      }
                      className="portfolio-form-input"
                    />
                  </div>

                  <div>
                    <label className="portfolio-form-label" htmlFor="portfolio-contact-email">
                      Email
                    </label>
                    <input
                      id="portfolio-contact-email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={portfolioContactFormFields.email}
                      onChange={(event) =>
                        updatePortfolioContactFormField('email', event.target.value)
                      }
                      className="portfolio-form-input"
                    />
                  </div>

                  <div>
                    <label className="portfolio-form-label" htmlFor="portfolio-contact-message">
                      Message
                    </label>
                    <textarea
                      id="portfolio-contact-message"
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      value={portfolioContactFormFields.message}
                      onChange={(event) =>
                        updatePortfolioContactFormField('message', event.target.value)
                      }
                      className="portfolio-form-textarea"
                    />
                  </div>

                  <button type="submit" className="portfolio-button portfolio-button--form-submit">
                    <Send className="portfolio-icon-current" size={16} />
                    Send message
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isPortfolioContactInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <FooterPortfolioContent
            brandLabel={portfolioFooterBrandLabel}
            copyrightLabel={portfolioFooterCopyrightLabel}
          />
        </motion.div>
      </div>
    </section>
  )
}
