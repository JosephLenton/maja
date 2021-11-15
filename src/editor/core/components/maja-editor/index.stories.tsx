import { ComponentMeta } from '@storybook/react'
import { Editor } from './index'
import { ExampleFullEditor } from './examples'
import { ExampleEditorCard } from '../maja-editor-card/examples'
import { ExampleZoomControls } from '../../../complex/components/maja-editor-zoom-controls/examples'

export default {
  title: 'Editor/Editor',
  component: Editor,
  argTypes: {},
  parameters: {
    decorator: 'main',
  },
} as ComponentMeta<typeof Editor>

export const FullExample = ExampleFullEditor.bind({})
FullExample.args = {
  children: [
    <div style={{ width: '100%', height: '100%', background: 'lightgrey' }} />,

    <div style={{ position: 'absolute', left: '24px', top: '24px' }}>
      {ExampleEditorCard({})}
    </div>,

    <div style={{ position: 'absolute', right: '24px', bottom: '24px' }}>
      {ExampleZoomControls({})}
    </div>,
  ]
}

export const WithSidebarAndTopbar = ExampleFullEditor.bind({})

export const WithSidebar = ExampleFullEditor.bind({})
WithSidebar.args = {
  topbarChild: undefined,
}

export const WithTopbar = ExampleFullEditor.bind({})
WithTopbar.args = {
  sidebarChild: undefined,
}

export const Default = Editor.bind({})
