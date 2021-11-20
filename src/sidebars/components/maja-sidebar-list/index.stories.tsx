import { ComponentMeta } from '@storybook/react'
import { SidebarList as SidebarListComponent } from '.'
import { ExampleSidebarList } from './examples'

export default {
  title: 'Sidebars/SidebarList',
  component: SidebarListComponent,
  argTypes: {},
  parameters: {
    decorator: 'main',
  },
} as ComponentMeta<typeof SidebarListComponent>

export const SidebarList = ExampleSidebarList.bind({})
SidebarList.storyName = 'SidebarList'
