import React from 'react'
import { Sidebar, SidebarProps } from '.'
import { SidebarButton } from '../maja-sidebar-button'
import { NewButton } from '../../../buttons'

export const ExampleSidebar : React.FunctionComponent<Partial<SidebarProps>> = props => {
  return <Sidebar title="Sidebar Example" {...props}>
    <SidebarButton>Example one</SidebarButton>
    <SidebarButton>Item two</SidebarButton>
    <SidebarButton>Third item</SidebarButton>
  </Sidebar>
}

export const ExampleLongSidebar : React.FunctionComponent<Partial<SidebarProps>> = props => {
  return <Sidebar title="Animals" {...props}>
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
    <NewButton />
  </Sidebar>
}

export const ExampleAnimalSidebar : React.FunctionComponent<Partial<SidebarProps>> = props => {
  return <Sidebar {...props}>
    <SidebarButton>🐶 🐶 🐶 🐶 🐶 🐶 🐶 🐶</SidebarButton>
    <SidebarButton>🐈 🐈‍⬛ 🐈 🐈‍⬛ 🐈 🐈‍⬛ 🐈 🐈‍⬛</SidebarButton>
    <SidebarButton>🐪 🐫 🐪 🐫 🐪 🐫 🐪 🐫</SidebarButton>
    <SidebarButton>🐼 🐼 🐼 🐼 🐼 🐼 🐼 🐼</SidebarButton>
    <SidebarButton>🐑 🐏 🐑 🐏 🐑 🐏 🐑 🐏</SidebarButton>
    <SidebarButton>🦒 🦒 🦒 🦒 🦒 🦒 🦒 🦒</SidebarButton>
    <SidebarButton>🦙 🦙 🦙 🦙 🦙 🦙 🦙 🦙</SidebarButton>
    <SidebarButton>🐁 🦅 🦅 🦅 🦅 🦅 🦅 🦅</SidebarButton>
    <SidebarButton>🐟 🐟 🐟 🐟 🐟 🐟 🐟 🐟</SidebarButton>
  </Sidebar>
}
