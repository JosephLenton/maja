import '@/core/css'
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { ConfirmModal as ConfirmModalComponent } from './maja-confirm-modal'
import { MajaContext, ModalOverlayTarget } from '@'

export default {
  title: 'Modals/ConfirmModal',
  component: ConfirmModalComponent,
  parameters: {
    decorator: 'context',
  },
  argTypes: {
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
  },
  decorators: [
    (Story) => {
      return <MajaContext>
        <Story />
      </MajaContext>
    },
  ]
} as ComponentMeta<typeof ConfirmModalComponent>

export const ConfirmModal = (args) => {
  return <>
    <ModalOverlayTarget />

    <ConfirmModalComponent
      {...args}
      onSubmit={() => {}}
      onCancel={() => {}}
    />
  </>
}
ConfirmModal.storyName = "ConfirmModal"
