import React, { PropsWithChildren } from 'react'
import { Point2D } from '@maja-ui/util'

import './style.css'

export interface PivotProps extends PropsWithChildren {
  className?: string
  offset: Point2D
}

export const Pivot : React.FunctionComponent<PivotProps> = props => {
  return <div
      className={`pivot ${props.className || ''}`}
      style={{ 'transform' : `translate(${props.offset.x}px, ${-props.offset.y}px)` }}
  >
    {props.children}
  </div>
}
