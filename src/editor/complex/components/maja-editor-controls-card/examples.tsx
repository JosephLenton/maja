import React from 'react'
import { EditorControlsCard, EditorControlsCardProps } from '.'
import { H1, P } from '../../../..'
import { ExampleLongSidebar, ExampleAnimalSidebar } from './../../../../sidebars/components/maja-sidebar/examples'

export const ExampleEditorControlsCard : React.VoidFunctionComponent<Partial<EditorControlsCardProps>> = props => {
  return <EditorControlsCard
    controls={[
      {
        textDisplay: '+',
        sidebarChild: () => <ExampleLongSidebar />,
      },
      {
        textDisplay: '-',
        sidebarChild: () => <H1>I am a heading</H1>,
      },
      {
        textDisplay: '🗑️',
        sidebarChild: () => <div>
          <P>There is no padding within this right section.</P>
          <br/>
          <P>It is expected you should add your own padding.</P>
        </div>,
      },
      {
        textDisplay: '💾',
      },
      {
        textDisplay: '😍',
        sidebarChild: () => <ExampleAnimalSidebar />,
      },
    ]}
    {...props}
  />
}
