import '@/core/css'
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { Modal as ModalComponent } from './maja-modal'
import { MajaContext, ModalOverlayTarget } from '@'

export default {
  title: 'Modals/Modal',
  component: ModalComponent,
  argTypes: {},
  parameters: {
    decorator: 'context',
  },
  decorators: [
    (Story) => {
      return <MajaContext>
        <Story />
      </MajaContext>
    },
  ]
} as ComponentMeta<typeof ModalComponent>

export const Modal = () => {
  return <>
    <ModalOverlayTarget />

    <ModalComponent>
      This is a blank default modal.
    </ModalComponent>
  </>
}
