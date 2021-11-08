import '@/core/css'
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, ButtonProps } from '.'

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => {
  return <Button {...args}>Click me</Button>
}

export const Default = Template

export const States = () => {
  return <>
    <Template selected />
    <Template disabled />
    <Template disabled selected />
  </>
}
