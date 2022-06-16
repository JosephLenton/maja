import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AppNavigationButton as AppNavigationButtonComponent, AppNavigationButtonProps } from '.'
import { AppNavigation } from '..'

export default {
  title: 'App/AppNavigationButton',
  component: AppNavigationButtonComponent,
  argTypes: {},
  parameters: {
    decorator: 'main',
  },
} as ComponentMeta<typeof AppNavigationButtonComponent>

const Template: ComponentStory<React.FunctionComponent<Partial<AppNavigationButtonProps>>> = (props: Partial<AppNavigationButtonProps>) => {
  return <AppNavigationButtonComponent
    onClick={() => {}}
    {...props}
  >{props.children || 'Click me'}</AppNavigationButtonComponent>
}

export const AppNavigationButton = () => {
  return <AppNavigation>
    <Template>Default Button</Template>
    <Template selected>Selected Button</Template>
  </AppNavigation>
}
AppNavigationButton.storyName = "AppNavigationButton"
