import React from 'react'

import './maja-label.css'

export interface LabelProps {
  className ?: string
}

export const Label : React.FunctionComponent<LabelProps> = props => {
  return <label
      className={`maja-label`}
  >
    {props.children}
  </label>
}
