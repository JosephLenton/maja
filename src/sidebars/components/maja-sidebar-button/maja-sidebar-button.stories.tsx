import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { SidebarButton as SidebarButtonComponent } from '.'
import { Sidebar } from '../maja-sidebar'

export default {
  title: 'Sidebars/SidebarButton',
  component: SidebarButtonComponent,
  argTypes: {},
  parameters: {
    decorator: 'main',
  },
} as ComponentMeta<typeof SidebarButtonComponent>

export const SidebarButton = () => {
  return <Sidebar title="These are some buttons">
    <SidebarButtonComponent>Default button</SidebarButtonComponent>
    <SidebarButtonComponent selected>Selected button</SidebarButtonComponent>
    <SidebarButtonComponent disabled>Disabled button</SidebarButtonComponent>
    <SidebarButtonComponent disabled selected>Disabled + Selected</SidebarButtonComponent>
  </Sidebar>
}
SidebarButton.storyName = 'SidebarButton'
