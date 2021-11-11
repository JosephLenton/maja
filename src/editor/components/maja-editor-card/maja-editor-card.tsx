import React from 'react'
import { concatClassNames } from 'maja-util'

import './maja-editor-card.css'

export interface EditorCardProps {
  className ?: string
}

export const EditorCard : React.FunctionComponent<EditorCardProps> = props => {
  return <div className={concatClassNames('maja-editor-card', props.className)}>
    {props.children}
  </div>
}
