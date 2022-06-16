import React, { PropsWithChildren, KeyboardEvent } from 'react'
import { concatClassNames } from '@maja-ui/util'

import './maja-card.css'

export interface CardProps extends PropsWithChildren {
  className ?: string

  onKeyUp ?: (ev: KeyboardEvent) => void
}

export const Card : React.FunctionComponent<CardProps> = props => {
  return <div className={concatClassNames('maja-card', props.className)} onKeyUp={props.onKeyUp}>
    {props.children}
  </div>
}
