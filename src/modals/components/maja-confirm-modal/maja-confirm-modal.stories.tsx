import '@/core/css'
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { ConfirmModal as ConfirmModalComponent } from '@'
import { Form, Label, Input } from '@'

const ARG_TYPES = {
  title: {
    description: 'The title for the modal',
    defaultValue: 'Add more penguins?',
    control: { type: 'text' },
  },
  cancelText: {
    description: 'Text for the cancel button',
    defaultValue: 'Cancel',
    control: { type: 'text' },
  },
  confirmText: {
    description: 'Text for the confirm button',
    defaultValue: 'Confirm',
    control: { type: 'text' },
  },
  confirmDisabled: {
    description: 'Enable or disable the confirm modal',
    defaultValue: true,
    control: { type: 'boolean' },
  },
} as const

export default {
  title: 'Modals/ConfirmModal',
  component: ConfirmModalComponent,
  parameters: {
    decorator: 'modal',
  },
} as ComponentMeta<typeof ConfirmModalComponent>

export const WithContent = (args) => {
  return <ConfirmModalComponent
    {...args}
    onSubmit={() => {}}
    onCancel={() => {}}
  >
    <Form onSubmit={() => {}}>
      <Label>Num kittens <Input type="number" value={123}/></Label>
      <Label>Num puppies <Input type="number" value={456}/></Label>
    </Form>
  </ConfirmModalComponent>
}
WithContent.argTypes = {
  ...ARG_TYPES
}

export const WithoutContent = (args) => {
  return <ConfirmModalComponent
    {...args}
    onSubmit={() => {}}
    onCancel={() => {}}
  />
}
WithoutContent.argTypes = {
  title: ARG_TYPES.title,
}
