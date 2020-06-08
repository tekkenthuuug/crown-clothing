import { createGlobalStyle } from 'styled-components';
import { device } from './device';

const GlobalStyle = createGlobalStyle`
  body {
  font-family: "Open Sans Condensed";
  padding: 20px 60px;

  @media ${device.mobile} {
    padding: 10px;
  }
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

export default GlobalStyle;
