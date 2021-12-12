import React from 'react'
import { ButtonBase } from '../../buttons/bases/maja-button-base'

import './maja-new-button.css'

export interface NewButtonProps {
  className ?: string
  disabled ?: boolean
  onClick ?: () => void
}

export const NewButton : React.FunctionComponent<NewButtonProps> = props => {
  return <ButtonBase
      baseClassName="maja-new-button"
      {...props}
  >
    <div className="maja-new-button__inner">
      +
    </div>
  </ButtonBase>
}
