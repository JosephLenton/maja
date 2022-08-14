import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { Input as InputComponent } from './maja-input'
import { InputCheckboxExample, InputNumberExample, InputTextExample } from './maja-input.examples'

export default {
  title: 'Forms/Input',
  component: InputComponent,
  argTypes: {},
  parameters: {
    decorator: 'card',
  },
} as ComponentMeta<typeof InputComponent>

const InputNumberDom = InputNumberExample.bind({})
const InputTextDom = InputTextExample.bind({})
const InputCheckboxDom = InputCheckboxExample.bind({})

export const Number = () => {
  return <>
    <InputNumberDom />
    <InputNumberDom value={10} min={5} max={15} />
    <InputNumberDom value={123} disabled />
  </>
}

export const Text = () => {
  return <>
    <InputTextDom />
    <InputTextDom placeholder={"Type here ..."} />
    <InputTextDom value={"Hello"} />
    <InputTextDom value={"Disabled"} disabled />
    <InputTextDom placeholder={"I am disabled ..."} disabled />
  </>
}


export const Checkbox = () => {
  return <>
    <InputCheckboxDom />
    <InputCheckboxDom value={true} />
    <InputCheckboxDom disabled />
    <InputCheckboxDom value={true} disabled />
  </>
}
