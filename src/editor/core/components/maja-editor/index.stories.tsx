import { ComponentMeta } from '@storybook/react'
import { Editor } from './index'
import { ExampleFullEditor } from './examples'

export default {
  title: 'Editor/Editor',
  component: Editor,
  argTypes: {},
  parameters: {
    decorator: 'main',
  },
} as ComponentMeta<typeof Editor>

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
