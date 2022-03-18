import React, { useRef, useEffect, useState } from 'react'
import { SidebarHeading } from '../../internal-components/maja-sidebar-heading'
import { concatClassNames } from '@maja-ui/util'

import './maja-sidebar.css'

export interface SidebarProps {
  className ?: string
  title ?: string
}

export const Sidebar : React.FunctionComponent<SidebarProps> = props => {
  const className = `maja-sidebar ${props.title ? 'maja-sidebar--top-padding' : ''}`
  const contentRef = useRef<HTMLDivElement|null>(null)
  const [hasBottomBorder, setHasBottomBorder] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const dom = contentRef.current
      if (!dom) {
        return
      }

      setHasBottomBorder(dom.scrollTop > 0)
    }

    // Call once to initialise
    onScroll()

    const dom = contentRef.current
    if (!dom) {
      return
    }

    dom.addEventListener('scroll', onScroll)
    return () => {
      dom.removeEventListener('scroll', onScroll)
    }
  }, [contentRef])

  return <div className={concatClassNames(className, props.className)}>
    {props.title && <SidebarHeading bottomBorder={hasBottomBorder}>{props.title}</SidebarHeading>}

    <div ref={contentRef} className="maja-sidebar__content">
      {props.children}
    </div>
  </div>
}
