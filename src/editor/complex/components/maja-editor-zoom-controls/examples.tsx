import React from 'react'
import { EditorZoomControls, EditorZoomControlsProps } from '.'

export const ExampleZoomControls : React.VoidFunctionComponent<Partial<EditorZoomControlsProps>> = props => {
  return <EditorZoomControls
    zoom={1}
    onZoomIn={() => {}}
    onZoomOut={() => {}}
    onSetZoom={() => {}}
    {...props}
  />
}
