import React from 'react'
import { ButtonBase, ButtonCoreProps } from '@/buttons/bases/maja-button-base'

import './maja-button.css'

export interface ButtonProps extends ButtonCoreProps {
}

export const Button : React.FunctionComponent<ButtonProps> = props => {
  return <ButtonBase
      baseClassName="maja-button"
      {...props}
  >
    {props.children}
  </ButtonBase>
}
