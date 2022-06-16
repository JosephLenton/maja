import React, { PropsWithChildren } from 'react'
import { H2 } from '../../../headings'
import classnames from 'classnames'

import './style.css'

export interface SidebarHeadingProps extends PropsWithChildren {
  className?: string
  bottomBorder: boolean
}

export const SidebarHeading : React.FunctionComponent<SidebarHeadingProps> = props => {
  const className = classnames({
    'maja-sidebar-heading': true,
    'maja-sidebar-heading--bottom-border': props.bottomBorder,
    [props.className || '']: !!props.className,
  })

  return <H2 className={className}>
    {props.children}
  </H2>
}
