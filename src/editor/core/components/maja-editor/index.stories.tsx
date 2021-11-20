import { useState, useRef, useEffect } from 'react'
import { ComponentMeta } from '@storybook/react'
import { Editor } from './index'
import { ExampleFullEditor } from './examples'
import { ExampleEditorCard } from '../maja-editor-card/examples'
import { ExampleZoomControls } from '../../../complex/components/maja-editor-zoom-controls/examples'
import { Point2D } from '@maja-ui/util'

export default {
  title: 'Editor/Editor',
  component: Editor,
  argTypes: {},
  parameters: {
    decorator: 'main',
  },
} as ComponentMeta<typeof Editor>

export const WithMultipleContent = ExampleFullEditor.bind({})
WithMultipleContent.args = {
  children: [
    <ExamplePointerCanvas />,

    <div style={{ position: 'relative', left: '24px', top: '24px' }}>
      {ExampleEditorCard({})}
    </div>,

    <div style={{ position: 'absolute', right: '24px', bottom: '24px' }}>
      {ExampleZoomControls({})}
    </div>,
  ]
}

export const WithSidebarAndTopbar = ExampleFullEditor.bind({})

export const WithSidebar = ExampleFullEditor.bind({})
WithSidebar.args = {
  topbarChild: undefined,
}

export const WithTopbar = ExampleFullEditor.bind({})
WithTopbar.args = {
  sidebarChild: undefined,
}

export const Default = Editor.bind({})

function ExamplePointerCanvas() {
  const [position, setPosition] = useState<null|Point2D>(null)

  return <div
    onMouseMove={ev => {
      const dom = ev.target as HTMLDivElement
      const rect = dom.getBoundingClientRect()

      setPosition({
        x: ev.clientX - rect.left,
        y: ev.clientY - rect.top,
      })
    }}
      style={{ position: 'relative', width: '100%', height: '100%', background: 'pink' }}
  >
    {position && <div style={{
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
      borderRadius: '50%',
      position: 'absolute',
      left: `${position.x}px`, top: `${position.y}px`,
      width: '24px', height: '24px',
      background: 'red',
    }} />}
  </div>
}
