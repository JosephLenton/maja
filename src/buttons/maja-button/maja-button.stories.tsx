import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button as ButtonComponent, ButtonProps } from '../../buttons'

export default {
  title: 'Buttons/Button',
  component: ButtonComponent,
  argTypes: {},
  parameters: {
    decorator: 'card',
  },
} as ComponentMeta<typeof ButtonComponent>

const Template: ComponentStory<typeof ButtonComponent> = (props: ButtonProps) => {
  return <ButtonComponent {...props}>{props.children || 'Click me'}</ButtonComponent>
}

export const Button = () => {
  return <>
    <Template>Default Button</Template>
    <Template selected>Selected Button</Template>
    <Template disabled>Disabled Button</Template>
    <Template selected disabled>Selected Disabled Button</Template>
  </>
}
