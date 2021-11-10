import React, { KeyboardEvent } from 'react'
import classnames from 'classnames'

import './maja-card.css'

export interface CardProps {
  className ?: string
  padding ?: CardPadding

  onKeyUp ?: (ev: KeyboardEvent) => void
}

export type CardPadding = 'small' | 'normal'

export const Card : React.FunctionComponent<CardProps> = props => {
  const className = classnames({
    'maja-card': true,
    [`maja-card--padding-${props.padding}`]: !!props.padding,
    [props.className || '']: props.className,
  })

  return <div className={className} onKeyUp={props.onKeyUp}>
    {props.children}
  </div>
}
