import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { AppNavigation as AppNavigationComponent } from '.'
import { AppNavigationExample, AppNavigationEmptyExample } from './examples'

export default {
  title: 'App/AppNavigation',
  component: AppNavigationComponent,
  argTypes: {},
  parameters: {
    decorator: 'main',
  },
} as ComponentMeta<typeof AppNavigationComponent>

export const AppNavigationWithContent = () => {
  return <AppNavigationExample />
}

export const EmptyAppNavigation = () => {
  return <AppNavigationEmptyExample />
}
