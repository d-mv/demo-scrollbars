import type { Preview } from '@storybook/react';
import '../public/styles/fonts.css'
import '../public/styles/kit.css'
import '../public/styles/base.css'
import '../public/styles/reset.css'
import '../public/styles/tooltip.css'


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
