import React from 'react'
import { EditorCardButton } from '../maja-editor-card-button'
import { EditorCard, EditorCardProps } from '.'

export const ExampleEditorCard : React.VoidFunctionComponent<Partial<EditorCardProps>> = props => {
  return <EditorCard {...props}>
    <EditorCardButton>💯</EditorCardButton>
    <EditorCardButton>📊</EditorCardButton>
    <EditorCardButton>🗑️</EditorCardButton>
    <EditorCardButton>💾</EditorCardButton>
    <EditorCardButton>😍</EditorCardButton>
  </EditorCard>
}
