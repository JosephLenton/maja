import React, { useState } from 'react'
import { concatClassNames } from 'maja-util'
import { EditorCard } from './../../../core/components/maja-editor-card'
import { EditorCardButton } from './../../../core/components/maja-editor-card-button'
import classnames from 'classnames'

import './style.css'

export interface EditorControlsCardProps {
  className ?: string
  controls: EditorControlsCardControl[]
}

export interface EditorControlsCardControl {
  textDisplay: string
  sidebarChild: () => React.ReactNode
}

export const EditorControlsCard : React.VoidFunctionComponent<EditorControlsCardProps> = props => {
  const [selectedIndex, setSelectedIndex] = useState<null|number>(null)

  const cardClassName = classnames({
    'maja-editor-controls-card__controls': true,
    'maja-editor-controls-card__controls--is-right-open': selectedIndex !== null,
  })

  return <div className={concatClassNames('maja-editor-controls-card', props.className)}>
    <EditorCard className={cardClassName}>
      {props.controls.map((control, i) => {
        return <EditorCardButton
          key={i}
          selected={selectedIndex === i}
          onClick={() => toggleSelectedIndex(i, selectedIndex, setSelectedIndex)}
        >{control.textDisplay}</EditorCardButton>
      })}
    </EditorCard>

    {selectedIndex !== null && <div className="maja-editor-controls-card__right">
      {props.controls[selectedIndex].sidebarChild()}
    </div>}
  </div>
}

function toggleSelectedIndex(
  i:number,
  selectedIndex: number|null,
  setSelectedIndex: (newIndex: number|null) => void,
): void {
  if (i === selectedIndex) {
    setSelectedIndex(null)
  } else {
    setSelectedIndex(i)
  }
}
