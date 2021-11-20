import React from 'react'
import { concatClassNames } from '@maja-ui/util'
import { EditorCard } from '../../../core/components/maja-editor-card'
import { EditorCardButton } from '../../../core/components/maja-editor-card-button'

import './style.css'

export interface EditorUndoRedoControlsProps {
  className ?: string

  undoDisabled ?: boolean
  redoDisabled ?: boolean
  onUndo : () => void
  onRedo : () => void
}

export const EditorUndoRedoControls : React.VoidFunctionComponent<EditorUndoRedoControlsProps> = props => {
  return <EditorCard className={concatClassNames("maja-editor-zoom-controls", props.className)} direction="horizontal">
    <EditorCardButton disabled={props.undoDisabled} onClick={props.onUndo}>Undo</EditorCardButton>
    <EditorCardButton disabled={props.redoDisabled} onClick={props.onRedo}>Redo</EditorCardButton>
  </EditorCard>
}
