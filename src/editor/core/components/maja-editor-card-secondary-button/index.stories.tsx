import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { EditorCardSecondaryButton } from './index'
import { EditorCard } from '../maja-editor-card'
import { ExampleEditorCardSecondaryButtons } from './examples'

export default {
  title: 'Editor/EditorCardSecondaryButton',
  component: EditorCardSecondaryButton,
  parameters: {
    decorator: 'context',
  },
} as ComponentMeta<typeof EditorCardSecondaryButton>

export const CardWithButtons = () => {
  return <ExampleEditorCardSecondaryButtons />
}
CardWithButtons.storyName = 'EditorCardSecondaryButton'
