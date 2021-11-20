import React from 'react'
import { H2 } from '@/headings'
import { concatClassNames } from '@maja-ui/util'

import './maja-sidebar-heading.css'

export interface SidebarHeadingProps {
  className?: string
}

export const SidebarHeading : React.FunctionComponent<SidebarHeadingProps> = props => {
  return <H2
      className={concatClassNames('maja-sidebar-heading', props.className)}
  >
    {props.children}
  </H2>
}
