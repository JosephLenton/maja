import React from 'react'
import classnames from 'classnames'

import './maja-card.css'

export interface CardProps {
  className ?: string
  padding ?: CardPadding
}

export type CardPadding = 'small' | 'normal'

export const Card : React.FunctionComponent<CardProps> = props => {
  const className = classnames({
    'card': true,
    [`card--padding-${props.padding}`]: !!props.padding,
    [props.className || '']: props.className,
  })

  return <div className={className}>
    {props.children}
  </div>
}
