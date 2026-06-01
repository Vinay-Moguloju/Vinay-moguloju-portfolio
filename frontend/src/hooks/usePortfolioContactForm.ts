/**
 * @module hooks/usePortfolioContactForm
 * @description Manages portfolio contact form state and submission handling.
 */

import { useState, type FormEvent } from 'react'

type PortfolioContactFormFields = {
  email: string
  message: string
  name: string
}

const PORTFOLIO_CONTACT_FORM_INITIAL_STATE: PortfolioContactFormFields = {
  email: '',
  message: '',
  name: '',
}

/**
 * @function usePortfolioContactForm
 * @memberof hooks/usePortfolioContactForm
 * @description Tracks portfolio contact form values and sent confirmation state.
 * @returns {{
 *   isPortfolioContactMessageSent: boolean,
 *   portfolioContactFormFields: PortfolioContactFormFields,
 *   submitPortfolioContactForm: (event: FormEvent<HTMLFormElement>) => void,
 *   updatePortfolioContactFormField: (fieldName: keyof PortfolioContactFormFields, value: string) => void,
 * }}
 *
 * @example
 * const { portfolioContactFormFields, submitPortfolioContactForm } = usePortfolioContactForm()
 */
export function usePortfolioContactForm() {
  const [isPortfolioContactMessageSent, setIsPortfolioContactMessageSent] = useState(false)
  const [portfolioContactFormFields, setPortfolioContactFormFields] = useState(
    PORTFOLIO_CONTACT_FORM_INITIAL_STATE,
  )

  const updatePortfolioContactFormField = (
    fieldName: keyof PortfolioContactFormFields,
    value: string,
  ) => {
    setPortfolioContactFormFields((currentFields) => ({
      ...currentFields,
      [fieldName]: value,
    }))
  }

  const submitPortfolioContactForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsPortfolioContactMessageSent(true)
  }

  return {
    isPortfolioContactMessageSent,
    portfolioContactFormFields,
    submitPortfolioContactForm,
    updatePortfolioContactFormField,
  }
}
