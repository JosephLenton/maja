import React from 'react'
import { concatClassNames } from 'maja-util'
import { Sidebar } from '../maja-sidebar'
import { SidebarButton } from '../maja-sidebar-button'

import './style.css'

export interface SidebarListProps<V extends string = string> {
  className ?: string
  title ?: string
  items: V[]
  selectedItem ?: V
  onSelectItem: (item: V) => void
}

export const SidebarList = <V extends string = string>(props: SidebarListProps<V>):React.ReactElement => {
  return <Sidebar
    className={concatClassNames('maja-sidebar-list', props.className)}
    title={props.title}
  >
    {props.items.map(item => {
      return <SidebarButton
        selected={props.selectedItem === item}
        onClick={() => props.onSelectItem(item)}
      >{item}</SidebarButton>
    })}
  </Sidebar>
}
