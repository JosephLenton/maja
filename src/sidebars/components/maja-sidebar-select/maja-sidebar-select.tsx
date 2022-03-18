import React from 'react'
import { Select, SelectProps } from './../../../forms'
import { concatClassNames } from '@maja-ui/util'

import './maja-sidebar-select.css'

export interface SidebarSelectProps<V extends React.Key> extends SelectProps<V> {
}

export const SidebarSelect = <V extends React.Key>(props: SidebarSelectProps<V>): React.ReactElement => {
  return <Select
    {...props}
    className={concatClassNames(props.className, 'maja-sidebar-select')}
  />
}
