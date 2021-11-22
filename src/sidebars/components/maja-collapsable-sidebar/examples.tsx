import React from 'react'
import { CollapsableSidebar, CollapsableSidebarProps } from '.'
import { SidebarButton } from '../maja-sidebar-button'
import { NewButton } from '../../../buttons'

export const ExampleLongCollapsableSidebar : React.FunctionComponent<Partial<CollapsableSidebarProps>> = props => {
  return <CollapsableSidebar title="Animals" {...props}>
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
  </CollapsableSidebar>
}
