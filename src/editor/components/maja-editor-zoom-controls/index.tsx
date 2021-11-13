import React from 'react'
import { EditorCard } from '../maja-editor-card'
import { EditorCardButton } from '../maja-editor-card-button'

import './style.css'

export interface EditorZoomControlsProps {
  className ?: string

  /**
   * A percentage value for the zoom. Note that 100% is represented as 1.0.
   *
   * Exmaple values ...
   *
   *  - 200% zoom is 2.0
   *  - 150% zoom is 1.5
   *  - 100% zoom is 1.0
   *  - 50% zoom is 0.5
   */
  zoom : number
  zoomInDisabled : boolean
  zoomOutDisabled : boolean
  onZoomIn : () => void
  onZoomOut : () => void
  onSetZoom : (zoom: number) => void
}

export const EditorZoomControls : React.FunctionComponent<EditorZoomControlsProps> = props => {
  return <EditorCard className="maja-editor-zoom-controls">
    <EditorCardButton disabled={props.zoomInDisabled}>+</EditorCardButton>
    <EditorCardButton disabled={props.zoomOutDisabled}>-</EditorCardButton>

    <div className="maja-editor-zoom-controls__zoom-number">
      {formatZoom(props.zoom)}
    </div>
  </EditorCard>
}

const ZOOM_FORMATTER = new Intl.NumberFormat('en-GB', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
})

const ZOOM_OPTION_VALUES = ['200', '150', '100', '75', '50', '25'] as const
type ZoomOptionValue = typeof ZOOM_OPTION_VALUES[number]

type ZoomOption = {
  value: ZoomOptionValue
  text: string
  zoom: number
}
const ZOOM_OPTIONS: ZoomOption[] = (function() {
  const options: ZoomOption[] = []

  for (const value of ZOOM_OPTION_VALUES) {
    const zoom = parseInt(value) / 100.0

    options.push({
      value,
      text: formatZoom(zoom),
      zoom,
    })
  }

  return options as ZoomOption[]
})()

function formatZoom(zoom: number): string {
  return ZOOM_FORMATTER.format(zoom * 100) + '%'
}