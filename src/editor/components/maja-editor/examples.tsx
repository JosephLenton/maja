import React from 'react'
import { Editor, EditorProps } from '.'
import { ExampleLongSidebar } from '../../../sidebars/components/maja-sidebar/examples'
import { ExampleTopbar } from '../../../surfaces/components/maja-topbar/examples'

export const ExampleFullEditor : React.FunctionComponent<Partial<EditorProps>> = props => {
  return <Editor
    sidebarChild={ExampleLongSidebar({})}
    topbarChild={ExampleTopbar({})}
    {...props}
  />
}
