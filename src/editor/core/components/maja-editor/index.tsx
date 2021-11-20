import React from 'react'
import { alwaysMap, concatClassNames } from '@maja-ui/util'

import './style.css'

export interface EditorProps {
  className ?: string

  sidebarChild ?: React.ReactNode
  topbarChild ?: React.ReactNode
}

export const Editor : React.FunctionComponent<EditorProps> = props => {
  return <div className={concatClassNames('maja-editor', props.className)}>
    {props.sidebarChild && <div className='maja-editor__sidebar'>
      {props.sidebarChild}
    </div>}

    {props.topbarChild && <div className='maja-editor__topbar'>
      {props.topbarChild}
    </div>}

    <div className='maja-editor__content'>
      {props.children}
    </div>
  </div>
}
