
import React from 'react'

import './maja-label.css'

export interface LabelProps {
  className ?: string
  selected ?: boolean
  disabled ?: boolean
  onClick ?: () => void
}

export const Label : React.FunctionComponent<LabelProps> = props => {
  return <label
      className={`label`}
  >
    {props.children}
  </label>
}
