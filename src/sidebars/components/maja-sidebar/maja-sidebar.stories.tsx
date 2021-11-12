import '@/core/css'
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { Sidebar as SidebarComponent } from '@'
import { Editor, P, Button, Input, SidebarButton } from '@'

export default {
  title: 'Sidebars/Sidebar',
  component: SidebarComponent,
  argTypes: {},
  parameters: {
    decorator: 'main',
  },
} as ComponentMeta<typeof SidebarComponent>

export const SidebarEmpty = () => {
  return <Template />
}
SidebarEmpty.storyName = 'Empty Sidebar'

export const SidebarCompleteWithHeading = () => {
  return <Template title="Animals">
    <SidebarButton>Donkeys</SidebarButton>
    <SidebarButton>Kittens</SidebarButton>
    <SidebarButton>Camels</SidebarButton>
    <SidebarButton>Oxen</SidebarButton>
    <SidebarButton>Pandas</SidebarButton>
    <SidebarButton>Mountain Goats</SidebarButton>
    <SidebarButton>Dogs</SidebarButton>
    <SidebarButton>Sheep</SidebarButton>
    <SidebarButton>Pigs</SidebarButton>
    <SidebarButton>Giraffes</SidebarButton>
    <SidebarButton>Alpacas</SidebarButton>
    <SidebarButton>Emus</SidebarButton>
    <SidebarButton>Eagles</SidebarButton>
    <SidebarButton>Goldfish</SidebarButton>
    <SidebarButton>Puppies</SidebarButton>
  </Template>
}

export const SidebarCompleteWithoutHeading = () => {
  return <Template>
    <SidebarButton>Donkeys</SidebarButton>
    <SidebarButton>Kittens</SidebarButton>
    <SidebarButton>Camels</SidebarButton>
    <SidebarButton>Oxen</SidebarButton>
    <SidebarButton>Pandas</SidebarButton>
    <SidebarButton>Mountain Goats</SidebarButton>
    <SidebarButton>Dogs</SidebarButton>
    <SidebarButton>Sheep</SidebarButton>
    <SidebarButton>Pigs</SidebarButton>
    <SidebarButton>Giraffes</SidebarButton>
    <SidebarButton>Alpacas</SidebarButton>
    <SidebarButton>Emus</SidebarButton>
    <SidebarButton>Eagles</SidebarButton>
    <SidebarButton>Goldfish</SidebarButton>
    <SidebarButton>Puppies</SidebarButton>
  </Template>
}

export const SidebarWithHeading = () => {
  return <Template title="Animals">
    <P>Donkeys</P>
    <P>Penguins</P>
    <P>Camels</P>
    <P>Oxen</P>
    <P>Donkeys</P>
  </Template>
}

export const SidebarOfAssortedItems = () => {
  return <Template>
    <P>I am text</P>
    <Button>Click me</Button>
    <Input type="number" />
  </Template>
}

const Template : React.FunctionComponent = props => {
  return <Editor
    sidebarChild={<SidebarComponent {...props} />}
  />
}
