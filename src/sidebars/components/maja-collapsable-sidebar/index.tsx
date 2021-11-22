import React, { useState } from 'react'
import { Sidebar, SidebarProps } from '../maja-sidebar'
import { CollapsableSidebarButton } from '../../internal-components/maja-collapsable-sidebar-button'
import { BareButton } from '@/buttons'
import classnames from 'classnames'

import './style.css'

export interface CollapsableSidebarProps extends SidebarProps {
}

export const CollapsableSidebar : React.FunctionComponent<CollapsableSidebarProps> = props => {
  const [isCollapsed, setCollapsed] = useState(false)
  const className = classnames({
    'maja-collapsable-sidebar': true,
    'maja-collapsable-sidebar--collapsed': isCollapsed,
    [props.className || '']: !!props.className,
  })

  return <Sidebar
    {...props}
    className={className}
  >
    {isCollapsed && <BareButton
      className='maja-collapsable-sidebar__overlay'
      onClick={() => setCollapsed(false)}
    />}

    <CollapsableSidebarButton
      className='maja-collapsable-sidebar__collapse-button'
      collapsed={isCollapsed}
      onCollapse={() => setCollapsed(true)}
      onExpand={() => setCollapsed(false)}
    />

    {props.children}
  </Sidebar>
}
