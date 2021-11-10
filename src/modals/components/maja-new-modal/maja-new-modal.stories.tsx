import '@/core/css'
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { NewModal as NewModalComponent } from '@'
import { ModalOverlayTarget } from '@'

export default {
  title: 'Modals/NewModal',
  component: NewModalComponent,
  parameters: {
    decorator: 'context',
  },
} as ComponentMeta<typeof NewModalComponent>

export const NewModal = (args) => {
  return <>
    <ModalOverlayTarget />

    <NewModalComponent
      {...args}
      onSubmit={() => {}}
      onCancel={() => {}}
    />
  </>
}
NewModal.storyName = "NewModal"