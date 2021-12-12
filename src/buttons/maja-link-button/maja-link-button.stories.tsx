import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LinkButton as LinkButtonComponent, LinkButtonProps } from '.'

export default {
  title: 'Buttons/LinkButton',
  component: LinkButtonComponent,
  argTypes: {},
  parameters: {
    decorator: 'card',
  },
} as ComponentMeta<typeof LinkButtonComponent>

const Template: ComponentStory<typeof LinkButtonComponent> = (props: LinkButtonProps) => {
  return <LinkButtonComponent {...props}>{props.children || 'Click me'}</LinkButtonComponent>
}

export const LinkButton = () => {
  return <>
    <Template>Default Button</Template>
    <Template selected>Selected Button</Template>
    <Template disabled>Disabled Button</Template>
    <Template selected disabled>Selected Disabled Button</Template>
  </>
}
LinkButton.storyName = 'LinkButton'

