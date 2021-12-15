import React from 'react'
import { EditorCard, EditorCardProps } from '../maja-editor-card'
import { EditorCardSecondaryButton } from './index'

export const ExampleEditorCardSecondaryButtons : React.VoidFunctionComponent<Partial<EditorCardProps>> = props => {
  return <EditorCard direction="horizontal">
    <EditorCardSecondaryButton>🗑</EditorCardSecondaryButton>
    <EditorCardSecondaryButton disabled>❌</EditorCardSecondaryButton>
    <EditorCardSecondaryButton selected>💾</EditorCardSecondaryButton>
    <EditorCardSecondaryButton selected disabled>⚙️</EditorCardSecondaryButton>
  </EditorCard>
}
