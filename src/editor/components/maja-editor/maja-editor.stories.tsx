import '@/core/css'
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { Sidebar, SidebarButton, Editor } from '@'

export default {
  title: 'Editor/Editor',
  component: Editor,
  parameters: {
    decorator: 'main',
  },
  decorators: [
    Story => {
      return <Story />
    },
  ],
} as ComponentMeta<typeof Editor>

export const WithSidebar = () => {
  return <Editor sidebarChild={
    <Sidebar title="Example">
      <SidebarButton>One</SidebarButton>
      <SidebarButton>Two</SidebarButton>
      <SidebarButton>Three</SidebarButton>
    </Sidebar>
  }/>
}

export const WithoutSidebar = () => {
  return <Editor />
}
