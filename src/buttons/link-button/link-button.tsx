import React from 'react'
import { ButtonBase, ButtonCoreProps } from '~buttons/bases/maya-button-base'

import './link-button.css'

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
