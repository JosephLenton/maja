import '@/core/css'
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { DuplicateModal as DuplicateModalComponent } from '@'

export default {
  title: 'Modals/DuplicateModal',
  component: DuplicateModalComponent,
  parameters: {
    decorator: 'modal',
  },
} as ComponentMeta<typeof DuplicateModalComponent>

export const DuplicateModal = (args) => {
  return <DuplicateModalComponent
    {...args}
    onSubmit={() => {}}
    onCancel={() => {}}
  />
}
DuplicateModal.storyName = "DuplicateModal"
