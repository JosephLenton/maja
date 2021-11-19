import React from 'react'
import { EditorControlsCard, EditorControlsCardProps } from '.'

export const ExampleEditorControlsCard : React.VoidFunctionComponent<Partial<EditorControlsCardProps>> = props => {
  return <EditorControlsCard
    controls={[
      {
        textDisplay: '+',
        sidebarChild: () => <h1>yo</h1>,
      },
      {
        textDisplay: '-',
        sidebarChild: () => <></>,
      },
      {
        textDisplay: '🗑️',
        sidebarChild: () => <></>,
      },
      {
        textDisplay: '💾',
        sidebarChild: () => <></>,
      },
      {
        textDisplay: '😍',
        sidebarChild: () => <></>,
      },
    ]}
    {...props}
  />
}
