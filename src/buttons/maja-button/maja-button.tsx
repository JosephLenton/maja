import React from 'react'
import { MajaButtonBase, MajaButtonCoreProps } from '@/buttons/bases/maja-button-base'

import './maja-button.css'

export interface ButtonProps extends MajaButtonCoreProps {
}

export const Button : React.FunctionComponent<ButtonProps> = props => {
  return <MajaButtonBase
      baseClassName="maja-button"
      {...props}
  >
    {props.children}
  </MajaButtonBase>
}
