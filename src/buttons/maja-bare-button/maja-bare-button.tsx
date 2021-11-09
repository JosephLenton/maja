import React from 'react'
import { ButtonBase, ButtonCoreProps } from '@/buttons/bases/maja-button-base'

import './maja-bare-button.css'

export interface BareButtonProps extends ButtonCoreProps {
}

export const BareButton : React.FunctionComponent<BareButtonProps> = props => {
  return <ButtonBase
      baseClassName="maja-bare-button"
      {...props}
  >
    {props.children}
  </ButtonBase>
}
