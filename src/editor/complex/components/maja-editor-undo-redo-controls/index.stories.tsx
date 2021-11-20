import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { EditorUndoRedoControls } from '.'
import { ExampleEditorUndoRedoControls } from './examples'

const ARG_TYPES = {
  undoDisabled: {
    description: 'Enable / disable the undo control',
    defaultValue: false,
    control: { type: 'boolean' },
  },
  redoDisabled: {
    description: 'Enable / disable the redo control',
    defaultValue: false,
    control: { type: 'boolean' },
  },
} as const

export default {
  title: 'Editor/Complex/EditorUndoRedoControls',
  component: EditorUndoRedoControls,
  argTypes: ARG_TYPES,
  parameters: {
    decorator: 'context',
  },
} as ComponentMeta<typeof EditorUndoRedoControls>

export const Default = (args) => {
  return <ExampleEditorUndoRedoControls
    {...args}
  />
}
Default.storyName = "EditorUndoRedoControls"
