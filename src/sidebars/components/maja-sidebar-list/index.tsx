import React from 'react'
import { concatClassNames } from '@maja-ui/util'
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
    {props.items.map((item, i) => {
      return <SidebarButton
        key={`${i}--${item}`}
        selected={props.selectedItem === item}
        onClick={() => props.onSelectItem(item)}
      >{item}</SidebarButton>
    })}
  </Sidebar>
}
