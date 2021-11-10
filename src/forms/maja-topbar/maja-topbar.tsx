import React from 'react'

import './maja-topbar.css'

export interface TopbarProps {
  className ?: string
}

export const Topbar : React.FunctionComponent<TopbarProps> = ({ className, children }) => {
  return <div className={`maja-topbar ${className || ''}`}>
    {children}
  </div>
}
