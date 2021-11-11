import React from 'react'

import './maja-toolbar.css'

export interface ToolbarProps {
  className ?: string
}

export const Toolbar : React.FunctionComponent<ToolbarProps> = ({ className, children }) => {
  return <div className={`maja-toolbar ${className || ''}`}>
    {children}
  </div>
}