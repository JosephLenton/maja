import '@/core/css'
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { EditorCanvasPivot } from './index'
import { ExampleFullEditor } from '../../../core/components/maja-editor/examples'

const ARG_TYPES = {
  offsetX: {
    description: 'The X offset for positioning the canvas',
    defaultValue: 0,
    control: { type: 'range', min: -300, max: 300, step: 1 },
  },
  offsetY: {
    description: 'The Y offset for positioning the canvas',
    defaultValue: 0,
    control: { type: 'range', min: -300, max: 300, step: 1 },
  },
} as const

export default {
  title: 'Editor/Complex/EditorCanvasPivot',
  component: EditorCanvasPivot,
  argTypes: ARG_TYPES,
  parameters: {
    decorator: 'context',
  },
  decorators: [
    Story => {
      return <ExampleFullEditor>
        <Story />
      </ExampleFullEditor>
    }
  ]
} as ComponentMeta<typeof EditorCanvasPivot>

export const Default = (args) => {
  return <EditorCanvasPivot
    offset={{ x: args.offsetX, y: args.offsetY }}
  >
    <div style={{ background: 'red', width: '100px', height: '100px'}} />
  </EditorCanvasPivot>
}
Default.storyName = "EditorCanvasPivot"
