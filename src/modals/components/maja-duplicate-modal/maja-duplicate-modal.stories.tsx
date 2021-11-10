import '@/core/css'
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { DuplicateModal as DuplicateModalComponent } from '@'
import { ModalOverlayTarget } from '@'

export default {
  title: 'Modals/DuplicateModal',
  component: DuplicateModalComponent,
  parameters: {
    decorator: 'context',
  },
} as ComponentMeta<typeof DuplicateModalComponent>

export const DuplicateModal = (args) => {
  return <>
    <ModalOverlayTarget />

    <DuplicateModalComponent
      {...args}
      onSubmit={() => {}}
      onCancel={() => {}}
    />
  </>
}
DuplicateModal.storyName = "DuplicateModal"
