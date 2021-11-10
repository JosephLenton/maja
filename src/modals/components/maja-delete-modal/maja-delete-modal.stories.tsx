import '@/core/css'
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { DeleteModal as DeleteModalComponent } from '@'

const ARG_TYPES = {
  name: {
    description: 'Name of the item being deleted',
    defaultValue: 'Giraffe',
    control: { type: 'text' },
  },
  numUses: {
    description: 'The number of times this item is in use',
    defaultValue: 5,
    control: { type: 'number' },
  },
} as const

export default {
  title: 'Modals/DeleteModal',
  component: DeleteModalComponent,
  parameters: {
    decorator: 'modal',
  },
} as ComponentMeta<typeof DeleteModalComponent>

export const WithNoUses = (args) => {
  return <DeleteModalComponent
    {...args}
    numUses={0}
    onSubmit={() => {}}
    onCancel={() => {}}
  />
}
WithNoUses.argTypes = {
  name: ARG_TYPES.name
}

export const WithUses = (args) => {
  return <DeleteModalComponent
    {...args}
    onSubmit={() => {}}
    onCancel={() => {}}
  />
}
WithUses.argTypes = {
  ...ARG_TYPES
}

export const WithoutUses = (args) => {
  return <DeleteModalComponent
    {...args}
    onSubmit={() => {}}
    onCancel={() => {}}
  />
}
WithoutUses.argTypes = {
  name: ARG_TYPES.name,
}
