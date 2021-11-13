import { Point2D } from 'maja-util'
import React from 'react'

import './style.css'

export interface EditorCanvasPivotProps {
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
