import { ComponentMeta } from '@storybook/react'
import { ExampleEditorControlsCard } from './examples'
import { EditorControlsCard as EditorControlsCardComponent } from '.'

export default {
  title: 'Editor/EditorControlsCard',
  component: EditorControlsCardComponent,
  argTypes: {},
  parameters: {
    decorator: 'main',
  },
} as ComponentMeta<typeof EditorControlsCardComponent>

export const EditorControlsCard = ExampleEditorControlsCard.bind({})
EditorControlsCard.storyName = 'EditorControlsCard'
