import { concatClassNames } from '@maja-ui/util'
import React, { PropsWithChildren } from 'react'

import './maja-form.css'

export interface FormProps extends PropsWithChildren {
  className ?: string
  onSubmit: () => void
}

export const Form : React.FunctionComponent<FormProps> = props => {
  return <form
    className={concatClassNames(`maja-form`, props.className)}
    onSubmit={ev => {
      ev.preventDefault()
      props.onSubmit()
    }}
  >
    {props.children}
  </form>
}
