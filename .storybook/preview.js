import { MajaContext, ModalOverlayTarget, Card } from '@'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story, args) => {
    const decorator = args.parameters.decorator || 'card'
    if (decorator === 'card') {
      return <MajaContext>
        <Card>
          <Story />
        </Card>
      </MajaContext>
    }

    if (decorator === 'context') {
      return <MajaContext>
        <Story />
      </MajaContext>
    }

    if (decorator === 'modal') {
      return <MajaContext>
        <ModalOverlayTarget />

        <Story />
      </MajaContext>
    }

    if (decorator === 'main') {
      return <div className="fake-main">
        <MajaContext>
          <Story />
        </MajaContext>
      </div>
    }

    throw new Error(`Unknown parameters.background provided ${decorator}`)
  },
]
