import React from 'react'
import { ButtonBase, ButtonCoreProps } from '@/buttons/bases/maja-button-base'

import './maja-link-button.css'

export interface LinkButtonProps extends ButtonCoreProps {
}

export const LinkButton : React.FunctionComponent<LinkButtonProps> = props => {
  return <ButtonBase
      baseClassName="link-button"
      {...props}
  >
    {props.children}
  </ButtonBase>
}
