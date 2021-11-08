import React from 'react'
import { MajaButtonBase, MajaButtonCoreProps } from '@/buttons/bases/maja-button-base'

import './maja-link-button.css'

export interface LinkButtonProps extends MajaButtonCoreProps {
}

export const LinkButton : React.FunctionComponent<LinkButtonProps> = props => {
  return <MajaButtonBase
      baseClassName="link-button"
      {...props}
  >
    {props.children}
  </MajaButtonBase>
}
