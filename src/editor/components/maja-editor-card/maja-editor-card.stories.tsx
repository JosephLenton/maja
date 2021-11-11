import '@/core/css'
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { EditorCard as EditorCardComponent } from '@'

export default {
  title: 'Editor/Card',
  component: EditorCardComponent,
  parameters: {
    decorator: 'context',
  },
  decorators: [
    Story => {
      return <Story />
    },
  ],
} as ComponentMeta<typeof EditorCardComponent>

export const EmptyStory = () => {
  return <EditorCardComponent />
}
