import '@/core/css'
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { ConfirmModal as ConfirmModalComponent } from '@'

const ARG_TYPES = {
  title: {
    description: 'The title for the modal',
    defaultValue: 'Add more penguins?',
    control: { type: 'text' },
  },
  message: {
    description: 'The modals content',
    defaultValue: 'Would you like to add more penguins to the database?',
    control: { type: 'text' },
  },
} as const

export default {
  title: 'Modals/ConfirmModal',
  component: ConfirmModalComponent,
  parameters: {
    decorator: 'modal',
  },
} as ComponentMeta<typeof ConfirmModalComponent>

export const WithMessage = (args) => {
  return <ConfirmModalComponent
    {...args}
    onSubmit={() => {}}
    onCancel={() => {}}
  />
}
WithMessage.argTypes = {
  ...ARG_TYPES
}

export const WithoutMessage = (args) => {
  return <ConfirmModalComponent
    {...args}
    onSubmit={() => {}}
    onCancel={() => {}}
  />
}
WithoutMessage.argTypes = {
  title: ARG_TYPES.title,
}
