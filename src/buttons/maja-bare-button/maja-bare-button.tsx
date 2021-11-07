import React from 'react'
import { MajaButtonBase, MajaButtonCoreProps } from '~buttons/bases/maja-button-base'

import './maja-bare-button.css'

export interface BareButtonProps extends MajaButtonCoreProps {
}

export const BareButton : React.FunctionComponent<BareButtonProps> = props => {
  return <MajaButtonBase
      baseClassName="maja-bare-button"
      {...props}
  >
    {props.children}
  </MajaButtonBase>
}
