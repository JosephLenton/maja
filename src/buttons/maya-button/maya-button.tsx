import React from 'react'
import { ButtonBase, ButtonCoreProps } from '~buttons/bases/maya-button-base'

import './maya-button.css'

export interface ButtonProps extends ButtonCoreProps {
}

export const Button : React.FunctionComponent<ButtonProps> = props => {
  return <ButtonBase
      baseClassName="maya-button"
      {...props}
  >
    {props.children}
  </ButtonBase>
}
