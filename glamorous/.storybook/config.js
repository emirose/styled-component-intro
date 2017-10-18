import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'glamorous'
import { css } from 'glamor';
import theme from '../src/foundation/defaultTheme';

const fontUrlPrefix = 'https://cdn.telus.digital/thorium/core/fonts';
const HelveticaNeueThin35 = `${fontUrlPrefix}/aff68211-86bb-476d-882e-f7a3face144c.woff2`;
const HelveticaNeueThin45 = `${fontUrlPrefix}/etext/b8765d4b-d9a3-48b9-ac65-560e7517cf0e.woff2`;
const HelveticaNeueThin55 = `${fontUrlPrefix}/etext/dc50c02f-3f77-4e75-b89c-e3f9bb4752e6.woff2`;
const HelveticaNeueThin65 = `${fontUrlPrefix}/etext/3e8a8b56-3cb0-4347-b670-eaaf06b76e9b.woff2`;
const iconFontUrlPrefix = 'https://cdn.telus.digital/thorium/core/v0.4.0/';
const TelusUtilFontIcon = `${iconFontUrlPrefix}core-icons.woff2`;

css.fontFace({
  fontFamily: "TELUS-Web",
  src: `url('${HelveticaNeueThin35}') format('woff2')`,
  fontWeight: 300,
  fontStyle: 'normal',
})

css.fontFace({
  fontFamily: "TELUS-Web",
  src: `url('${HelveticaNeueThin45}') format('woff2')`,
  fontWeight: 400,
  fontStyle: 'normal',
})

css.fontFace({
  fontFamily: "TELUS-Web",
  src: `url('${HelveticaNeueThin55}') format('woff2')`,
  fontWeight: 500,
  fontStyle: 'normal',
})

css.fontFace({
  fontFamily: "TELUS-Web",
  src: `url('${HelveticaNeueThin65}') format('woff2')`,
  fontWeight: 700,
  fontStyle: 'normal',
})

css.fontFace({
  fontFamily: "TELUS-Icon",
  src: `url('${TelusUtilFontIcon}') format('woff2')`,
  fontWeight: 'normal',
  fontStyle: 'normal',
})

addDecorator(story => (
  <ThemeProvider theme={theme}>
      {story()}
  </ThemeProvider>
));

function loadStories() {
  require('../stories');
}


configure(loadStories, module);
