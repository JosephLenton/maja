import { ComponentMeta } from '@storybook/react'
import { SidebarSelect as SidebarSelectComponent } from './maja-sidebar-select'
import { SidebarButton } from '../maja-sidebar-button'
import { SidebarSelectExample } from './maja-sidebar-select.examples'
import { Sidebar } from '../maja-sidebar'

export default {
  title: 'Sidebars/SidebarSelect',
  component: SidebarSelectComponent,
  argTypes: {},
  parameters: {
    decorator: 'main',
  },
} as ComponentMeta<typeof SidebarSelectComponent>

const SidebarSelectDom = SidebarSelectExample.bind({})

export const Select = () => {
  return <Sidebar title="Example sidebar">
    <SidebarSelectDom />
    <SidebarSelectDom disabled />
  </Sidebar>
}

export const SelectWithButtons = () => {
  return <Sidebar title="Example sidebar">
    <SidebarButton>Donkeys</SidebarButton>
    <SidebarButton>Kittens</SidebarButton>
    <SidebarButton>Camels</SidebarButton>

    <SidebarSelectDom />
    <SidebarSelectDom />
    <SidebarSelectDom />

    <SidebarButton>Eagles</SidebarButton>
    <SidebarButton>Goldfish</SidebarButton>
    <SidebarButton>Puppies</SidebarButton>

    <SidebarSelectDom />

    <SidebarButton>Eagles</SidebarButton>
    <SidebarButton>Goldfish</SidebarButton>
    <SidebarButton>Puppies</SidebarButton>
  </Sidebar>
}
