import React from 'react'
import { EditorUndoRedoControls, EditorUndoRedoControlsProps } from '.'

export const ExampleEditorUndoRedoControls : React.VoidFunctionComponent<Partial<EditorUndoRedoControlsProps>> = props => {
  return <EditorUndoRedoControls
    undoDisabled={false}
    redoDisabled={false}
    onUndo={() => {}}
    onRedo={() => {}}
    {...props}
  />
}
