import React from 'react'
import { ButtonBase } from '@/buttons/bases/maja-button-base'

import './style.css'

export interface CollapsableSidebarButtonProps {
  className ?: string

  collapsed : boolean
  onCollapse : () => void
  onExpand : () => void
}

export const CollapsableSidebarButton : React.VoidFunctionComponent<CollapsableSidebarButtonProps> = props => {
  const displayText = collapseButtonDisplayText(props)

  return <ButtonBase
    baseClassName='maja-collapsable-sidebar-button'
    className={props.className}
    selected={props.collapsed}
    onClick={() => {
      if (props.collapsed) {
        props.onExpand()
      } else {
        props.onCollapse()
      }
    }}
  >
    {displayText}
    <br/>
    {displayText}
    <br/>
    {displayText}
  </ButtonBase>
}

function collapseButtonDisplayText(props: CollapsableSidebarButtonProps):string {
  if (props.collapsed) {
    return "▷"
  } else {
    return "◁"
  }
}
