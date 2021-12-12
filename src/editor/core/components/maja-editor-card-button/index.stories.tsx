import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { EditorCardButton } from './index'
import { EditorCard } from '../maja-editor-card'

export default {
  title: 'Editor/EditorCardButton',
  component: EditorCardButton,
  parameters: {
    decorator: 'context',
  },
} as ComponentMeta<typeof EditorCardButton>

export const CardWithButtons = () => {
  return <EditorCard>
    <EditorCardButton>A</EditorCardButton>
    <EditorCardButton disabled>B</EditorCardButton>
    <EditorCardButton selected>C</EditorCardButton>
    <EditorCardButton selected disabled>D</EditorCardButton>
  </EditorCard>
}
CardWithButtons.storyName = 'EditorCardButton'
