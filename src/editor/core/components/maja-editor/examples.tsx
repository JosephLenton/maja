import React from 'react'
import { Editor, EditorProps } from '.'
import { ExampleSidebar } from '../../../../sidebars/components/maja-sidebar/examples'
import { ExampleLongCollapsableSidebar } from '../../../../sidebars/components/maja-collapsable-sidebar/examples'
import { ExampleTopbar } from '../../../../surfaces/components/maja-topbar/examples'

export const ExampleFullEditor : React.FunctionComponent<Partial<EditorProps>> = props => {
  return <Editor
    sidebarChild={ExampleLongCollapsableSidebar({})}
    topbarChild={ExampleTopbar({})}
    {...props}
  />
}

export const ExamplePartialEditor : React.FunctionComponent<Partial<EditorProps>> = props => {
  return <Editor
    sidebarChild={ExampleSidebar({})}
    topbarChild={ExampleTopbar({})}
    {...props}
  />
}
