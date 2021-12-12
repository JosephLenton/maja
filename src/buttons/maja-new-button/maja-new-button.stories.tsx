import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { NewButton as NewButtonComponent } from '.'

export default {
  title: 'Buttons/NewButton',
  component: NewButtonComponent,
  argTypes: {},
  parameters: {
    decorator: 'card',
  },
} as ComponentMeta<typeof NewButtonComponent>

export const NewButton = () => {
  return <NewButtonComponent />
}
NewButton.storyName = "NewButton"
