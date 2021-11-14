import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { Modal as ModalComponent } from '@'

export default {
  title: 'Modals/Modal',
  component: ModalComponent,
  argTypes: {},
  parameters: {
    decorator: 'modal',
  },
} as ComponentMeta<typeof ModalComponent>

export const Modal = () => {
  return <ModalComponent>
    This is a blank default modal.
  </ModalComponent>
}
Modal.storyName = "Modal"
