import React, { useState } from 'react'
import { concatClassNames } from '@maja-ui/util'
import { EditorCard } from './../../../core/components/maja-editor-card'
import { EditorCardButton } from './../../../core/components/maja-editor-card-button'

import './style.css'

export interface EditorControlsCardProps {
  className ?: string
  controls: EditorControlsCardControl[]
}

export interface EditorControlsCardControl {
  textDisplay: string
  sidebarChild ?: () => React.ReactNode
  onSelect ?: () => void
  onUnselect ?: () => void
}

export const EditorControlsCard : React.VoidFunctionComponent<EditorControlsCardProps> = props => {
  const [selectedIndex, setSelectedIndex] = useState<null|number>(null)
  const sidebarChildFunction = selectedIndex !== null && props.controls[selectedIndex].sidebarChild

  return <div className={concatClassNames('maja-editor-controls-card', props.className)}>
    <EditorCard className={'maja-editor-controls-card__controls'}>
      {props.controls.map((control, i) => {
        return <EditorCardButton
          key={i}
          selected={selectedIndex === i}
          onClick={() => toggleSelectedIndex(control, i, selectedIndex, setSelectedIndex)}
        >{control.textDisplay}</EditorCardButton>
      })}
    </EditorCard>

    {sidebarChildFunction && <div className="maja-editor-controls-card__right">
      {sidebarChildFunction()}
    </div>}
  </div>
}

function toggleSelectedIndex(
  control: EditorControlsCardControl,
  i: number,
  selectedIndex: number|null,
  setSelectedIndex: (newIndex: number|null) => void,
): void {
  if (i === selectedIndex) {
    setSelectedIndex(null)
    control.onUnselect?.()
  } else {
    setSelectedIndex(i)
    control.onSelect?.()
  }
}
