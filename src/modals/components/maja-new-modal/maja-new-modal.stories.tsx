import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { NewModal as NewModalComponent } from '.'

export default {
  title: 'Modals/NewModal',
  component: NewModalComponent,
  parameters: {
    decorator: 'modal',
  },
} as ComponentMeta<typeof NewModalComponent>

export const NewModal = (args) => {
  return <NewModalComponent
    {...args}
    onCancel={() => {}}
    onConfirm={() => {}}
  />
}
NewModal.storyName = "NewModal"
