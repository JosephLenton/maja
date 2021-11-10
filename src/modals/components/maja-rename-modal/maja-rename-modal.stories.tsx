import '@/core/css'
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { RenameModal as RenameModalComponent } from './maja-rename-modal'

export default {
  title: 'Modals/RenameModal',
  component: RenameModalComponent,
  parameters: {
    decorator: 'modal',
  },
  argTypes: {
    name: {
      defaultValue: 'Barry',
      description: 'What is being renamed',
      control: { type: 'text' },
    }
  },
} as ComponentMeta<typeof RenameModalComponent>

export const RenameModal = (args) => {
  return <RenameModalComponent
    {...args}
    onCancel={() => {}}
    onConfirm={() => {}}
  />
}
RenameModal.storyName = "RenameModal"
