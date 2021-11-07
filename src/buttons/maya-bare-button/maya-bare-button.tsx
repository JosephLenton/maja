import React from 'react'
import { ButtonBase, ButtonCoreProps } from '~buttons/bases/maya-button-base'

import './maya-bare-button.css'

export interface BareButtonProps extends ButtonCoreProps {
}

export const BareButton : React.FunctionComponent<BareButtonProps> = props => {
  return <ButtonBase
      baseClassName="maya-bare-button"
      {...props}
  >
    {props.children}
  </ButtonBase>
}
