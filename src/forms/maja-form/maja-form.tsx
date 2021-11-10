
import React from 'react'

import './maja-form.css'

export interface FormProps {
  className ?: string
  onSubmit: () => void
}

export const Form : React.FunctionComponent<FormProps> = props => {
  return <form
    className={`maja-form`}
    onSubmit={ev => {
      ev.preventDefault()
      props.onSubmit()
    }}
  >
    {props.children}
  </form>
}
