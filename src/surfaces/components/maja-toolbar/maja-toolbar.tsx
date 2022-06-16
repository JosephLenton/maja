import React, { PropsWithChildren } from 'react'

import './maja-toolbar.css'

export interface ToolbarProps extends PropsWithChildren {
  className ?: string
}

export const Toolbar : React.FunctionComponent<ToolbarProps> = ({ className, children }) => {
  return <div className={`maja-toolbar ${className || ''}`}>
    {children}
  </div>
}
