import React from 'react'
import { ButtonBase } from '~buttons/bases/maya-button-base'

import './new-button.css'

export interface NewButtonProps {
  className ?: string
  disabled ?: boolean
  onClick ?: () => void
}

export const NewButton : React.FunctionComponent<NewButtonProps> = props => {
  return <ButtonBase
      baseClassName="new-button"
      {...props}
  >
    <div className="new-button__inner">
      +
    </div>
  </ButtonBase>
}
