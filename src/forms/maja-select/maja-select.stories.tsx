import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { Select as SelectComponent } from './maja-select'
import { SelectExample } from './maja-select.examples'

export default {
  title: 'Forms/Select',
  component: SelectComponent,
  argTypes: {},
  parameters: {
    decorator: 'card',
  },
} as ComponentMeta<typeof SelectComponent>

const SelectDom = SelectExample.bind({})

export const Select = () => {
  return <>
    <SelectDom />
    <SelectDom selectedID="penguin" />
    <SelectDom disabled />
  </>
}
