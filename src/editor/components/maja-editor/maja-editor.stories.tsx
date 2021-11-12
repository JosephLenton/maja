import '@/core/css'
import { ComponentMeta } from '@storybook/react'
import { Editor } from './maja-editor'
import { ExampleLongSidebar } from '../../../sidebars/components/maja-sidebar/examples'
import { ExampleTopbar } from '../../../surfaces/components/maja-topbar/examples'

export default {
  title: 'Editor/Editor',
  component: Editor,
  argTypes: {},
  parameters: {
    decorator: 'main',
  },
} as ComponentMeta<typeof Editor>

export const WithSidebarAndTopbar = Editor.bind({})
WithSidebarAndTopbar.args = {
  sidebarChild: ExampleLongSidebar({}),
  topbarChild: ExampleTopbar({}),
}

export const WithSidebar = Editor.bind({})
WithSidebar.args = {
  sidebarChild: ExampleLongSidebar({}),
}

/*
export const WithTopbar = Editor.bind({})
WithSidebar.args = {
  topbarChild: ExampleTopbar({}),
}

export const Default = Editor.bind({})
*/