import type { StorybookConfig } from '@storybook/react-vite';
import { withRouter } from 'storybook-addon-react-router-v6';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    'storybook-addon-react-router-v6',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    disableTelemetry: true,// 👈 Disables telemetry
    // @ts-ignore -- TODO: check later, if fixed
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  async viteFinal(currentConfig, { configType }) {
    const envs = { ...(currentConfig.define?.envs ?? {}), 'IS_STORYBOOK': true }
    currentConfig.define = { envs }
    return currentConfig;
  }
};
export default config;

export const decorators = [withRouter];
