import React from 'react'
import { concatClassNames } from '@maja-ui/util'
import { SidebarHeading } from '../../internal-components/maja-sidebar-heading'

import './maja-sidebar.css'

export interface SidebarProps {
  className ?: string
  title ?: string
}

export const Sidebar : React.FunctionComponent<SidebarProps> = props => {
  const className = `maja-sidebar ${props.title ? 'maja-sidebar--top-padding' : ''}`

  return <div className={concatClassNames(className, props.className)}>
    {props.title && <SidebarHeading>{props.title}</SidebarHeading>}

    <div className="maja-sidebar__content">
      {props.children}
    </div>
  </div>
}
