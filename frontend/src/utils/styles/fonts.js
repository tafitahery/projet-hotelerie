import { createGlobalStyle } from 'styled-components';
import urlFont1 from '../../assets/fonts/Kanit-LightItalic.ttf';
import urlFont2 from '../../assets/fonts/SecularOne-Regular.ttf';

const fonts = createGlobalStyle`
@font-face {
  font-family: 'font1';
  src: url(${urlFont1}) format('woff2');
}
@font-face {
  font-family: 'font2';
  src: url(${urlFont2}) format('woff2');
}
`;

export default fonts;
