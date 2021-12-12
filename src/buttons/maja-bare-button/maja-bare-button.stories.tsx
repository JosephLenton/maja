import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BareButton as BareButtonComponent, BareButtonProps } from '../../buttons'

export default {
  title: 'Buttons/BareButton',
  component: BareButtonComponent,
  argTypes: {},
  parameters: {
    decorator: 'card',
  },
} as ComponentMeta<typeof BareButtonComponent>

const Template: ComponentStory<typeof BareButtonComponent> = (props: BareButtonProps) => {
  return <BareButtonComponent {...props}>{props.children || 'Click me'}</BareButtonComponent>
}

export const BareButton = () => {
  return <>
    <Template>Default Button</Template>
    <Template selected>Selected Button</Template>
    <Template disabled>Disabled Button</Template>
    <Template selected disabled>Selected Disabled Button</Template>
  </>
}
BareButton.storyName = "BareButton"
