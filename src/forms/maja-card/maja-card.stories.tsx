import '@/core/css'
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { Card as CardComponent } from '@'

export default {
  title: 'Card',
  component: CardComponent,
  parameters: {
    decorator: 'context',
  },
} as ComponentMeta<typeof CardComponent>

export const CardStory = () => {
  return <CardComponent />
}
CardStory.storyName = "Card"
