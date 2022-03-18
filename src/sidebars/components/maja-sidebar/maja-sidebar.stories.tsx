import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { Sidebar as SidebarComponent } from '.'
import { P, Button, Input } from '../../..'
import { ExampleLongSidebar } from './maja-sidebar.examples'

export default {
  title: 'Sidebars/Sidebar',
  component: SidebarComponent,
  argTypes: {},
  parameters: {
    decorator: 'main',
  },
} as ComponentMeta<typeof SidebarComponent>

export const SidebarEmpty = () => {
  return <SidebarComponent />
}
SidebarEmpty.storyName = 'Empty Sidebar'

export const SidebarCompleteWithHeading = ExampleLongSidebar.bind({ title: "animals" })
export const SidebarCompleteWithoutHeading = ExampleLongSidebar.bind({ title: undefined })

export const SidebarWithHeading = () => {
  return <SidebarComponent title="Animals">
    <P>Donkeys</P>
    <P>Penguins</P>
    <P>Camels</P>
    <P>Oxen</P>
    <P>Donkeys</P>
  </SidebarComponent>
}

export const SidebarOfAssortedItems = () => {
  return <SidebarComponent>
    <P>I am text</P>
    <Button>Click me</Button>
    <Input type="number" value={123} onChange={() => {}} />
  </SidebarComponent>
}
