import React, { PropsWithChildren } from 'react'
import classnames from 'classnames'

import './style.css'

export interface EditorCardProps extends PropsWithChildren {
  className ?: string

  direction ?: EditorCardDirection
}

export type EditorCardDirection =
  | 'vertical'
  | 'horizontal'

export const EditorCard : React.FunctionComponent<EditorCardProps> = props => {
  const className = classnames({
    'maja-editor-card': true,
    [`maja-editor-card--direction-${props.direction}`]: !! props.direction,
    [props.className || '']: !! props.className,
  })

  return <div className={className}>
    {props.children}
  </div>
}
