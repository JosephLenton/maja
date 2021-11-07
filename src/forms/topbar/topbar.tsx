import React from 'react'

import './topbar.css'

export interface TopbarProps {
  className ?: string
}

export const Topbar : React.FunctionComponent<TopbarProps> = ({ className, children }) => {
  return <div className={`topbar ${className || ''}`}>
    {children}
  </div>
}
