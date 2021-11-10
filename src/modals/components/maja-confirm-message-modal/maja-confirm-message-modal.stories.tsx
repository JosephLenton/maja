import '@/core/css'
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { ConfirmMessageModal as ConfirmMessageModalComponent } from '@'

const ARG_TYPES = {
  title: {
    description: 'The title for the modal',
    defaultValue: 'Add more penguins?',
    control: { type: 'text' },
  },
  message: {
    description: 'The message content',
    defaultValue: 'Would you like to add more penguins to the database?',
    control: { type: 'text' },
  },
} as const

export default {
  title: 'Modals/ConfirmMessageModal',
  component: ConfirmMessageModalComponent,
  parameters: {
    decorator: 'modal',
  },
} as ComponentMeta<typeof ConfirmMessageModalComponent>

export const WithMessage = (args) => {
  return <ConfirmMessageModalComponent
    {...args}
    onCancel={() => {}}
    onConfirm={() => {}}
  />
}
WithMessage.argTypes = {
  ...ARG_TYPES
}

export const WithoutMessage = (args) => {
  return <ConfirmMessageModalComponent
    {...args}
    onCancel={() => {}}
    onConfirm={() => {}}
  />
}
WithoutMessage.argTypes = {
  title: ARG_TYPES.title,
}
