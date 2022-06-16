import React, { PropsWithChildren } from 'react'
import { Point2D } from '@maja-ui/util'

import './style.css'

export interface EditorCanvasPivotProps extends PropsWithChildren {
  className ?: string
  offset: Point2D
}

export const EditorCanvasPivot : React.FunctionComponent<EditorCanvasPivotProps> = props => {
  return <div className="maja-editor-pivot">
    <div className="maja-editor-pivot__contents">
      {props.children}
    </div>
  </div>
}
