import { ComponentMeta } from '@storybook/react'
import { ExampleLongCollapsableSidebar } from '../maja-collapsable-sidebar/examples'
import { CollapsableSidebar } from '.'

export default {
  title: 'Sidebars/CollapsableSidebar',
  component: CollapsableSidebar,
  argTypes: {},
  parameters: {
    decorator: 'main',
  },
} as ComponentMeta<typeof CollapsableSidebar>

export const CollapsableSidebarStory = ExampleLongCollapsableSidebar.bind({})
CollapsableSidebarStory.storyName = 'CollapsableSidebar'
