import { LaunchOptions } from 'playwright';
export const browserOptions: LaunchOptions = {
  headless: true,
  slowMo: 0,

  firefoxUserPrefs: {
    'media.navigator.streams.fake': true,
    'media.navigator.permission.disabled': true,
  },
};
