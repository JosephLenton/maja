import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { EditorZoomControls } from './index'
import { ExampleEditorZoomControls } from './examples'

const ARG_TYPES = {
  zoom: {
    description: 'The current zoom value',
    defaultValue: 1.0,
    control: { type: 'range', min: 0.1, max: 5, step: 0.1 },
  },
  zoomInDisabled: {
    description: 'Enable / disable the zoom in control',
    defaultValue: false,
    control: { type: 'boolean' },
  },
  zoomOutDisabled: {
    description: 'Enable / disable the zoom out control',
    defaultValue: false,
    control: { type: 'boolean' },
  },
} as const

export default {
  title: 'Editor/Complex/EditorZoomControls',
  component: EditorZoomControls,
  argTypes: ARG_TYPES,
  parameters: {
    decorator: 'context',
  },
} as ComponentMeta<typeof EditorZoomControls>

export const Default = (args) => {
  return <ExampleEditorZoomControls
    {...args}
  />
}
Default.storyName = "EditorZoomControls"
