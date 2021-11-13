import '@/core/css'
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { EditorCard as EditorCardComponent } from './index'
import Docs from './docs.mdx'

export default {
  title: 'Editor/EditorCard',
  component: EditorCardComponent,
  argTypes: {},
  parameters: {
    decorator: 'context',
    docs: {
      page: Docs,
    }
  },
} as ComponentMeta<typeof EditorCardComponent>

/**
 * I am an editor card.
 * @returns
 */
export const EmptyStory = () => {
  return <EditorCardComponent>
    blah blah
  </EditorCardComponent>
}
