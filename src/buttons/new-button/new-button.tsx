import React from 'react'
import { MajaButtonBase } from '~buttons/bases/maja-button-base'

import './new-button.css'

export interface NewButtonProps {
  className ?: string
  disabled ?: boolean
  onClick ?: () => void
}

export const NewButton : React.FunctionComponent<NewButtonProps> = props => {
  return <MajaButtonBase
      baseClassName="new-button"
      {...props}
  >
    <div className="new-button__inner">
      +
    </div>
  </MajaButtonBase>
}
