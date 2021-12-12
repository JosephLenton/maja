import React from 'react'
import { BareButton } from '../../../buttons/maja-bare-button'
import { ButtonBase, ButtonCoreProps } from '../../../buttons/bases/maja-button-base'

import './maja-sidebar-button.css'

export interface SidebarButtonProps extends ButtonCoreProps {
  controlsChildren ?: React.ReactNode
}

export const SidebarButton : React.FunctionComponent<SidebarButtonProps> = props => {
  return <ButtonBase
    element="div"
    className={props.className}
    baseClassName="maja-sidebar-button"
    selected={props.selected}
    disabled={props.disabled}
  >
    <BareButton
      className="maja-sidebar-button__button"
      disabled={props.disabled}
      tooltip={props.tooltip}
      onClick={props.onClick}
      selected={props.selected}
    >
      {props.children}
    </BareButton>

    {props.controlsChildren && <div className="maja-sidebar-button__controls">
      {props.controlsChildren}
    </div>}
  </ButtonBase>
}
